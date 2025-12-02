'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase, FaCookie, FaEnvelope } from 'react-icons/fa'

export default function PrivacyPolicy() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
              <FaShieldAlt className="text-4xl text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.privacy.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t.privacy.last_updated}: {t.privacy.update_date}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaLock className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.intro_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.intro_content}
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.collect_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.collect_content}
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaUserSecret className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.use_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.use_content}
              </p>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaLock className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.security_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.security_content}
              </p>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaCookie className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.cookies_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.cookies_content}
              </p>
            </section>

            {/* Sharing Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.sharing_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.sharing_content}
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.privacy.rights_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.rights_content}
              </p>
            </section>

            {/* Contact */}
            <section className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {t.privacy.contact_title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t.privacy.contact_content}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
