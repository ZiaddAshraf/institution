import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    if (!process.env.TO_EMAIL) {
      console.error('TO_EMAIL is not configured');
      return NextResponse.json(
        { error: 'Recipient email not configured' },
        { status: 500 }
      );
    }

    const fromEmail = process.env.FROM_EMAIL || 'Website Notifications <onboarding@resend.dev>';

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 8px;
              }
              .header {
                background-color: #4F46E5;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #4F46E5;
                margin-bottom: 5px;
              }
              .field-value {
                padding: 10px;
                background-color: #f3f4f6;
                border-radius: 4px;
                border-left: 3px solid #4F46E5;
              }
              .message-box {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a>
                  </div>
                </div>
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="field-value message-box">${message}</div>
                </div>
                <div class="footer">
                  This email was sent from your website contact form
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your website contact form
      `,
    });

    if (resendError) {
      console.error('Resend API error:', resendError);
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: resendError.message || 'Unknown error' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error?.message || 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
