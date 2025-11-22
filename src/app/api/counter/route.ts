import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'gw_visited';
const REDIS_KEY = 'goodwill:satisfied_clients';
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function getRedisCount() {
  const response = await fetch(`${UPSTASH_URL}/get/${REDIS_KEY}`, {
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
    },
    cache: 'no-store',
  });
  const data = await response.json();
  if (data.result === null) {
    await fetch(`${UPSTASH_URL}/set/${REDIS_KEY}/0`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
    });
    return 0;
  }
  return parseInt(data.result, 10);
}

async function incrementRedisCount() {
  const response = await fetch(`${UPSTASH_URL}/incr/${REDIS_KEY}`, {
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
    },
  });
  const data = await response.json();
  return data.result;
}

export async function GET(request: NextRequest) {
  try {
    if (!UPSTASH_URL || !UPSTASH_TOKEN) {
      return NextResponse.json(
        { error: 'Upstash Redis is not configured. Please set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in your environment variables.', count: 0 },
        { status: 500 }
      );
    }

    const cookieExists = request.cookies.has(COOKIE_NAME);
    let count;
    let shouldIncrement = !cookieExists;

    if (shouldIncrement) {
      count = await incrementRedisCount();
    } else {
      count = await getRedisCount();
    }

    const response = NextResponse.json({
      count,
      incremented: shouldIncrement,
      storage: 'redis',
    });

    if (shouldIncrement) {
      const isProduction = process.env.NODE_ENV === 'production';
      response.cookies.set(COOKIE_NAME, 'true', {
        maxAge: 31536000,
        path: '/',
        httpOnly: false,
        secure: isProduction,
        sameSite: 'lax',
      });
    }

    return response;
  } catch (error) {
    console.error('Counter API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch counter', count: 0 },
      { status: 500 }
    );
  }
}
