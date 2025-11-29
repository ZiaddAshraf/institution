 'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '@/contexts/I18nContext'
import { FaEye, FaBullseye, FaAward, FaUsers, FaCheckCircle } from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

export default function About() {
  const { t } = useI18n()
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const values = [
    {
      icon: <FaAward size={40} />,
      title: t.about.values.quality_title,
      description: t.about.values.quality_desc
    },
    {
      icon: <FaUsers size={40} />,
      title: t.about.values.professionalism_title,
      description: t.about.values.professionalism_desc
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: t.about.values.commitment_title,
      description: t.about.values.commitment_desc
    },
    {
      icon: <FaBullseye size={40} />,
      title: t.about.values.satisfaction_title,
      description: t.about.values.satisfaction_desc
    }
  ]

  const achievements = [
    t.about.achievements.clients,
    t.about.achievements.projects,
    t.about.achievements.experience,
    t.about.achievements.team,
    t.about.achievements.certificates,
    t.about.achievements.coverage
  ]

  

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/imgs/hero3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 text-center">
            {t.about.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            {t.about.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t.about.company_title}
              </h2>
              <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-6 leading-relaxed">
                {t.about.partner_title}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-[1.8] mb-4">
                {t.about.description_p1}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-[1.8] mb-4">
                {t.about.description_p2}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-[1.8] mb-6">
                {t.about.description_p3}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <FaCheckCircle className="text-primary-500 flex-shrink-0" size={22} />
                  <span className="text-lg text-gray-800 dark:text-gray-200">{t.about.feature_experience}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <FaCheckCircle className="text-primary-500 flex-shrink-0" size={22} />
                  <span className="text-lg text-gray-800 dark:text-gray-200">{t.about.feature_professional_team}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <FaCheckCircle className="text-primary-500 flex-shrink-0" size={22} />
                  <span className="text-lg text-gray-800 dark:text-gray-200">{t.about.feature_high_quality}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <FaCheckCircle className="text-primary-500 flex-shrink-0" size={22} />
                  <span className="text-lg text-gray-800 dark:text-gray-200">{t.about.feature_commitment}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage('/imgs/essintial.jpg')}
            >
              <div className="card p-4 bg-gray-50 dark:bg-gray-700/50">
                <div className="relative w-full h-[550px]">
                  <Image
                    src="/imgs/essintial.jpg"
                    alt="About Us"
                    fill
                    className="rounded-xl shadow-lg object-cover hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
              {t.about.achievements_title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={26} />
                  <span className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="card p-10 h-full flex flex-col">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                <FaEye size={38} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">{t.about.vision_title}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-[1.8] flex-grow">
                {t.about.vision_text}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card p-10 h-full flex flex-col">
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                <FaBullseye size={38} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">{t.about.mission_title}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-[1.8] flex-grow">
                {t.about.mission_text}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white dark:bg-gray-800">
        <motion.div
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">{t.about.values_title}</h2>
            <p className="section-subtitle">
              {t.about.values_subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-500 mb-5 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-[1.7] flex-grow">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t.about.why_choose_title}</h2>
            <p className="section-subtitle">
              {t.about.why_choose_subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="card p-6 flex items-start space-x-4 space-x-reverse">
              <div className="bg-primary-100 dark:bg-primary-900/30 rounded-xl p-3 flex-shrink-0">
                <FaAward className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.about.advantage_quality}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.about.advantage_quality_desc}</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4 space-x-reverse">
              <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-xl p-3 flex-shrink-0">
                <FaUsers className="text-secondary-600 dark:text-secondary-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.about.advantage_team}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.about.advantage_team_desc}</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4 space-x-reverse">
              <div className="bg-primary-100 dark:bg-primary-900/30 rounded-xl p-3 flex-shrink-0">
                <FaBullseye className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.about.advantage_pricing}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.about.advantage_pricing_desc}</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4 space-x-reverse">
              <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-xl p-3 flex-shrink-0">
                <FaCheckCircle className="text-secondary-600 dark:text-secondary-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.about.advantage_punctuality}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.about.advantage_punctuality_desc}</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4 space-x-reverse">
              <div className="bg-primary-100 dark:bg-primary-900/30 rounded-xl p-3 flex-shrink-0">
                <FaEye className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.about.advantage_response}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.about.advantage_response_desc}</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4 space-x-reverse">
              <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-xl p-3 flex-shrink-0">
                <FaAward className="text-secondary-600 dark:text-secondary-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.about.advantage_comprehensive}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t.about.advantage_comprehensive_desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t.about.cta_title}
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              {t.about.cta_description}
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl inline-block">
              {t.about.contact_us_btn}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
