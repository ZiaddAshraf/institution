import { NextResponse } from 'next/server';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({ visits: 0 });
}

export async function POST() {
  return NextResponse.json({ success: true });
}
