# 🚨 QUICK FIX - Counter Setup

## The Problem
Your counter shows **0** because `/api/counter` returns **404** on production.

**Root Cause**: Vercel KV is NOT configured (required for serverless functions)

## The Solution (3 Steps - 5 Minutes)

### 1️⃣ Configure Vercel KV
```
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click "Storage" → "Create Database"
4. Choose "KV (Key-Value Store)"
5. Name: "goodwill-counter"
6. Click "Create" then "Connect to Project"
```

### 2️⃣ Deploy Updated Code
```bash
git add .
git commit -m "Fix counter: 3000 initial, 48h increment"
git push origin main
```

Wait 2-3 minutes for Vercel to auto-deploy.

### 3️⃣ Verify
Visit: https://tariqalkhair.com.sa/

Footer should show: **3,000+ عميل**

## What Changed
- ✅ Initial counter: **3000** (was 0)
- ✅ Auto-increment: Every **48 hours** (was 24h)
- ✅ Minimum display: **3000** (was 0)
- ✅ Fallback values: **3000** (was 0)

## Files Changed
- `src/app/api/counter/route.ts` - Counter logic
- `src/components/StatsCounter.tsx` - Display component
- `data/counter.json` - Local storage

## After Deployment
Your counter will:
1. Start at **3,000**
2. Add **+1** every **48 hours** automatically
3. Add **+1** for each new visitor (cookie tracked)
4. Never show less than **3,000**

---

⚠️ **Without Vercel KV, the counter will NOT work on production!**

📖 Full guide: See `COUNTER_SETUP_SUMMARY.md`
