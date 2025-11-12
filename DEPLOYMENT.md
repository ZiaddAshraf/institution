# Deployment Guide - دليل النشر

<div dir="rtl">

## خيارات النشر المتاحة

</div>

---

## 1️⃣ Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Built for Next.js
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free for personal/small business
- ✅ Auto-deploy on push

### Steps:

#### Option A: Deploy via Dashboard
1. **Sign up** at [vercel.com](https://vercel.com)
2. **Click** "Add New Project"
3. **Import** your GitHub repository
4. **Configure** (Vercel auto-detects Next.js):
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
5. **Click** "Deploy"
6. **Wait** ~2 minutes
7. **Done!** Your site is live

#### Option B: Deploy via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Custom Domain Setup:
1. Go to Project Settings → Domains
2. Add your domain (e.g., goodwill.sa)
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

---

## 2️⃣ Static Export Deployment

### Use Cases:
- Traditional shared hosting
- Netlify, GitHub Pages
- AWS S3, Azure Storage
- Custom server

### Build Static Files:
```bash
npm run build
```

This creates an `out` folder with:
```
out/
├── index.html
├── services.html
├── about.html
├── contact.html
├── _next/
│   ├── static/
│   └── ...
└── assets/
```

### Deploy to Different Platforms:

#### Netlify:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --dir=out --prod
```

Or use drag-and-drop on [netlify.com](https://netlify.com)

#### GitHub Pages:
```bash
# Build
npm run build

# Push 'out' folder to gh-pages branch
# Or use GitHub Actions
```

#### AWS S3:
```bash
# Install AWS CLI
aws s3 sync out/ s3://your-bucket-name --delete

# Enable static website hosting in S3 settings
```

---

## 3️⃣ Self-Hosted (Node.js Server)

### Requirements:
- Linux/Ubuntu server
- Node.js 18+
- Nginx (recommended)

### Steps:

#### 1. Prepare Server
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

#### 2. Upload Project
```bash
# On your server
cd /var/www
git clone [your-repo-url] goodwill
cd goodwill

# Install dependencies
npm install

# Build
npm run build
```

#### 3. Configure PM2
```bash
# Start application
pm2 start npm --name "goodwill" -- start

# Save PM2 config
pm2 save

# Auto-start on reboot
pm2 startup
```

#### 4. Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/goodwill
```

Add:
```nginx
server {
    listen 80;
    server_name goodwill.sa www.goodwill.sa;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/goodwill /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 5. SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d goodwill.sa -d www.goodwill.sa
```

---

## 4️⃣ Docker Deployment

### Dockerfile:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Build & Run:
```bash
# Build image
docker build -t goodwill-website .

# Run container
docker run -p 3000:3000 goodwill-website
```

---

## 🔧 Environment Variables

### Production Settings:

Create `.env.production`:
```env
NEXT_PUBLIC_SITE_URL=https://goodwill.sa
NEXT_PUBLIC_PHONE=+966XXXXXXXXX
NEXT_PUBLIC_EMAIL=info@goodwill.sa
NEXT_PUBLIC_WHATSAPP=966XXXXXXXXX
```

### Vercel:
- Add in Project Settings → Environment Variables

### Other Platforms:
- Add via their dashboard or CLI

---

## 📊 Post-Deployment Checklist

### Immediately After Deploy:
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images loading
- [ ] Links working
- [ ] Contact form functioning
- [ ] Mobile responsive
- [ ] HTTPS active

### SEO Setup:
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Set up Google Analytics
- [ ] Submit to Bing Webmaster Tools
- [ ] Add to Google My Business

### Performance:
- [ ] Run Lighthouse audit
- [ ] Check page load speed
- [ ] Test on mobile devices
- [ ] Verify CDN working
- [ ] Check Core Web Vitals

### Security:
- [ ] HTTPS enforced
- [ ] Security headers set
- [ ] No sensitive data exposed
- [ ] Contact form protected

---

## 🔍 Monitoring & Maintenance

### Vercel Analytics:
- Built-in analytics
- Real user monitoring
- Performance insights

### Google Analytics:
```typescript
// Add to layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

### Error Monitoring:
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

---

## 🆘 Troubleshooting

### Build Fails on Vercel:
```bash
# Check build logs
# Common issues:
- Missing dependencies
- TypeScript errors
- Image optimization issues

# Fix: Ensure all imports correct
# Fix: Run 'npm run build' locally first
```

### Slow Performance:
```bash
# Enable compression
# Optimize images
# Use CDN for assets
# Enable caching headers
```

### 404 on Refresh (Static Export):
- Configure your server for SPA routing
- For Netlify: Add `_redirects` file
- For Nginx: Configure try_files

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Netlify Docs:** https://docs.netlify.com
- **Nginx Config:** https://nginx.org/en/docs/

---

<div align="center" dir="rtl">
<p><strong>نشر موفق! 🚀</strong></p>
</div>

<div align="center">
<p><strong>Happy Deploying! 🚀</strong></p>
</div>
