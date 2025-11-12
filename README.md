# مؤسسة طريق الخير للتشغيل والصيانة
# Goodwill Foundation for Operation and Maintenance

<div dir="rtl">

## نظرة عامة

موقع إلكتروني احترافي وعصري لمؤسسة طريق الخير للتشغيل والصيانة، مبني باستخدام Next.js و TailwindCSS مع دعم كامل للغة العربية ونظام RTL.

</div>

---

## 🌟 Features / المميزات

### Arabic / بالعربية
- ✅ تصميم حديث واحترافي
- ✅ دعم كامل للغة العربية واتجاه RTL
- ✅ تحسين محركات البحث (SEO)
- ✅ سريع ومتجاوب على جميع الأجهزة
- ✅ رسوم متحركة سلسة
- ✅ زر واتساب عائم
- ✅ نموذج اتصال تفاعلي
- ✅ خريطة Google Maps
- ✅ روابط التواصل الاجتماعي

### English
- ✅ Modern and professional design
- ✅ Full Arabic support with RTL layout
- ✅ SEO optimized
- ✅ Fast and responsive on all devices
- ✅ Smooth animations
- ✅ Floating WhatsApp button
- ✅ Interactive contact form
- ✅ Google Maps integration
- ✅ Social media links

---

## 🛠️ Tech Stack / التقنيات المستخدمة

- **Framework:** Next.js 14+ (App Router)
- **Styling:** TailwindCSS 3.4+
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Font:** Cairo & Tajawal (Google Fonts)

---

## 📋 Prerequisites / المتطلبات الأولية

Before running this project, make sure you have:
- Node.js 18+ installed
- npm or yarn package manager

قبل تشغيل المشروع، تأكد من تثبيت:
- Node.js 18+ أو أحدث
- npm أو yarn

---

## 🚀 Installation / التثبيت

### 1. Install Dependencies / تثبيت الحزم المطلوبة

```bash
npm install
# or
yarn install
```

### 2. Run Development Server / تشغيل السيرفر المحلي

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

افتح [http://localhost:3000](http://localhost:3000) في متصفحك.

### 3. Build for Production / بناء المشروع للإنتاج

```bash
npm run build
# or
yarn build
```

### 4. Start Production Server / تشغيل السيرفر الإنتاجي

```bash
npm run start
# or
yarn start
```

---

## 📁 Project Structure / هيكل المشروع

```
goodwill-foundation/
├── public/
│   ├── assets/           # Logo and images
│   ├── imgs/             # Service and hero images
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── app/
│   │   ├── about/        # About Us page
│   │   ├── contact/      # Contact page
│   │   ├── services/     # Services page
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       ├── Footer.tsx           # Footer component
│       ├── WhatsAppButton.tsx   # Floating WhatsApp button
│       └── StructuredData.tsx   # SEO structured data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Customization / التخصيص

### Update Contact Information / تحديث معلومات التواصل

<div dir="rtl">

1. **رقم الهاتف / WhatsApp:**
   - افتح ملفات: `Navbar.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`
   - استبدل `966XXXXXXXXX` برقمك الفعلي

2. **البريد الإلكتروني:**
   - في `Footer.tsx` و `Contact.tsx`
   - استبدل `info@goodwill.sa` ببريدك الفعلي

3. **العنوان:**
   - في `Footer.tsx` و `StructuredData.tsx`
   - حدث العنوان والموقع الجغرافي

4. **روابط التواصل الاجتماعي:**
   - في `Footer.tsx`
   - أضف روابط صفحاتك على Instagram, Facebook, Twitter

</div>

### Update Logo & Images / تحديث الشعار والصور

```bash
# Place your files in:
public/assets/logo.jpg        # Your company logo
public/imgs/hero1.jpg         # Hero section images
public/imgs/Service1.jpg      # Service images
```

### Change Colors / تغيير الألوان

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#00a6a6',  // Main brand color
    600: '#008282',
  },
  secondary: {
    500: '#0e87a4',
    600: '#0b6980',
  },
}
```

---

## 🌐 Deployment / النشر

### Deploy to Vercel (Recommended) / النشر على Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy
5. Your site will be live in minutes!

### Static Export / التصدير الثابت

For static hosting (Netlify, GitHub Pages, etc.):

```bash
npm run build
# This creates an 'out' folder with static files
```

Upload the `out` folder to your hosting provider.

---

## 📱 Pages Overview / نظرة على الصفحات

### 1. Home Page (الصفحة الرئيسية)
- Hero section with background image
- About preview
- Services showcase
- Statistics counter
- Client testimonials
- Call-to-action section

### 2. Services Page (صفحة الخدمات)
- Main services (Operation, Maintenance, Cleaning)
- Additional services grid
- Why choose us section
- Contact CTA

### 3. About Us (من نحن)
- Company story
- Mission & Vision
- Core values
- Photo gallery
- Achievements

### 4. Contact (اتصل بنا)
- Contact form
- Contact information cards
- Working hours
- Social media links
- Google Maps integration

---

## 🔧 Configuration / الإعدادات

### SEO Configuration / إعدادات SEO

Edit `src/app/layout.tsx` to update:
- Meta titles and descriptions
- Open Graph tags
- Twitter card tags
- Verification codes

Edit `src/components/StructuredData.tsx` for:
- LocalBusiness schema
- Contact information
- Operating hours
- Service areas

### Google Maps / خريطة Google

In `src/app/contact/page.tsx`:
1. Get your Google Maps embed code
2. Replace the iframe `src` with your location

---

## 📊 SEO Features / مميزات SEO

- ✅ Arabic meta tags with proper RTL support
- ✅ LocalBusiness structured data (Schema.org)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt configuration
- ✅ Open Graph tags for social media
- ✅ Semantic HTML structure
- ✅ Fast loading times
- ✅ Mobile-optimized

---

## 🎯 Performance / الأداء

- ⚡ Static site generation for fast loading
- 📦 Optimized images and assets
- 🚀 Code splitting and lazy loading
- 💨 Minimal JavaScript bundle
- 🎨 Efficient CSS with TailwindCSS

---

## 📞 Support / الدعم الفني

<div dir="rtl">

إذا واجهت أي مشكلة أو لديك استفسار:

1. راجع قسم الـ Issues في GitHub
2. تواصل مع المطور
3. راجع توثيق Next.js: [nextjs.org/docs](https://nextjs.org/docs)

</div>

---

## 📝 License / الترخيص

This project is licensed under the MIT License.

---

## 🙏 Credits / شكر وتقدير

- **Design Inspiration:** Rekaz.io/goodwill
- **Framework:** Next.js by Vercel
- **UI:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Google Fonts (Cairo, Tajawal)

---

## 📧 Contact / للتواصل

**مؤسسة طريق الخير للتشغيل والصيانة**

- 📱 Phone: +966 XX XXX XXXX
- 📧 Email: info@goodwill.sa
- 🌐 Website: goodwill-foundation.com
- 💬 WhatsApp: [Click Here](https://wa.me/966XXXXXXXXX)

---

<div align="center">
<p dir="rtl">
صُنع بـ ❤️ في المملكة العربية السعودية
</p>
<p>
Made with ❤️ in Saudi Arabia
</p>
</div>
