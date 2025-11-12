export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'مؤسسة طريق الخير للتشغيل والصيانة',
    image: 'https://goodwill-foundation.com/imgs/logo.jpg',
    '@id': 'https://goodwill-foundation.com',
    url: 'https://goodwill-foundation.com',
    telephone: '+966XXXXXXXXX',
    email: 'info@goodwill.sa',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressLocality: 'المملكة العربية السعودية'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://facebook.com/goodwill',
      'https://instagram.com/goodwill',
      'https://twitter.com/goodwill'
    ],
    priceRange: '$$',
    description: 'مؤسسة سعودية متخصصة في خدمات التشغيل والصيانة والنظافة - نقدم حلول شاملة للمنشآت التجارية والسكنية',
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia'
    },
    serviceType: ['التشغيل', 'الصيانة', 'النظافة', 'Maintenance', 'Operation', 'Cleaning']
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
