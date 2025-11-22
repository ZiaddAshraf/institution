# Visitor Counter Implementation Guide

## Overview

A persistent visitor counter system for the "عميل راضٍ" (Satisfied Clients) statistic that tracks unique visitors using cookies and stores the count in either Upstash Redis (production) or a local JSON file (development).

## Features

- ✅ Tracks unique visitors using browser cookies
- ✅ Increments counter only once per visitor
- ✅ Persistent storage (survives deployments)
- ✅ Smooth count-up animation
- ✅ Upstash Redis support (production)
- ✅ Local JSON fallback (development)
- ✅ RTL-friendly and i18n compatible

## Files Modified/Created

### 1. `/src/app/api/counter/route.ts` ✨ NEW

**Purpose:** API endpoint for counter logic

**Features:**

- Checks for `gw_visited` cookie
- Increments count for new visitors only
- Sets persistent cookie (1 year expiry)
- Supports both Upstash Redis and file storage
- Auto-initializes storage if not present

**Response:**

```json
{
  "count": 123,
  "incremented": true,
  "storage": "redis" // or "file"
}
```

### 2. `/src/components/StatsCounter.tsx` ✨ NEW

**Purpose:** Client component for displaying animated counter

**Features:**

- Fetches count from API on mount
- Smooth count-up animation using requestAnimationFrame
- Ease-out quad easing for natural feel
- Loading state with pulse animation
- Arabic number formatting

### 3. `/src/app/page.tsx` 🔄 MODIFIED

**Changes:**

- Imported `StatsCounter` component
- Integrated counter into first stats card (satisfied clients)
- Conditional rendering: uses `StatsCounter` for index 0

### 4. `/data/counter.json` ✨ NEW

**Purpose:** Fallback storage for development

**Structure:**

```json
{
  "count": 1
}
```

### 5. `/.env.example` 🔄 MODIFIED

**Added:**

- `UPSTASH_REDIS_REST_URL` documentation
- `UPSTASH_REDIS_REST_TOKEN` documentation

## Environment Variables

### Required for Production (Upstash Redis)

```env
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=AXxxxxxxxxxxxxxxxxxxxx
```

**How to get these:**

