'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'اتصل بنا' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <img
              src="/imgs/logo.jpg"
              alt="مؤسسة طريق الخير"
              className="h-12 md:h-16 w-auto rounded-lg"
            />
            <div className={`hidden md:block ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <h1 className="text-xl font-bold">مؤسسة طريق الخير</h1>
              <p className="text-sm">للتشغيل والصيانة</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-lg transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Contact Buttons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                <FaWhatsapp className="text-xl" />
                <span className="hidden xl:inline">واتساب</span>
              </a>
              <a
                href="tel:+966XXXXXXXXX"
                className="flex items-center space-x-2 space-x-reverse bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                <FaPhone className="text-lg" />
                <span className="hidden xl:inline">اتصل بنا</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-primary-500 font-semibold text-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <a
                    href="https://wa.me/966XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>واتساب</span>
                  </a>
                  <a
                    href="tel:+966XXXXXXXXX"
                    className="flex items-center justify-center space-x-2 space-x-reverse bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-all"
                  >
                    <FaPhone className="text-lg" />
                    <span>اتصل بنا</span>
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
