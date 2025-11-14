'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import { FaGlobe } from 'react-icons/fa'

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-all transform hover:scale-105 shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <FaGlobe className="text-lg" />
      <span className="text-sm font-bold">
        {locale === 'ar' ? 'EN' : 'AR'}
      </span>
    </motion.button>
  )
}

export default LanguageSwitcher
