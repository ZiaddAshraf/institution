'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStore, FaArrowRight, FaClock, FaTools } from 'react-icons/fa'
import { useI18n } from '@/contexts/I18nContext'

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

export default function StorePage() {
  const { t } = useI18n()
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 dark:from-gray-950 dark:via-gray-900 dark:to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a6a6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container-custom relative z-10 text-center py-20"
        >
          {/* Icon */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 rounded-full shadow-2xl"
              >
                <FaStore className="text-white text-6xl md:text-8xl" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary-400 rounded-full blur-xl -z-10"
              ></motion.div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {t.store.title}
          </motion.h1>

          {/* Coming Soon Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full shadow-lg mb-8"
          >
            <FaClock className="text-2xl animate-pulse" />
            <span className="text-2xl md:text-3xl font-bold">{t.store.coming_soon}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t.store.under_development}
            <br />
            {t.store.description}
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
          >
            {[
              {
                icon: <FaStore />,
                title: t.store.feature1_title,
                description: t.store.feature1_desc
              },
              {
                icon: <FaTools />,
                title: t.store.feature2_title,
                description: t.store.feature2_desc
              },
              {
                icon: <FaClock />,
                title: t.store.feature3_title,
                description: t.store.feature3_desc
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-primary-500 text-4xl mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-3"
            >
              <FaArrowRight className="rotate-180" />
              {t.store.back_home}
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center gap-3"
            >
              {t.store.contact_inquiry}
            </Link>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-12 border-t border-gray-700"
          >
            <p className="text-gray-300 text-lg mb-4">
              {t.store.launch_soon}
            </p>
            <div className="flex justify-center items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 bg-primary-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 bg-primary-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-3 h-3 bg-primary-500 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
