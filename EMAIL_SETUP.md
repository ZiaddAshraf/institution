# Email Setup Guide

## ✅ What's Been Done

The contact form is now configured to send emails to **ziaddd155@gmail.com** when submitted successfully.

## 🔧 Setup Required

To enable email sending, you need to generate a Gmail App Password:

### Step 1: Enable 2-Step Verification (if not already enabled)
1. Go to your Google Account: https://myaccount.google.com/security
2. Click on "2-Step Verification"
3. Follow the prompts to enable it

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with your Gmail account: **ziaddd155@gmail.com**
3. In the "Select app" dropdown, choose **Mail**
4. In the "Select device" dropdown, choose **Other (Custom name)**
5. Type: "Goodwill Website" or any name you prefer
6. Click **Generate**
7. You'll see a 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 3: Add the Password to Your Project
1. Open the file: `.env.local` (in the root of your project)
2. Replace `your-16-character-app-password-here` with the password you just generated
3. Remove any spaces from the password (use as one continuous string)

Example:
```
EMAIL_PASSWORD=abcdefghijklmnop
```

### Step 4: Restart Your Development Server
After adding the password, restart your Next.js server:
```bash
# Stop the current server (Ctrl+C)
# Then restart it:
npm run dev
```

## 📧 Email Features

When a user submits the contact form, you'll receive:
- **To:** ziaddd155@gmail.com
- **Subject:** رسالة جديدة من موقع طريق الخير - [Customer Name]
- **Content:** Beautiful HTML email with all form details in Arabic
- **Reply-To:** Customer's email (so you can reply directly)

The email includes:
- Customer name
- Customer email
- Customer phone
- Selected service (if provided)
- Message content
- Timestamp in Saudi Arabia timezone

## 🧪 Testing

After setup, test the contact form:
1. Fill out the form on the contact page
2. Submit it
3. Check your inbox at ziaddd155@gmail.com
4. You should see a formatted email with the customer's information

## 🔒 Security Notes

- The `.env.local` file is already in `.gitignore` (won't be uploaded to GitHub)
- Never share your App Password publicly
- The password is only stored locally on your server
- Each App Password is unique and can be revoked anytime

## ⚠️ Important

If you don't set up the App Password, the form will still work on the frontend, but emails won't be sent. Users will see the success message, but you won't receive the email.

## 🆘 Troubleshooting

If emails aren't being sent:
1. Check that 2-Step Verification is enabled on your Google account
2. Verify the App Password is correct in `.env.local`
3. Make sure there are no spaces in the password
4. Restart your development server after adding the password
5. Check the terminal/console for any error messages
