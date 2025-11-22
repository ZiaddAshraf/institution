import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const COOKIE_NAME = 'gw_visited'
const REDIS_KEY = 'goodwill:satisfied_clients'
const FALLBACK_FILE = path.join(process.cwd(), 'data', 'counter.json')

// Initialize Upstash Redis if configured
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

interface CounterData {
  count: number
}

/**
 * Upstash Redis operations
 */
async function getRedisCount(): Promise<number> {
  try {
    const response = await fetch(`${UPSTASH_URL}/get/${REDIS_KEY}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
      cache: 'no-store',
    })

    const data = await response.json()
    
    // If key doesn't exist, initialize it
    if (data.result === null) {
      await fetch(`${UPSTASH_URL}/set/${REDIS_KEY}/0`, {
        headers: {
          Authorization: `Bearer ${UPSTASH_TOKEN}`,
        },
      })
      return 0
    }

    return parseInt(data.result as string, 10)
  } catch (error) {
    console.error('Redis GET error:', error)
    throw error
  }
}

async function incrementRedisCount(): Promise<number> {
  try {
    const response = await fetch(`${UPSTASH_URL}/incr/${REDIS_KEY}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
    })

    const data = await response.json()
    return data.result as number
  } catch (error) {
    console.error('Redis INCR error:', error)
    throw error
  }
}

/**
 * Fallback file system operations
 */
async function ensureCounterFile(): Promise<void> {
  try {
    // Check if file exists
    await fs.access(FALLBACK_FILE)
  } catch {
    // File doesn't exist, create directory and file
    const dir = path.dirname(FALLBACK_FILE)
    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(FALLBACK_FILE, JSON.stringify({ count: 0 }, null, 2), 'utf-8')
  }
}

async function getFileCount(): Promise<number> {
  await ensureCounterFile()
  const content = await fs.readFile(FALLBACK_FILE, 'utf-8')
  const data: CounterData = JSON.parse(content)
  return data.count
}

async function incrementFileCount(): Promise<number> {
  await ensureCounterFile()
  const content = await fs.readFile(FALLBACK_FILE, 'utf-8')
  const data: CounterData = JSON.parse(content)
  data.count += 1
  await fs.writeFile(FALLBACK_FILE, JSON.stringify(data, null, 2), 'utf-8')
  return data.count
}

/**
 * Main GET handler
 */
export async function GET(request: NextRequest) {
  try {
    // Check if cookie exists
    const cookieExists = request.cookies.has(COOKIE_NAME)
    
    let count: number
    let shouldIncrement = !cookieExists

    // Use Redis if configured, otherwise fallback to file
    const useRedis = UPSTASH_URL && UPSTASH_TOKEN

    if (useRedis) {
      if (shouldIncrement) {
        count = await incrementRedisCount()
      } else {
        count = await getRedisCount()
      }
    } else {
      if (shouldIncrement) {
        count = await incrementFileCount()
      } else {
        count = await getFileCount()
      }
    }

    // Prepare response
    const response = NextResponse.json({
      count,
      incremented: shouldIncrement,
      storage: useRedis ? 'redis' : 'file',
    })

    // Set cookie if it doesn't exist
    if (shouldIncrement) {
      const isProduction = process.env.NODE_ENV === 'production'
      response.cookies.set(COOKIE_NAME, 'true', {
        maxAge: 31536000, // 1 year
        path: '/',
        httpOnly: false, // Allow client-side JS to read
        secure: isProduction,
        sameSite: 'lax',
      })
    }

    return response
  } catch (error) {
    console.error('Counter API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch counter', count: 0 },
      { status: 500 }
    )
  }
}
