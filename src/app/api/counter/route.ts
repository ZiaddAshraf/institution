import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const COOKIE_NAME = 'gw_visited';
const COUNTER_FILE = path.join(process.cwd(), 'data', 'counter.json');

function getCount() {
  try {
    if (!fs.existsSync(COUNTER_FILE)) {
      // Create directory if it doesn't exist
      const dir = path.dirname(COUNTER_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: 0 }));
      return 0;
    }
    const data = fs.readFileSync(COUNTER_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.count || 0;
  } catch (error) {
    console.error('Error reading counter:', error);
    return 0;
  }
}

function incrementCount() {
  try {
    const currentCount = getCount();
    const newCount = currentCount + 1;
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count: newCount }));
    return newCount;
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return getCount();
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieExists = request.cookies.has(COOKIE_NAME);
    let count;
    let shouldIncrement = !cookieExists;

    if (shouldIncrement) {
      count = incrementCount();
    } else {
      count = getCount();
    }

    const response = NextResponse.json({
      count,
      incremented: shouldIncrement,
      storage: 'file',
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
