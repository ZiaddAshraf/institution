export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'مؤسسة طريق الخير للتشغيل والصيانة والنظافة',
    alternateName: 'طريق الخير للنظافة',
    image: 'https://goodwill-foundation.com/imgs/logo.jpg',
    '@id': 'https://goodwill-foundation.com',
    url: 'https://goodwill-foundation.com',
    telephone: '+966557221833',
    email: 'Goodwill.laundries@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'المنطقة الشرقية',
      addressLocality: 'الدمام'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.4367,
      longitude: 50.1039
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
      'https://www.facebook.com/share/1Dg7WWQbYZ/',
      'https://www.instagram.com/goodwill.laundries3'
    ],
    priceRange: '$$',
    description: 'أفضل شركة تنظيف بالدمام متخصصة في غسيل الكنب والسجاد، تلميع الرخام، تنظيف المنازل والفلل، مكافحة الحشرات، وتعقيم الخزانات',
    areaServed: [
      { '@type': 'City', name: 'الدمام' },
      { '@type': 'City', name: 'الخبر' },
      { '@type': 'City', name: 'القطيف' },
      { '@type': 'City', name: 'سيهات' },
      { '@type': 'City', name: 'الأحساء' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات التنظيف والصيانة',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'خدمات النظافة',
            description: 'تنظيف المنازل والفلل، غسيل الكنب والسجاد، تنظيف بخار، تنظيف خزانات المياه'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'خدمات الصيانة',
            description: 'صيانة كهرباء وسباكة، تكييف، ترميمات، تشطيب منازل'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'خدمات التشغيل',
            description: 'إدارة المنشآت، القوى العاملة، عقود الصيانة'
          }
        }
      ]
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'طريق الخير للنظافة والصيانة',
    url: 'https://goodwill-foundation.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://goodwill-foundation.com/services?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: 'https://goodwill-foundation.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'الخدمات',
        item: 'https://goodwill-foundation.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'من نحن',
        item: 'https://goodwill-foundation.com/about'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'اتصل بنا',
        item: 'https://goodwill-foundation.com/contact'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
