import { NextRequest, NextResponse } from 'next/server'

// This endpoint initializes the counter to 3000
// Visit: /api/init-counter?secret=YOUR_SECRET to set it up
export async function GET(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret')
    
    // Simple security check - change this secret value
    if (secret !== 'init3000') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Dynamic import for Vercel KV
    const { kv } = await import('@vercel/kv')
    
    // Set initial counter value
    await kv.set('counter', 3000)
    await kv.set('counter_last_increment', new Date().toISOString())
    
    return NextResponse.json({
      success: true,
      message: 'Counter initialized to 3000',
      count: 3000,
      lastIncrement: new Date().toISOString()
    })
  } catch (error) {
    console.error('Init counter error:', error)
    return NextResponse.json(
      { error: 'Failed to initialize counter', details: String(error) },
      { status: 500 }
    )
  }
}
