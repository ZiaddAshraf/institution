// ============================================
// Quick Reference: Using i18n in Components
// ============================================

// 1. IMPORT THE HOOK
// ------------------
'use client'  // Must be at the top!

import { useI18n } from '@/contexts/I18nContext'

// 2. USE IN COMPONENT
// -------------------
export default function MyPage() {
  const { t, locale, setLocale, dir } = useI18n()
  
  return (
    <div>
      {/* Access any translation */}
      <h1>{t.nav.home}</h1>
      <p>{t.hero.description}</p>
      
      {/* Check current language */}
      {locale === 'ar' ? 'مرحبا' : 'Hello'}
      
      {/* Change language programmatically */}
      <button onClick={() => setLocale('en')}>
        Switch to English
      </button>
      
      {/* Use direction for conditional styling */}
      <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
        Content
      </div>
    </div>
  )
}

// 3. TRANSLATION KEYS STRUCTURE
// ------------------------------
// Available translation keys (from locales/ar.json and locales/en.json):

t.nav.home               // "الرئيسية" / "Home"
t.nav.services           // "خدماتنا" / "Our Services"
t.nav.about              // "من نحن" / "About Us"
t.nav.contact            // "اتصل بنا" / "Contact Us"
t.nav.store              // "المتجر" / "Store"
t.nav.whatsapp           // "واتساب" / "WhatsApp"
t.nav.call_us            // "اتصل بنا" / "Call Us"

t.hero.title             // "مؤسسة طريق الخير" / "Goodwill Foundation"
t.hero.subtitle          // "للتشغيل والصيانة" / "For Operation and Maintenance"
t.hero.description       // Full hero description
t.hero.explore_services  // "استكشف خدماتنا" / "Explore Our Services"
t.hero.contact_us        // "اتصل بنا" / "Contact Us"

t.about.title            // "من نحن" / "About Us"
t.about.subtitle         // Subtitle text
t.about.partner_title    // "شريكك الموثوق..." / "Your Trusted Partner..."
t.about.description      // Full about description
t.about.feature1         // Feature 1 text
t.about.feature2         // Feature 2 text
t.about.feature3         // Feature 3 text
t.about.feature4         // Feature 4 text
t.about.learn_more       // "اعرف المزيد عنا" / "Learn More About Us"

t.services.title                  // "خدماتنا" / "Our Services"
t.services.subtitle               // Services subtitle
t.services.view_all               // "عرض جميع الخدمات" / "View All Services"
t.services.operation.title        // "خدمات التشغيل" / "Operation Services"
t.services.operation.description  // Operation description
t.services.maintenance.title      // "الصيانة الشاملة" / "Comprehensive Maintenance"
t.services.maintenance.description// Maintenance description
t.services.cleaning.title         // "خدمات النظافة" / "Cleaning Services"
t.services.cleaning.description   // Cleaning description
t.services.facility_management    // "إدارة المرافق" / "Facility Management"
t.services.preventive_maintenance // "الصيانة الوقائية" / "Preventive Maintenance"
t.services.specialized_cleaning   // "التنظيف المتخصص" / "Specialized Cleaning"

t.stats.satisfied_clients    // "عميل راضٍ" / "Satisfied Clients"
t.stats.completed_projects   // "مشروع منجز" / "Completed Projects"
t.stats.years_experience     // "سنة خبرة" / "Years of Experience"
t.stats.professional_team    // "فريق محترف" / "Professional Team"

t.testimonials.title         // "آراء عملائنا" / "Client Testimonials"
t.testimonials.subtitle      // Testimonials subtitle
t.testimonials.client1.name  // Client 1 name
t.testimonials.client1.position  // Client 1 position
t.testimonials.client1.text  // Client 1 testimonial
// ... client2, client3 similar structure

t.cta.title              // CTA section title
t.cta.description        // CTA description
t.cta.contact_now        // "اتصل بنا الآن" / "Contact Us Now"
t.cta.whatsapp_contact   // "تواصل عبر واتساب" / "Contact via WhatsApp"

