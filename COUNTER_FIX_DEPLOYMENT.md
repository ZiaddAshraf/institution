# Counter Fix - Deployment Guide

## What Was Fixed ✅

1. **Counter Initial Value**: Changed from 0 to **3000**
2. **Auto-Increment Period**: Changed from 24 hours to **48 hours**
3. **Fallback Values**: All fallback values now show 3000 instead of 0
4. **Vercel KV Initialization**: Properly initializes KV storage with 3000 on first run

## How It Works Now 🔧

- **Starting Counter**: 3000 clients
- **Increment Rate**: +1 client every 48 hours automatically
- **New Visitor**: +1 client when someone new visits (cookie-based tracking)
- **Storage**: Uses Vercel KV on production, file storage for local development

## Deployment Steps 🚀

### Step 1: Set Up Vercel KV (Critical for Production)

Your counter is showing 0 on production because Vercel KV is not configured. Follow these steps:

1. **Go to your Vercel Project**:
   - Visit: https://vercel.com/dashboard
   - Select your project: `tariqalkhair.com.sa`

2. **Create a KV Database**:
   - Click on the **Storage** tab
   - Click **Create Database**
   - Select **KV (Key-Value Store)**
   - Name it: `goodwill-counter`
   - Click **Create**

3. **Connect KV to Your Project**:
   - After creating, click **Connect to Project**
   - Select your project
   - Click **Connect**

4. **Environment Variables** (Auto-added):
   - Vercel will automatically add these environment variables:
     - `KV_REST_API_URL`
     - `KV_REST_API_TOKEN`
     - `KV_REST_API_READ_ONLY_TOKEN`

### Step 2: Deploy the Updated Code

1. **Build Locally** (to test):
   ```bash
   npm run build
   ```

2. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Fix counter: Set initial value to 3000 and increment every 48 hours"
   git push origin main
   ```

3. **Vercel Auto-Deploy**:
   - Vercel will automatically deploy when you push to `main`
   - Wait 2-3 minutes for deployment to complete

### Step 3: Initialize the Counter on Vercel

After deployment, the counter will automatically initialize to 3000 on the first API request.

To manually verify:
1. Visit: https://tariqalkhair.com.sa/api/counter
2. You should see:
   ```json
   {
     "count": 3000,
     "incremented": true,
     "storage": "kv",
     "lastIncrement": "2025-12-02T..."
   }
   ```

### Step 4: Verify on Your Website

1. Visit: https://tariqalkhair.com.sa/
2. Scroll to the footer
3. Check "عدد العملاء" (Client Count)
4. Should show: **3,000+ عميل**

## Testing Locally 🧪

Test the counter locally before deploying:

```bash
# Run development server
npm run dev

# Visit http://localhost:3000
# Check the footer counter
# It should show 3,000+

# Check API directly
# Visit http://localhost:3000/api/counter
```

## Troubleshooting 🔍

### Counter Still Shows 0 on Production

**Solution**: Reset Vercel KV database

```bash
# Option 1: Delete and recreate KV database
1. Go to Vercel Dashboard > Storage
2. Delete the existing KV database
3. Create a new one
4. Reconnect to your project
5. Redeploy

# Option 2: Use Vercel CLI to set values manually
npm i -g vercel
vercel login
vercel env pull
# Then set the values manually in Vercel dashboard
```

### Counter Not Incrementing Every 48 Hours

Check the `lastIncrement` timestamp:
```bash
curl https://tariqalkhair.com.sa/api/counter
```

The counter increments +1 for every full 48-hour period that has passed since `lastIncrement`.

### API Returns 404

This means:
1. The API route wasn't deployed
2. Vercel KV environment variables are missing

**Fix**:
- Ensure `src/app/api/counter/route.ts` is committed
- Check environment variables in Vercel Dashboard > Settings > Environment Variables

## Files Changed 📝

1. **src/app/api/counter/route.ts**
   - Changed `HOURS_24_IN_MS` to `HOURS_48_IN_MS`
   - Added `INITIAL_COUNT = 3000` constant
   - Updated all fallback values from 0 to 3000
   - Improved KV initialization logic

2. **src/components/StatsCounter.tsx**
   - Changed fallback value from 0 to 3000
   - Added safety check: if count < 3000, display 3000

3. **data/counter.json**
   - Reset to: `{"count": 3000, "lastIncrement": "2025-12-02T15:32:40.743Z"}`

## How the 48-Hour Auto-Increment Works ⏱️

The counter automatically checks on every API request:

1. Get the `lastIncrement` timestamp
2. Calculate time difference: `currentTime - lastIncrement`
3. Calculate periods: `Math.floor(timeDiff / 48_hours)`
4. If periods > 0:
   - Add `periods` to counter
   - Update `lastIncrement` to now
   - Save to KV/file

**Example**:
- Counter: 3000, Last Increment: Dec 1, 2025 at 10:00 AM
- Current Time: Dec 5, 2025 at 2:00 PM
- Time Difference: ~4 days = ~96 hours
- Periods Elapsed: 96 / 48 = 2
- New Counter: 3000 + 2 = **3002**

## Support 💬

If you encounter any issues:

1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify KV database is connected
4. Test the API endpoint directly: `/api/counter`

---

**Last Updated**: December 2, 2025
**Version**: 1.0
