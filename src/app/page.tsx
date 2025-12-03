'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/contexts/I18nContext'
import { FaCog, FaBroom, FaTools, FaCheckCircle, FaHeadset, FaCertificate, FaAward } from 'react-icons/fa'
import StatsCounter from '@/components/StatsCounter'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function Home() {
  const { t } = useI18n()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <FaBroom size={32} />,
      title: t.services.cleaning.title,
      description: t.home.cleaning_description,
      image: '/imgs/Service3.jpg'
    },
    {
      icon: <FaTools size={32} />,
      title: t.services.maintenance.title,
      description: t.home.maintenance_description,
      image: '/imgs/Service2.jpg'
    },
    {
      icon: <FaCog size={32} />,
      title: t.services.operation.title,
      description: t.home.operation_description,
      image: '/imgs/Service4.png'
    }
  ]

  const stats = [
    { number: '0+', label: t.stats.satisfied_clients, icon: <FaCheckCircle size={32} /> },
    { number: '1000+', label: t.stats.completed_projects, icon: <FaCog size={32} /> },
    { number: '15+', label: t.stats.years_experience, icon: <FaAward size={32} /> }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/hero1.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Floating shapes background */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[10%] w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              x: [0, -20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-[15%] w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          ref={heroRef}
          initial="visible"
          animate="visible"
          variants={staggerContainer}
          className="container-custom relative z-10 text-white text-center py-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight relative"
          >
            <span className="relative inline-block">
              {t.hero.title}
              <span className="absolute -inset-2 bg-primary-500/20 blur-2xl rounded-full -z-10"></span>
            </span>
            <span className="block text-primary-400 mt-5 relative">
              {t.hero.subtitle}
              <span className="absolute -inset-2 bg-primary-400/20 blur-3xl rounded-full -z-10"></span>
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed opacity-95"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services" className="btn-primary inline-block shadow-2xl shadow-primary-500/30">
                {t.hero.explore_services}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn-outline inline-block backdrop-blur-sm bg-white/10">
                {t.hero.contact_us}
              </Link>
            </motion.div>
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
      <section ref={aboutRef} className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-[5%] w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[10%] w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="visible"
          animate="visible"
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">{t.home.about_section_title}</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t.home.about_section_subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage('/imgs/essintial.jpg')}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl shadow-2xl w-full overflow-hidden flex justify-center items-center bg-white dark:bg-gray-900 p-4 md:p-0">
                  <Image
                    src="/imgs/essintial.jpg"
                    alt="About Us"
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain md:object-cover rounded-xl md:rounded-none md:h-[550px] lg:md:h-[650px]"
                  />
                </div>
              </div>
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

              {/* Key Strengths Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <FaCertificate className="text-primary-500 mx-auto mb-2" size={28} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.home.quality_team}</p>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <FaHeadset className="text-primary-500 mx-auto mb-2" size={28} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.home.quick_response}</p>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <FaAward className="text-primary-500 mx-auto mb-2" size={28} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.home.high_quality}</p>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <FaTools className="text-primary-500 mx-auto mb-2" size={28} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.home.professional_equipment}</p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="btn-primary inline-block mt-8 shadow-xl shadow-primary-500/30">
                  {t.common.learn_more}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-white dark:bg-gray-800">
        <motion.div
          initial="visible"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto max-w-7xl px-4"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.services.title}
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-gray-700 rounded-xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-600 flex flex-col"
              >
                <div 
                  className="relative w-full h-auto md:h-80 lg:h-96 overflow-hidden bg-white dark:bg-gray-800 cursor-pointer flex justify-center items-center p-4 md:p-0"
                  onClick={() => setSelectedImage(service.image)}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain md:object-cover rounded-xl md:rounded-none group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 md:p-10 flex flex-col gap-3 md:gap-0">
                  <div className="text-primary-500 mb-3 md:mb-6 flex justify-start">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-5">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-7">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-bold text-base md:text-lg transition-colors group-hover:gap-4"
                  >
                    {t.common.learn_more}
                    <span className="transform group-hover:translate-x-2 transition-transform">←</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/services" 
                className="inline-flex items-center gap-3 bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.home.view_all_services}
                <span>←</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial="visible"
          animate="visible"
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              // For the first stat (satisfied clients), use StatsCounter
              const isFirstStat = index === 0
              
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-center relative"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex justify-center mb-4 opacity-90">
                      {stat.icon}
                    </div>
                    {isFirstStat ? (
                      <StatsCounter duration={2000} />
                    ) : (
                      <div className="text-5xl md:text-6xl font-bold mb-3">
                        {stat.number}
                      </div>
                    )}
                    <div className="text-lg md:text-xl opacity-90 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 relative inline-block text-gray-900 dark:text-white"
              whileInView={{ scale: [0.9, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t.home.ready_to_start}
              <span className="absolute -inset-4 bg-primary-500/10 blur-2xl rounded-full -z-10"></span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.home.get_consultation}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-primary-600 text-white hover:bg-primary-700 font-bold py-5 px-12 rounded-xl transition-all shadow-2xl inline-block text-lg">
                  {t.home.contact_now}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </>
  )
}
