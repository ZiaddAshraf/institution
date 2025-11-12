# 🚀 Quick Start Guide - دليل البدء السريع

<div dir="rtl">

## للمطورين العرب - دليل سريع

### الخطوة 1: التثبيت
```bash
# نسخ المشروع (إذا كان على Git)
git clone [repository-url]
cd mostaqel

# تثبيت الحزم المطلوبة
npm install
```

### الخطوة 2: تشغيل المشروع
```bash
npm run dev
```
افتح المتصفح على: http://localhost:3000

### الخطوة 3: التخصيص السريع

#### 1. تحديث معلومات التواصل
ابحث عن هذه النصوص واستبدلها:
- `966XXXXXXXXX` → رقم الهاتف الفعلي
- `info@goodwill.sa` → البريد الإلكتروني الفعلي
- `المملكة العربية السعودية` → العنوان الفعلي

#### 2. رفع الصور
ضع صورك في:
- `public/assets/logo.jpg` → شعار الشركة
- `public/imgs/hero1.jpg` → صور الخلفيات
- `public/imgs/Service1.jpg` → صور الخدمات

#### 3. تحديث روابط التواصل الاجتماعي
في `src/components/Footer.tsx`:
- استبدل روابط Facebook, Instagram, Twitter

### الخطوة 4: النشر
```bash
# للنشر على Vercel
npm run build

# أو للتصدير الثابت
npm run build
# سيتم إنشاء مجلد out
```

</div>

---

## For English Speakers - Quick Setup

### Step 1: Installation
```bash
# Clone the project (if on Git)
git clone [repository-url]
cd mostaqel

# Install dependencies
npm install
```

### Step 2: Run the Project
```bash
npm run dev
```
Open browser at: http://localhost:3000

### Step 3: Quick Customization

#### 1. Update Contact Info
Search and replace:
- `966XXXXXXXXX` → Your actual phone
- `info@goodwill.sa` → Your email
- Location text → Your address

#### 2. Upload Images
Place your images in:
- `public/assets/logo.jpg` → Company logo
- `public/imgs/hero1.jpg` → Hero backgrounds
- `public/imgs/Service1.jpg` → Service images

#### 3. Update Social Media
In `src/components/Footer.tsx`:
- Replace Facebook, Instagram, Twitter links

### Step 4: Deploy
```bash
# For Vercel deployment
npm run build

# Or for static export
npm run build
# Creates 'out' folder
```

---

## 📝 Essential Files to Modify

### 1. Contact Information
**Files:** `Navbar.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `Contact.tsx`
- Phone numbers
- Email addresses
- WhatsApp links

### 2. Social Media Links
**File:** `Footer.tsx`
- Instagram: Line 127
- Facebook: Line 133
- Twitter: Line 139

### 3. Google Maps
**File:** `src/app/contact/page.tsx`
- Line 465: Update iframe src with your location

### 4. SEO & Metadata
**File:** `src/app/layout.tsx`
- Update company name
- Update descriptions
- Add verification codes

### 5. Structured Data
**File:** `src/components/StructuredData.tsx`
- Update business information
- Update coordinates
- Update operating hours

---

## 🎨 Color Customization

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#00a6a6',  // Change this
    600: '#008282',  // And this
  },
  secondary: {
    500: '#0e87a4',  // Change this
    600: '#0b6980',  // And this
  },
}
```

---

## 🔍 Testing Checklist

Before going live:
- [ ] All contact info updated
- [ ] Images replaced with actual ones
- [ ] Social media links working
- [ ] Contact form tested
- [ ] Google Maps showing correct location
- [ ] All pages load correctly
- [ ] Mobile responsive check
- [ ] WhatsApp button working
- [ ] SEO meta tags updated

---

## 🆘 Common Issues

### Issue: Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Build errors
```bash
# Check TypeScript errors
npm run lint
```

---

## 📞 Need Help?

1. Check `README.md` for detailed instructions
2. Read `TECHNICAL_SUMMARY.md` for architecture details
3. Visit Next.js docs: https://nextjs.org/docs
4. Check TailwindCSS docs: https://tailwindcss.com

---

## 🎯 Next Steps After Setup

1. **Test locally** - Browse all pages
2. **Update content** - Replace placeholder text
3. **Add real images** - Use your actual photos
4. **Test contact form** - Make sure it works
5. **SEO setup** - Submit to Google Search Console
6. **Analytics** - Add Google Analytics
7. **Deploy** - Push to Vercel or your hosting
8. **Monitor** - Check performance and errors

---

<div align="center">
<p><strong>Happy Coding! 💻</strong></p>
<p dir="rtl"><strong>برمجة سعيدة! 💻</strong></p>
</div>
