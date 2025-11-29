# Vercel KV Setup for Counter Storage

## Why Vercel KV?

File-based storage doesn't work on Vercel because the filesystem is read-only in production. Vercel KV provides persistent Redis-based storage that works perfectly for counters and small data.

## Setup Steps

### 1. Create a Vercel KV Database

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to the **Storage** tab
4. Click **Create Database**
5. Select **KV (Redis)**
6. Choose a name (e.g., "counter-storage")
7. Select your region (choose closest to your users)
8. Click **Create**

### 2. Connect to Your Project

1. After creating the database, click **Connect Project**
2. Select your project from the list
3. Vercel will automatically add the required environment variables:
   - `KV_URL`
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`

### 3. Initialize Counter (Optional)

If you want to start with your current counter value (3002), you can set it manually:

1. Go to the **Data Browser** tab in your KV database
2. Click **Add Key**
3. Add these keys:
   - Key: `counter`, Value: `3002`, Type: Number
   - Key: `counter_last_increment`, Value: `2025-11-30T00:00:00.000Z`, Type: String

### 4. Deploy

Push your code to trigger a new deployment:

```bash
git add .
git commit -m "Add Vercel KV for persistent counter storage"
git push
```

Or trigger a redeploy from Vercel dashboard.

## How It Works

- **Local Development**: Uses file storage (`data/counter.json`)
- **Production**: Automatically uses Vercel KV
- **Auto-increment**: Counter increases by 1 every 24 hours
- **Visitor tracking**: Still counts unique visitors separately

## Testing

After deployment, visit your site and check:

1. Counter displays correctly
2. Refreshing the page doesn't increment (cookie-based tracking)
3. Check Vercel logs to see storage type: `"storage": "kv"`

## Pricing

Vercel KV Free Tier includes:

- 30,000 commands per month
- 256 MB storage
- Perfect for this counter use case! 🎉

## Troubleshooting

If counter still shows 0:

1. Check Vercel logs for errors
2. Verify environment variables are set in Vercel dashboard
3. Make sure KV database is connected to your project
4. Try manually setting the initial values in Data Browser
