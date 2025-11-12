import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'مؤسسة طريق الخير للتشغيل والصيانة | Goodwill Foundation',
  description: 'مؤسسة سعودية متخصصة في خدمات التشغيل والصيانة والنظافة - نقدم حلول شاملة للمنشآت التجارية والسكنية',
  keywords: ['تشغيل', 'صيانة', 'نظافة', 'خدمات', 'السعودية', 'maintenance', 'operation', 'cleaning'],
  authors: [{ name: 'Goodwill Foundation' }],
  creator: 'Goodwill Foundation',
  publisher: 'Goodwill Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://goodwill-foundation.com',
    title: 'مؤسسة طريق الخير للتشغيل والصيانة',
    description: 'مؤسسة سعودية متخصصة في خدمات التشغيل والصيانة والنظافة',
    siteName: 'Goodwill Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مؤسسة طريق الخير للتشغيل والصيانة',
    description: 'مؤسسة سعودية متخصصة في خدمات التشغيل والصيانة والنظافة',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/imgs/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/imgs/logo.jpg" />
        <meta name="theme-color" content="#00a6a6" />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
