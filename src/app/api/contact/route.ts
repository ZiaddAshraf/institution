import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Check if email password is configured
    if (!process.env.EMAIL_PASSWORD) {
      console.error('EMAIL_PASSWORD environment variable is not set');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ziaddd155@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content in Arabic
    const mailOptions = {
      from: 'ziaddd155@gmail.com',
      to: 'Goodwill.laundries@gmail.com',
      subject: `رسالة جديدة من موقع طريق الخير - ${name}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              direction: rtl;
              background-color: #f5f5f5;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e5e7eb;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #374151;
              margin-bottom: 5px;
              display: block;
            }
            .value {
              color: #6b7280;
              line-height: 1.6;
            }
            .footer {
              background-color: #f9fafb;
              padding: 20px;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">رسالة جديدة من موقع طريق الخير</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">الاسم:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">البريد الإلكتروني:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">الرسالة:</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">تم الإرسال من موقع مؤسسة طريق الخير للتشغيل والصيانة</p>
              <p style="margin: 5px 0 0 0;">📧 ${new Date().toLocaleString('ar-EG', { timeZone: 'Asia/Riyadh' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email, // Allow direct reply to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully to Goodwill.laundries@gmail.com');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully'
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error?.message || 'Unknown error' 
      },
      { status: 500 }
    );
  }
}