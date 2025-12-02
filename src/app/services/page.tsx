'use client';

import { useI18n } from '@/contexts/I18nContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const { t, locale } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredServices = [
    {
      id: 1,
      title: 'التنظيف بعد التشطيب',
      titleEn: 'Post-Construction Cleaning',
      description: 'خدمة تنظيف احترافية بعد التشطيب تشمل إزالة الغبار، غسيل النوافذ، تلميع الأرضيات، وتعقيم دورات المياه مع ضمان أعلى جودة.',
      descriptionEn: 'Professional post-construction cleaning service including dust removal, window washing, floor polishing, and bathroom sanitization with guaranteed quality.',
      image: '/imgs/تنظيف الشقق والبيوت.jpeg',
      icon: '🏗️'
    },
    {
      id: 2,
      title: 'تنظيف الكنب والسجاد داخل البيت',
      titleEn: 'Sofa & Carpet Cleaning at Home',
      description: 'تنظيف شامل للكنب والسجاد باستخدام البخار ومواد آمنة، إزالة البقع والروائح، واستعادة نظافة وأناقة المفروشات بدون نقلها.',
      descriptionEn: 'Complete sofa and carpet cleaning using steam and safe materials, stain and odor removal, restoring cleanliness and elegance without moving furniture.',
      image: '/imgs/تنظيف الكنب والسجاد داخل البيت.jpeg',
      icon: '🛋️'
    },
    {
      id: 3,
      title: 'تنظيف سجاد المساجد',
      titleEn: 'Mosque Carpet Cleaning',
      description: 'تنظيف متخصص لسجاد المساجد مع المحافظة على الألوان والألياف، باستخدام معدات احترافية ومواد آمنة.',
      descriptionEn: 'Specialized mosque carpet cleaning while preserving colors and fibers, using professional equipment and safe materials.',
      image: '/imgs/تنظيف سجاد المساجد.jpeg',
      icon: '🕌'
    },
    {
      id: 4,
      title: 'خدمة التنظيف الشاملة بعد التشطيب',
      titleEn: 'Comprehensive Post-Construction Cleaning',
      description: 'تنظيف عميق كامل للوحدة بعد التشطيب بما يشمل تلميع الرخام والسيراميك، إزالة بقايا الدهانات، ومسح الغبار من كل الأسطح.',
      descriptionEn: 'Complete deep cleaning after construction including marble and ceramic polishing, paint residue removal, and dust wiping from all surfaces.',
      image: '/imgs/خدمة التنظيف الشاملة بعد التشطيب.jpeg',
      icon: '✨'
    }
  ];

  const serviceCategories = [
    {
      category: 'خدمات النظافة',
      categoryEn: 'Cleaning Services',
      icon: '🧹',
      services: [
        { icon: '🏢', name: 'تنظيف المباني', nameEn: 'Building Cleaning', description: 'خدمة تنظيف احترافية للمباني بمعدات متطورة ومعايير عالية', descriptionEn: 'Professional building cleaning with advanced equipment and high standards' },
        { icon: '🪟', name: 'تنظيف زجاج وواجهات المباني', nameEn: 'Glass & Facade Cleaning', description: 'تنظيف الواجهات الزجاجية وواجهات المباني بأمان واحترافية', descriptionEn: 'Safe and professional cleaning of glass facades and building exteriors' },
        { icon: '🏊', name: 'تنظيف برك السباحة', nameEn: 'Swimming Pool Cleaning', description: 'صيانة وتنظيف شامل لبرك السباحة مع معالجة المياه', descriptionEn: 'Complete pool maintenance and cleaning with water treatment' },
        { icon: '💧', name: 'تنظيف خزانات المياه', nameEn: 'Water Tank Cleaning', description: 'تنظيف وتعقيم خزانات المياه وفق المعايير الصحية', descriptionEn: 'Tank cleaning and sanitization according to health standards' },
        { icon: '📅', name: 'تنظيف يومي', nameEn: 'Daily Cleaning', description: 'خدمات تنظيف يومية للمكاتب والمنشآت التجارية', descriptionEn: 'Daily cleaning services for offices and commercial facilities' },
        { icon: '🪟', name: 'تنظيف نوافذ', nameEn: 'Window Cleaning', description: 'تنظيف احترافي للنوافذ الداخلية والخارجية', descriptionEn: 'Professional cleaning of interior and exterior windows' },
        { icon: '🧶', name: 'تنظيف سجاد', nameEn: 'Carpet Cleaning', description: 'تنظيف عميق للسجاد باستخدام البخار ومواد آمنة', descriptionEn: 'Deep carpet cleaning using steam and safe materials' },
        { icon: '🛋️', name: 'تنظيف كنب', nameEn: 'Sofa Cleaning', description: 'تنظيف وتعقيم الكنب والمفروشات في مكانها', descriptionEn: 'Sofa and upholstery cleaning and sanitization on-site' },
        { icon: '🪟', name: 'تنظيف الستائر', nameEn: 'Curtain Cleaning', description: 'تنظيف الستائر والبرادي بعناية وحرفية', descriptionEn: 'Careful and professional curtain and drape cleaning' },
        { icon: '🪑', name: 'تنظيف الأثاث', nameEn: 'Furniture Cleaning', description: 'تنظيف شامل للأثاث بمختلف أنواعه ومواده', descriptionEn: 'Complete furniture cleaning for all types and materials' },
        { icon: '🔄', name: 'تنظيف دوري', nameEn: 'Periodic Cleaning', description: 'عقود تنظيف دورية للشركات والمؤسسات', descriptionEn: 'Periodic cleaning contracts for companies and institutions' },
        { icon: '🦠', name: 'التعقيم', nameEn: 'Sanitization', description: 'تعقيم شامل للمنشآت ضد البكتيريا والفيروسات', descriptionEn: 'Complete facility sanitization against bacteria and viruses' },
        { icon: '🐛', name: 'مكافحة الحشرات', nameEn: 'Pest Control', description: 'مكافحة فعالة وآمنة لجميع أنواع الحشرات والقوارض', descriptionEn: 'Effective and safe control of all types of pests and rodents' }
      ]
    },
    {
      category: 'خدمات الصيانة والمقاولات',
      categoryEn: 'Maintenance & Contracting Services',
      icon: '🔧',
      services: [
        { icon: '⚡', name: 'الكهرباء', nameEn: 'Electrical Work', description: 'أعمال الكهرباء والتمديدات الكهربائية بكفاءة عالية', descriptionEn: 'Electrical work and installations with high efficiency' },
        { icon: '🚰', name: 'السباكة', nameEn: 'Plumbing', description: 'خدمات السباكة والتمديدات الصحية الاحترافية', descriptionEn: 'Professional plumbing and sanitary installation services' },
        { icon: '🎨', name: 'الصبغ والدهانات', nameEn: 'Painting', description: 'أعمال الدهانات الداخلية والخارجية بجودة ممتازة', descriptionEn: 'Interior and exterior painting with excellent quality' },
        { icon: '❄️', name: 'التكييف', nameEn: 'Air Conditioning', description: 'تركيب وصيانة أنظمة التكييف المركزي والمنفصل', descriptionEn: 'Installation and maintenance of central and split AC systems' },
        { icon: '🏗️', name: 'البناء', nameEn: 'Construction', description: 'أعمال البناء والإنشاءات بمعايير هندسية دقيقة', descriptionEn: 'Construction and building work with precise engineering standards' },
        { icon: '🧱', name: 'الجبس بورد', nameEn: 'Gypsum Board', description: 'تركيب وتشطيب الجبس بورد للأسقف والجدران', descriptionEn: 'Gypsum board installation and finishing for ceilings and walls' },
        { icon: '🔲', name: 'السيراميك', nameEn: 'Ceramic Tiling', description: 'تركيب السيراميك والبورسلان بدقة واحترافية', descriptionEn: 'Ceramic and porcelain tiling with precision and professionalism' },
        { icon: '🔨', name: 'الترميمات', nameEn: 'Renovations', description: 'ترميم وتجديد المباني القديمة والمتضررة', descriptionEn: 'Renovation and restoration of old and damaged buildings' },
        { icon: '🛣️', name: 'الأسفلت', nameEn: 'Asphalt', description: 'أعمال الأسفلت والرصف للطرق والمواقف', descriptionEn: 'Asphalt and paving work for roads and parking lots' },
        { icon: '🏠', name: 'عزل الأسطح', nameEn: 'Roof Insulation', description: 'عزل حراري ومائي للأسطح بمواد عالية الجودة', descriptionEn: 'Thermal and water insulation for roofs with high-quality materials' },
        { icon: '🏡', name: 'بناء الملاحق', nameEn: 'Annex Construction', description: 'بناء وتشطيب الملاحق والغرف الإضافية', descriptionEn: 'Construction and finishing of annexes and additional rooms' },
        { icon: '✨', name: 'تشطيب المباني والمحلات', nameEn: 'Building & Shop Finishing', description: 'تشطيب كامل للمباني والمحلات التجارية', descriptionEn: 'Complete finishing for buildings and commercial shops' }
      ]
    },
    {
      category: 'خدمات أخرى',
      categoryEn: 'Other Services',
      icon: '⚙️',
      services: [
        { icon: '📹', name: 'تركيب وصيانة كاميرات المراقبة', nameEn: 'Security Camera Installation & Maintenance', description: 'تركيب وصيانة أنظمة المراقبة الأمنية المتطورة', descriptionEn: 'Installation and maintenance of advanced security surveillance systems' },
        { icon: '🔌', name: 'تأسيس وصيانة الكهرباء والسباكة', nameEn: 'Electrical & Plumbing Setup & Maintenance', description: 'تأسيس كامل لأنظمة الكهرباء والسباكة مع الصيانة الدورية', descriptionEn: 'Complete electrical and plumbing setup with periodic maintenance' },
        { icon: '📋', name: 'إدارة عقود الصيانة والمخزون', nameEn: 'Maintenance Contract & Inventory Management', description: 'إدارة احترافية لعقود الصيانة والمخزون', descriptionEn: 'Professional management of maintenance contracts and inventory' },
        { icon: '👷', name: 'إدارة القوى العاملة', nameEn: 'Workforce Management', description: 'إدارة وتنظيم القوى العاملة للمشاريع والمنشآت', descriptionEn: 'Management and organization of workforce for projects and facilities' },
        { icon: '🛡️', name: 'خدمات متخصصة', nameEn: 'Specialized Services', description: 'عزل الأسطح، ترميم المباني، ومكافحة الحشرات المتخصصة', descriptionEn: 'Roof insulation, building renovation, and specialized pest control' }
      ]
    }
  ];

  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-[#00A6A6] via-[#0E87A4] to-[#00A6A6] text-white pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {isRTL ? 'خدماتنا' : 'Our Services'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              {isRTL 
                ? 'نقدم مجموعة شاملة من خدمات التنظيف والصيانة بأعلى معايير الجودة والاحترافية' 
                : 'We provide a comprehensive range of cleaning and maintenance services with the highest standards of quality and professionalism'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services with Images */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {isRTL ? 'خدماتنا الأساسية' : 'Our Core Services'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00A6A6] to-[#0E87A4] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div 
                    className="relative h-[500px] lg:h-[600px] overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-700"
                    onClick={() => setSelectedImage(service.image)}
                  >
                    <Image
                      src={service.image}
                      alt={isRTL ? service.title : service.titleEn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                      <span className="text-5xl mb-2 inline-block">{service.icon}</span>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {isRTL ? service.title : service.titleEn}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-6xl mb-4 inline-block hidden lg:block">{service.icon}</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 hidden lg:block">
                      {isRTL ? service.title : service.titleEn}
                    </h3>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:hidden">
                      {isRTL ? service.title : service.titleEn}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg lg:text-xl">
                      {isRTL ? service.description : service.descriptionEn}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A6A6] to-[#0E87A4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-fit"
                    >
                      {isRTL ? 'اطلب الخدمة' : 'Request Service'}
                      <span className={`transform ${isRTL ? 'rotate-180' : ''}`}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Service Cards */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {isRTL ? category.category : category.categoryEn}
                  </h2>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="group bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-200 dark:border-gray-600"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {isRTL ? service.name : service.nameEn}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {isRTL ? service.description : service.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#00A6A6] via-[#0E87A4] to-[#00A6A6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
            {isRTL 
              ? 'احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك' 
              : 'Get a free consultation and customized quote for your needs'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-[#00A6A6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-110 hover:shadow-3xl transform"
            >
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </Link>
            <a
              href="https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl hover:scale-110 hover:shadow-3xl transform flex items-center gap-3"
            >
              <span className="text-2xl">📱</span>
              {isRTL ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Service Image"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
