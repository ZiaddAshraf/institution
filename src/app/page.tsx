'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
import { FaCog, FaBroom, FaTools, FaCheckCircle, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

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

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, inView: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuad = (t: number) => t * (2 - t)
      const currentCount = Math.floor(easeOutQuad(progress) * (end - startValue) + startValue)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, inView])

  return count
}

export default function Home() {
  const { t } = useI18n()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Testimonial carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)

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

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

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
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10 text-white text-center py-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative"
          >
            <span className="relative inline-block">
              {t.hero.title}
              <span className="absolute -inset-2 bg-primary-500/20 blur-2xl rounded-full -z-10"></span>
            </span>
            <span className="block text-primary-400 mt-3 relative">
              {t.hero.subtitle}
              <span className="absolute -inset-2 bg-primary-400/20 blur-3xl rounded-full -z-10"></span>
            </span>
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
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
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
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src="/imgs/hero2.jpg"
                  alt="About Us"
                  className="relative rounded-2xl shadow-2xl w-full h-[450px] lg:h-[500px] object-cover"
                />
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
      <section ref={servicesRef} className="py-32 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-[8%] w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[12%] w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10"
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
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 group border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="text-primary-500 mb-5 flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-14">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="btn-primary inline-block shadow-xl shadow-primary-500/30">
                عرض جميع الخدمات
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white relative overflow-hidden">
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
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const numericValue = parseInt(stat.number.replace(/\D/g, ''))
              const suffix = stat.number.replace(/[0-9]/g, '')
              const animatedCount = useCounter(numericValue, 2000, statsInView)
              
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-center relative"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-5xl md:text-6xl font-bold mb-3">
                      {animatedCount}{suffix}
                    </div>
                    <div className="text-lg md:text-xl opacity-90 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-[10%] w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-[15%] w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">آراء عملائنا</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              ثقة عملائنا هي أكبر دليل على جودة خدماتنا
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[350px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute w-full"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 md:p-12 mx-4 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <FaQuoteLeft className="text-primary-500 text-5xl mb-6" />
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" size={20} />
                        ))}
                      </div>

                      <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed text-xl">
                        "{testimonials[currentTestimonial].text}"
                      </p>

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h4 className="font-bold text-gray-900 dark:text-white text-2xl">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-base mt-2">
                          {testimonials[currentTestimonial].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-800 hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-800 dark:text-gray-200 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 z-10"
              aria-label="Previous testimonial"
            >
              <FaChevronRight size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-800 hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-800 dark:text-gray-200 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 z-10"
              aria-label="Next testimonial"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentTestimonial ? 1 : -1)
                    setCurrentTestimonial(index)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'w-10 bg-primary-500'
                      : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block"
              whileInView={{ scale: [0.9, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              هل أنت جاهز للبدء معنا؟
              <span className="absolute -inset-4 bg-white/10 blur-2xl rounded-full -z-10"></span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              تواصل معنا اليوم واحصل على استشارة مجانية لخدماتنا المتميزة
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all shadow-2xl inline-block">
                  اتصل بنا الآن
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-2xl inline-block">
                  تواصل عبر واتساب
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
