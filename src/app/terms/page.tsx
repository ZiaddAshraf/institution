'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import { FaFileContract, FaCheckCircle, FaExclamationTriangle, FaGavel } from 'react-icons/fa'

export default function TermsConditions() {
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
              <FaFileContract className="text-4xl text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.terms.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t.terms.last_updated}: {t.terms.update_date}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaGavel className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.terms.intro_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.intro_content}
              </p>
            </section>

            {/* Services */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaCheckCircle className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.terms.services_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.services_content}
              </p>
            </section>

            {/* Client Obligations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.terms.obligations_title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.obligations_content}
              </p>
            </section>

            {/* Pricing and Payment */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.terms.pricing_title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.pricing_content}
              </p>
            </section>

            {/* Cancellation & Refund */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.terms.cancellation_title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.cancellation_content}
              </p>
            </section>

            {/* Liability */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.terms.liability_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.liability_content}
              </p>
            </section>

            {/* Warranty */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.terms.warranty_title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.warranty_content}
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.terms.modifications_title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.modifications_content}
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaGavel className="text-2xl text-primary-600 dark:text-primary-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.terms.law_title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.terms.law_content}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
