import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const COOKIE_NAME = 'gw_visited';
const COUNTER_FILE = path.join(process.cwd(), 'data', 'counter.json');
const HOURS_24_IN_MS = 24 * 60 * 60 * 1000;

interface CounterData {
  count: number;
  lastIncrement?: string;
}

// Dynamic import for Vercel KV to avoid errors in local development
let kv: any = null;
const isProduction = process.env.NODE_ENV === 'production';

async function initKV() {
  if (isProduction && !kv) {
    try {
      const kvModule = await import('@vercel/kv');
      kv = kvModule.kv;
    } catch (error) {
      console.log('KV not available, using file storage');
    }
  }
}

async function getCounterData(): Promise<CounterData> {
  try {
    // Try KV first (production)
    if (kv) {
      const count = await kv.get<number>('counter') || 0;
      const lastIncrement = await kv.get<string>('counter_last_increment') || new Date().toISOString();
      return { count, lastIncrement };
    }
    
    // Fallback to file storage (local development)
    if (!fs.existsSync(COUNTER_FILE)) {
      const dir = path.dirname(COUNTER_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const initialData = { count: 0, lastIncrement: new Date().toISOString() };
      fs.writeFileSync(COUNTER_FILE, JSON.stringify(initialData));
      return initialData;
    }
    const data = fs.readFileSync(COUNTER_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return {
      count: parsed.count || 0,
      lastIncrement: parsed.lastIncrement || new Date().toISOString()
    };
  } catch (error) {
    console.error('Error reading counter:', error);
    return { count: 0, lastIncrement: new Date().toISOString() };
  }
}

async function checkAndAutoIncrement(): Promise<CounterData> {
  try {
    const counterData = await getCounterData();
    const lastIncrementTime = new Date(counterData.lastIncrement!).getTime();
    const currentTime = Date.now();
    const timeDiff = currentTime - lastIncrementTime;

    // Calculate how many 24-hour periods have passed
    const periodsElapsed = Math.floor(timeDiff / HOURS_24_IN_MS);

    if (periodsElapsed > 0) {
      // Auto-increment for each 24-hour period that passed
      const newCount = counterData.count + periodsElapsed;
      const newData = {
        count: newCount,
        lastIncrement: new Date().toISOString()
      };
      
      // Save to KV or file
      if (kv) {
        await kv.set('counter', newCount);
        await kv.set('counter_last_increment', newData.lastIncrement);
      } else {
        fs.writeFileSync(COUNTER_FILE, JSON.stringify(newData));
      }
      
      console.log(`Auto-incremented counter by ${periodsElapsed}. New count: ${newCount}`);
      return newData;
    }

    return counterData;
  } catch (error) {
    console.error('Error in auto-increment:', error);
    return await getCounterData();
  }
}

async function incrementCount(counterData: CounterData): Promise<CounterData> {
  try {
    const newData = {
      count: counterData.count + 1,
      lastIncrement: counterData.lastIncrement
    };
    
    // Save to KV or file
    if (kv) {
      await kv.set('counter', newData.count);
      await kv.set('counter_last_increment', newData.lastIncrement);
    } else {
      fs.writeFileSync(COUNTER_FILE, JSON.stringify(newData));
    }
    
    return newData;
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return counterData;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Initialize KV if in production
    await initKV();
    
    // First, check and perform auto-increment if 24 hours have passed
    let counterData = await checkAndAutoIncrement();
    
    const cookieExists = request.cookies.has(COOKIE_NAME);
    let shouldIncrementForVisitor = !cookieExists;

    // Increment for new visitor (on top of any auto-increment)
    if (shouldIncrementForVisitor) {
      counterData = await incrementCount(counterData);
    }

    const response = NextResponse.json({
      count: counterData.count,
      incremented: shouldIncrementForVisitor,
      storage: kv ? 'kv' : 'file',
      lastIncrement: counterData.lastIncrement,
    });

    if (shouldIncrementForVisitor) {
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