t.store.title            // "المتجر الإلكتروني" / "Online Store"
t.store.coming_soon      // "قريباً" / "Coming Soon"
t.store.under_development// "صفحة المتجر قيد التطوير" / "Store page is under development"
t.store.description      // Store description
t.store.feature1_title   // "منتجات متنوعة" / "Diverse Products"
t.store.feature1_desc    // Feature 1 description
t.store.feature2_title   // "أدوات احترافية" / "Professional Tools"
t.store.feature2_desc    // Feature 2 description
t.store.feature3_title   // "طلب سريع" / "Quick Order"
t.store.feature3_desc    // Feature 3 description
t.store.back_home        // "العودة للرئيسية" / "Back to Home"
t.store.contact_inquiry  // "اتصل بنا للاستفسار" / "Contact Us for Inquiry"
t.store.launch_soon      // "ترقبوا إطلاق المتجر..." / "Stay tuned for the store launch..."

t.footer.company_name        // "مؤسسة طريق الخير" / "Goodwill Foundation"
t.footer.company_description // Company description
t.footer.quick_links         // "روابط سريعة" / "Quick Links"
t.footer.our_services        // "خدماتنا" / "Our Services"
t.footer.contact_us          // "تواصل معنا" / "Contact Us"
t.footer.location            // "المملكة العربية السعودية" / "Saudi Arabia"
t.footer.email               // "info@goodwill.sa"
t.footer.follow_us           // "تابعنا" / "Follow Us"
t.footer.copyright           // "جميع الحقوق محفوظة." / "All rights reserved."
t.footer.privacy_policy      // "سياسة الخصوصية" / "Privacy Policy"
t.footer.terms               // "الشروط والأحكام" / "Terms & Conditions"

t.common.read_more       // "اقرأ المزيد" / "Read More"
t.common.learn_more      // "اعرف المزيد" / "Learn More"
t.common.view_more       // "عرض المزيد" / "View More"
t.common.close           // "إغلاق" / "Close"
t.common.submit          // "إرسال" / "Submit"
t.common.loading         // "جاري التحميل..." / "Loading..."

// 4. EXAMPLE USAGE PATTERNS
// --------------------------

// Pattern 1: Simple text replacement
<h1>{t.hero.title}</h1>

// Pattern 2: Dynamic list from translations
const services = [
  {
    title: t.services.operation.title,
    description: t.services.operation.description
  },
  {
    title: t.services.maintenance.title,
    description: t.services.maintenance.description
  }
]

// Pattern 3: Conditional based on locale
{locale === 'ar' ? (
  <div className="font-arabic">Arabic specific content</div>
) : (
  <div className="font-english">English specific content</div>
)}

// Pattern 4: Language-aware links
<Link href={locale === 'ar' ? '/ar/services' : '/en/services'}>
  {t.nav.services}
</Link>

// 5. ADDING NEW TRANSLATIONS
// ---------------------------
// Step 1: Edit locales/ar.json
{
  "myNewSection": {
    "title": "عنوان جديد",
    "subtitle": "عنوان فرعي"
  }
}

// Step 2: Edit locales/en.json
{
  "myNewSection": {
    "title": "New Title",
    "subtitle": "Subtitle"
  }
}

// Step 3: Use in component
const { t } = useI18n()
<h1>{t.myNewSection.title}</h1>
<h2>{t.myNewSection.subtitle}</h2>

// 6. LANGUAGE SWITCHER (Already Integrated)
// ------------------------------------------
import LanguageSwitcher from '@/components/LanguageSwitcher'

// Use anywhere in your component:
<LanguageSwitcher />

// 7. IMPORTANT NOTES
// ------------------
// ✅ Always use 'use client' at the top of files using useI18n()
// ✅ Translation keys must exist in BOTH ar.json and en.json
// ✅ Language preference is saved to localStorage automatically
// ✅ RTL/LTR switching is handled automatically
// ✅ Tailwind CSS classes work with both RTL and LTR

// 8. FILE LOCATIONS
// -----------------
// Translation files:  /locales/ar.json, /locales/en.json
// Context Provider:   /src/contexts/I18nContext.tsx
// Language Switcher:  /src/components/LanguageSwitcher.tsx
// Usage examples:     /src/components/Navbar.tsx
//                     /src/components/Footer.tsx
//                     /src/app/store/page.tsx
