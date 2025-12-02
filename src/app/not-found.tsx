'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-[10%] w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, -30, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-[15%] w-[500px] h-[500px] bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 dark:bg-primary-400/3 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* 404 Number with animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="relative inline-block mb-8"
          >
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 166, 166, 0.3)",
                  "0 0 40px rgba(0, 166, 166, 0.5)",
                  "0 0 20px rgba(0, 166, 166, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 leading-none"
            >
              {t.notFound.title}
            </motion.h1>
            

          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            {t.notFound.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t.notFound.description}
          </motion.p>

          {/* Back to home button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05, 
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-xl"
            >
              <motion.span
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ←
              </motion.span>
              {t.notFound.back_home}
            </Link>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] w-16 h-16 bg-primary-500/10 dark:bg-primary-500/5 rounded-xl rotate-12 hidden lg:block"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[10%] w-20 h-20 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-xl -rotate-12 hidden lg:block"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[20%] w-12 h-12 border-4 border-primary-500/20 dark:border-primary-400/10 rounded-full hidden md:block"
          />
        </motion.div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 166, 166, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 166, 166, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}
