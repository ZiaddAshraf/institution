import { NextResponse } from 'next/server'

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const hasPassword = !!process.env.EMAIL_PASSWORD
  const passwordLength = process.env.EMAIL_PASSWORD?.length || 0
  
  return NextResponse.json({
    configured: hasPassword,
    passwordLength: passwordLength,
    // Don't expose the actual password
    message: hasPassword 
      ? `Email password is configured (${passwordLength} characters)` 
      : 'Email password is NOT configured'
  })
}
