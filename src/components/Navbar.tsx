'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaStore } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
    { href: '/store', label: t.nav.store, icon: <FaStore /> },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <img
              src="/imgs/logo.jpg"
              alt={t.footer.company_name}
              className="h-12 md:h-16 w-auto rounded-lg"
            />
            <div className={`hidden md:block ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}>
              <h1 className="text-xl font-bold">{t.hero.title}</h1>
              <p className="text-sm">{t.hero.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-lg transition-colors hover:text-primary-500 flex items-center gap-2 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-100' : 'text-white'
                }`}
              >
                {link.icon && <span className="text-base">{link.icon}</span>}
                {link.label}
              </Link>
            ))}
            
            {/* Contact Buttons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <ThemeToggle />
              <LanguageSwitcher />
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                <FaWhatsapp className="text-xl" />
                <span className="hidden xl:inline">{t.nav.whatsapp}</span>
              </a>
              <a
                href="tel:+966XXXXXXXXX"
                className="flex items-center space-x-2 space-x-reverse bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                <FaPhone className="text-lg" />
                <span className="hidden xl:inline">{t.nav.call_us}</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700 dark:text-gray-100' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="flex flex-col space-y-2 p-6"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-100 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 font-semibold text-lg transition-all px-4 py-3 rounded-lg flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon && <span className="text-xl">{link.icon}</span>}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center space-x-3 space-x-reverse">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  <a
                    href="https://wa.me/966XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>{t.nav.whatsapp}</span>
                  </a>
                  <a
                    href="tel:+966XXXXXXXXX"
                    className="flex items-center justify-center space-x-2 space-x-reverse bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <FaPhone className="text-lg" />
                    <span>{t.nav.call_us}</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
