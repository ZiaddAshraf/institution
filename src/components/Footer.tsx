'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useI18n } from '@/contexts/I18nContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useI18n()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Company Info & Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/imgs/logo.jpg"
                alt={t.footer.company_name}
                className="h-14 w-auto rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold">{t.footer.company_name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.footer.company_description}
            </p>

            {/* Quick Links */}
            <div className="pt-4">
              <h4 className="text-lg font-bold mb-4 relative inline-block">
                {t.footer.quick_links}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">←</span> {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">←</span> {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">←</span> {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">←</span> {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              {t.footer.our_services}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                {t.services.operation.title}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                {t.services.maintenance.title}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                {t.services.cleaning.title}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                {t.services.facility_management}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                {t.services.preventive_maintenance}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                {t.services.specialized_cleaning}
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4">{t.footer.follow_us}</h5>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-all hover:scale-110 shadow-md"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-all hover:scale-110 shadow-md"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/goodwill.laundries3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-all hover:scale-110 shadow-md"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/966557221833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-500 p-3 rounded-lg transition-all hover:scale-110 shadow-md"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              {t.footer.contact_us}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary-400 mt-1.5 flex-shrink-0" size={20} />
                <span>{t.footer.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary-400 flex-shrink-0" size={18} />
                <p className="text-gray-300 hover:text-primary-400 transition-colors">
                  966557221833
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" size={18} />
                <a href="mailto:Goodwill.laundries@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors break-all">
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary-400 flex-shrink-0" size={20} />
                <a href="https://wa.me/966557221833" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  {t.nav.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} {t.footer.company_name}. {t.footer.copyright}
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-gray-400 justify-center">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                {t.footer.privacy_policy}
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                {t.footer.terms}
              </Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                خريطة الموقع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
