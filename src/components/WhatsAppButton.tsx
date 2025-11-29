'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/966557221833"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-4 md:left-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center group"
          style={{ width: '60px', height: '60px' }}
        >
          <FaWhatsapp size={30} />
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: 'auto', opacity: 1 }}
            className="absolute right-full mr-3 bg-green-500 px-4 py-2 rounded-lg whitespace-nowrap overflow-hidden"
          >
            {t.nav.contact_us_text}
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppButton
