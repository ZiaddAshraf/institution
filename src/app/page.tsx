'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
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
  const { t } = useI18n()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <FaCog size={40} />,
      title: t.services.operation.title,
      description: t.services.operation.description,
      image: '/imgs/Service1.jpg'
    },
    {
      icon: <FaTools size={40} />,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      image: '/imgs/Service2.jpg'
    },
    {
      icon: <FaBroom size={40} />,
      title: t.services.cleaning.title,
      description: t.services.cleaning.description,
      image: '/imgs/Service3.jpg'
    }
  ]

  const stats = [
    { number: '500+', label: t.stats.satisfied_clients },
    { number: '1000+', label: t.stats.completed_projects },
    { number: '15+', label: t.stats.years_experience },
    { number: '100+', label: t.stats.professional_team }
  ]

  const testimonials = [
    {
      name: t.testimonials.client1.name,
      position: t.testimonials.client1.position,
      text: t.testimonials.client1.text,
      rating: 5
    },
    {
      name: t.testimonials.client2.name,
      position: t.testimonials.client2.position,
      text: t.testimonials.client2.text,
      rating: 5
    },
    {
      name: t.testimonials.client3.name,
      position: t.testimonials.client3.position,
      text: t.testimonials.client3.text,
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/imgs/hero1.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10 text-white text-center py-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {t.hero.title}
            <span className="block text-primary-400 mt-3">{t.hero.subtitle}</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services" className="btn-primary">
              {t.hero.explore_services}
            </Link>
            <Link href="/contact" className="btn-outline">
              {t.hero.contact_us}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">{t.home.about_section_title}</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t.home.about_section_subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <img
                src="/imgs/hero2.jpg"
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full h-[450px] lg:h-[500px] object-cover"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t.home.trusted_partner}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                {t.home.about_description}
              </p>

              <div className="space-y-4 pt-4">
                {[
                  t.home.features.feature1,
                  t.home.features.feature2,
                  t.home.features.feature3,
                  t.home.features.feature4
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={22} />
                    <span className="text-gray-800 dark:text-gray-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about" className="btn-primary inline-block mt-8">
                {t.common.learn_more}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-white dark:bg-gray-800">
        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="card p-6 group"
              >
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-primary-500 mb-5 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-14">
            <Link href="/services" className="btn-primary">
              عرض جميع الخدمات
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <motion.div
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50 dark:bg-gray-900">
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
                whileHover={{ y: -8 }}
                className="card p-8"
              >
                <FaQuoteLeft className="text-primary-500 text-4xl mb-5" />
                
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-5">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل أنت جاهز للبدء معنا؟
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
              تواصل معنا اليوم واحصل على استشارة مجانية لخدماتنا المتميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg">
                اتصل بنا الآن
              </Link>
              <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg">
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
