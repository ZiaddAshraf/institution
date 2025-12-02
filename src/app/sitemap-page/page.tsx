'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
import { FaHome, FaInfoCircle, FaCog, FaEnvelope, FaBroom, FaTools, FaShieldAlt, FaFileContract, FaMap } from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Sitemap() {
  const { t } = useI18n()

  const sections = [
    {
      title: t.sitemap.main_pages,
      icon: <FaMap size={24} />,
      links: [
        { href: '/', label: t.sitemap.home, icon: <FaHome /> },
        { href: '/about', label: t.sitemap.about, icon: <FaInfoCircle /> },
        { href: '/services', label: t.sitemap.services, icon: <FaCog /> },
        { href: '/contact', label: t.sitemap.contact, icon: <FaEnvelope /> }
      ]
    },
    {
      title: t.sitemap.services_pages,
      icon: <FaCog size={24} />,
      links: [
        { href: '/services#operation', label: t.sitemap.operation, icon: <FaCog /> },
        { href: '/services#maintenance', label: t.sitemap.maintenance, icon: <FaTools /> },
        { href: '/services#cleaning', label: t.sitemap.cleaning, icon: <FaBroom /> }
      ]
    },
    {
      title: t.sitemap.info_pages,
      icon: <FaShieldAlt size={24} />,
      links: [
        { href: '/privacy', label: t.sitemap.privacy, icon: <FaShieldAlt /> },
        { href: '/terms', label: t.sitemap.terms, icon: <FaFileContract /> }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <FaMap className="text-primary-500 text-5xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.sitemap.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.sitemap.subtitle}
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <div className="text-primary-500">
                    {section.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
                    >
                      <div className="text-primary-500 group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">{t.cta.title}</h3>
          <p className="text-lg mb-6 opacity-90">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              {t.cta.contact_now}
            </Link>
            <a
              href="https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg"
            >
              {t.cta.whatsapp_contact}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
