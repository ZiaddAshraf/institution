'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { FaCog, FaBroom, FaTools, FaCheckCircle, FaStar, FaQuoteLeft } from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <FaCog size={40} />,
      title: 'خدمات التشغيل',
      description: 'نوفر خدمات التشغيل المتكاملة للمنشآت بكفاءة عالية واحترافية',
      image: '/imgs/Service1.jpg'
    },
    {
      icon: <FaTools size={40} />,
      title: 'الصيانة الشاملة',
      description: 'صيانة دورية ووقائية لجميع الأنظمة والمعدات بأعلى المعايير',
      image: '/imgs/Service2.jpg'
    },
    {
      icon: <FaBroom size={40} />,
      title: 'خدمات النظافة',
      description: 'حلول نظافة شاملة للمنشآت التجارية والسكنية بفريق متخصص',
      image: '/imgs/Service3.jpg'
    }
  ]

  const stats = [
    { number: '500+', label: 'عميل راضٍ' },
    { number: '1000+', label: 'مشروع منجز' },
    { number: '15+', label: 'سنة خبرة' },
    { number: '100+', label: 'فريق محترف' }
  ]

  const testimonials = [
    {
      name: 'محمد العتيبي',
      position: 'مدير منشأة تجارية',
      text: 'خدمة ممتازة واحترافية عالية، فريق العمل متعاون ومتفاني في تقديم أفضل الخدمات',
      rating: 5
    },
    {
      name: 'أحمد السعيد',
      position: 'مالك عقارات',
      text: 'نتعامل معهم منذ سنوات، الجودة والالتزام بالمواعيد من أهم ما يميزهم',
      rating: 5
    },
    {
      name: 'فهد الدوسري',
      position: 'مدير مجمع سكني',
      text: 'أسعار تنافسية وخدمة متميزة، ننصح بهم بشدة',
      rating: 5
    }
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/hero1.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10 text-white text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            مؤسسة طريق الخير
            <span className="block text-primary-400 mt-2">للتشغيل والصيانة</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            نقدم حلولاً متكاملة في التشغيل والصيانة والنظافة بأعلى معايير الجودة والاحترافية
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services" className="btn-primary">
              استكشف خدماتنا
            </Link>
            <Link href="/contact" className="btn-outline">
              اتصل بنا
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">من نحن</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              مؤسسة سعودية رائدة في مجال التشغيل والصيانة والنظافة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <img
                src="/imgs/hero2.jpg"
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                شريكك الموثوق في الخدمات المتكاملة
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                نحن في مؤسسة طريق الخير نفخر بتقديم خدمات متميزة في مجالات التشغيل والصيانة والنظافة.
                مع خبرة تمتد لأكثر من 15 عاماً، أصبحنا الخيار الأول للعديد من المنشآت التجارية والسكنية
                في المملكة العربية السعودية.
              </p>

              <div className="space-y-4">
                {[
                  'فريق عمل مؤهل ومدرب على أعلى مستوى',
                  'استخدام أحدث التقنيات والمعدات',
                  'التزام تام بمعايير الجودة والسلامة',
                  'خدمة عملاء متميزة على مدار الساعة'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary inline-block mt-8">
                اعرف المزيد عنا
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">خدماتنا</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية احتياجاتكم
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 group"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-primary-500 mb-4 flex justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              عرض جميع الخدمات
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <motion.div
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">آراء عملائنا</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              ثقة عملائنا هي أكبر دليل على جودة خدماتنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8"
              >
                <FaQuoteLeft className="text-primary-500 text-3xl mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل أنت جاهز للبدء معنا؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية لخدماتنا المتميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                اتصل بنا الآن
              </Link>
              <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