1. Sign up at [Upstash](https://upstash.com)
2. Create a new Redis database
3. Copy the REST URL and Token from dashboard
4. Add them to `.env.local` or deployment environment variables

### Development (No env vars needed)

If the environment variables are not set, the system automatically falls back to using `data/counter.json`.

## Storage Logic

### Upstash Redis (Recommended for Production)

- **Key name:** `goodwill:satisfied_clients`
- **Initial value:** 0 (auto-created)
- **Operation:** INCR for new visitors, GET for returning visitors

### File Fallback (Development Only)

- **File path:** `data/counter.json`
- **Initial value:** `{ "count": 0 }`
- **Auto-created:** Yes, if missing

## Cookie Details

| Property | Value                     |
| -------- | ------------------------- |
| Name     | `gw_visited`              |
| Value    | `"true"`                  |
| Max-Age  | 31536000 (1 year)         |
| Path     | `/`                       |
| HttpOnly | `false` (client can read) |
| Secure   | `true` (production only)  |
| SameSite | `lax`                     |

## Behavior

### New Visitor

1. User opens website
2. Client checks for cookie → **Not found**
3. Component calls `/api/counter`
4. API increments count: `count++`
5. API sets `gw_visited` cookie
6. Returns updated count
7. Component animates from 0 to count

### Returning Visitor

1. User opens website again
2. Client checks for cookie → **Found**
3. Component calls `/api/counter`
4. API reads current count (no increment)
5. Returns existing count
6. Component animates from 0 to count

### Incognito Mode

Counts as a **new visitor** since cookies are cleared on session end.

## Testing

### Manual Testing Steps

1. **First Visit (Fresh Browser)**

   ```
   1. Open DevTools → Application → Cookies
   2. Delete any existing `gw_visited` cookie
   3. Refresh the page
   4. Check: Counter should increment
   5. Verify: Cookie `gw_visited=true` is now set
   ```

2. **Returning Visit**

   ```
   1. Refresh the page (with cookie present)
   2. Check: Counter shows same value (no increment)
   3. Verify: Cookie is still present
   ```

3. **Incognito Test**

   ```
   1. Open incognito/private window
   2. Visit the site
   3. Check: Counter increments (new visitor)
   4. Close and reopen incognito
   5. Visit again → Should increment again
   ```

4. **API Test**

   ```bash
   # Test without cookie (should increment)
   curl http://localhost:3000/api/counter

   # Test with cookie (should not increment)
   curl -b "gw_visited=true" http://localhost:3000/api/counter
   ```

5. **Storage Test**

   ```bash
   # Check file storage (if no Redis)
   cat data/counter.json

   # Should show:
   # { "count": X }
   ```

### Automated Testing (Optional)

You can add these tests using Jest/Vitest:

```typescript
// Test cookie detection
// Test increment logic
// Test fallback storage
// Test Redis operations
```

## Deployment

### Vercel / Netlify

1. Add environment variables in dashboard:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
2. Deploy as normal
3. Counter will use Redis automatically

### Docker / VPS

1. Create `.env.local` with Redis credentials
2. Ensure `data/` directory is writable (for fallback)
3. Deploy

### Without Redis (File Storage)

1. Ensure persistent volume for `data/counter.json`
2. File must survive container restarts
3. Not recommended for multi-instance deployments

## Troubleshooting

### Counter not incrementing

- Check browser console for errors
- Verify cookie is being set (DevTools → Application)
- Check API response: `/api/counter` should return JSON

### Counter resets to 0

- **Redis:** Check credentials are correct
- **File:** Ensure `data/` directory has write permissions
- **File:** Verify `counter.json` isn't being deleted on deploy

### Redis connection errors

- Verify `UPSTASH_REDIS_REST_URL` format
- Verify `UPSTASH_REDIS_REST_TOKEN` is valid
- Check Upstash dashboard for rate limits

### Cookie not persisting

- Check browser settings (cookies enabled?)
- Verify domain/path settings in production
- Check Secure flag matches environment (HTTPS in prod)

## Security Considerations

1. **Cookie Manipulation:** Users can delete cookies to increment again (acceptable for this use case)
2. **Rate Limiting:** Consider adding rate limiting to prevent abuse
3. **Bot Traffic:** Consider bot detection if needed
4. **GDPR:** Cookie is functional, but mention in privacy policy

## Future Improvements

- [ ] Add IP-based tracking (in addition to cookies)
- [ ] Add rate limiting (e.g., 1 increment per IP per day)
- [ ] Add analytics dashboard
- [ ] Track visit timestamps
- [ ] Add visitor location tracking (optional)
- [ ] Export counter data to CSV

## Architecture Diagram

```
┌─────────────┐
│   Browser   │
│  (Client)   │
└──────┬──────┘
       │ 1. Check cookie
       │ 2. Call /api/counter
       ▼
┌─────────────────┐
│   Next.js API   │
│  /api/counter   │
└────────┬────────┘
         │
         ├──── Upstash Redis ────┐
         │                        │
         └──── data/counter.json ─┤
                                  │
                              ┌───▼────┐
                              │ Return │
                              │  Count │
                              └────────┘
```

## Code Highlights

### Smart Storage Selection

```typescript
const useRedis = UPSTASH_URL && UPSTASH_TOKEN;
```

### Cookie-Based Deduplication

```typescript
const cookieExists = request.cookies.has(COOKIE_NAME);
const shouldIncrement = !cookieExists;
```

### Smooth Animation

```typescript
const easeOutQuad = (t: number) => t * (2 - t);
```

## Support

For issues or questions:

1. Check this documentation
2. Review browser console logs
3. Check API response at `/api/counter`
4. Verify environment variables

---

**Version:** 1.0.0  
**Last Updated:** 2025-11-22  
**Compatibility:** Next.js 14+ App Router
