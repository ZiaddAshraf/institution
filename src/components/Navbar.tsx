'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaStore } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { t } = useI18n()

  // Check if we're on a page with light background (like 404)
  const hasLightBackground = !pathname || pathname === '/' || false

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    // { href: '/store', label: t.nav.store, icon: <FaStore /> },
  ]

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled || !hasLightBackground
          ? 'bg-white dark:bg-gray-900 shadow-md py-3'
          : 'bg-gradient-to-b from-black/40 to-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 flex-shrink-0 focus:outline-none rounded-lg"
            aria-label="Go to homepage"
          >
            <Image
              src="/imgs/logo.jpg"
              alt={t.footer.company_name}
              width={40}
              height={40}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <div className={`hidden md:block transition-colors ${(isScrolled || !hasLightBackground) ? 'text-gray-800 dark:text-gray-100' : 'text-white'}`}>
              <h1 className="text-lg font-bold leading-tight">{t.hero.title}</h1>
              <p className="text-xs opacity-90">{t.hero.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold px-4 py-2 rounded-lg transition-all hover:bg-primary-500/10 relative group focus:outline-none ${
                    (isScrolled || !hasLightBackground) ? 'text-gray-700 dark:text-gray-200' : 'text-white'
                  }`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-3/4"></span>
                </Link>
              ))}
            </div>
            
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>
            
            {/* Store Link */}
            
            
            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
              
              <a
                href="https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow-md"
              >
                <FaWhatsapp className="text-lg" />
                <span className="hidden xl:inline text-sm font-semibold">{t.nav.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-lg ml-2 transition-colors hover:bg-primary-500/10 ${
              (isScrolled || !hasLightBackground) ? 'text-gray-700 dark:text-gray-200' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 font-semibold px-4 py-3 rounded-lg transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <div className="flex items-center justify-center gap-3 px-4">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  
                  <a
                    href="https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-lg transition-all hover:scale-105 shadow-md"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>{t.nav.whatsapp}</span>
                  </a>
                  
                  
                    
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
