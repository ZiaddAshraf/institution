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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img
                src="/imgs/logo.jpg"
                alt={t.footer.company_name}
                className="h-16 w-auto rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold">{t.footer.company_name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.footer.company_description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.quick_links}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.our_services}</h4>
            <ul className="space-y-3 text-gray-300">
              <li>• {t.services.operation.title}</li>
              <li>• {t.services.maintenance.title}</li>
              <li>• {t.services.cleaning.title}</li>
              <li>• {t.services.facility_management}</li>
              <li>• {t.services.preventive_maintenance}</li>
              <li>• {t.services.specialized_cleaning}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.contact_us}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 space-x-reverse text-gray-300">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span>{t.footer.location}</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <FaPhone className="text-primary-400" />
                <a href="tel:+966XXXXXXXXX" className="text-gray-300 hover:text-primary-400 transition-colors">
                  +966 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:info@goodwill.sa" className="text-gray-300 hover:text-primary-400 transition-colors">
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <FaWhatsapp className="text-primary-400" />
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  {t.nav.whatsapp}
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-4">{t.footer.follow_us}</h5>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/966XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-500 p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} {t.footer.company_name}. {t.footer.copyright}
            </p>
            <div className="flex space-x-6 space-x-reverse text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                {t.footer.privacy_policy}
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
