'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useI18n } from '@/contexts/I18nContext'
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
  FaInstagram, FaFacebook, FaTwitter, FaClock 
} from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Contact() {
  const { t } = useI18n()
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <FaPhone size={30} />,
      title: t.contact.phone,
      info: '966557221833+',
      link: 'tel:+966557221833',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaWhatsapp size={30} />,
      title: t.nav.whatsapp,
      info: '966557221833+',
      link: 'https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaEnvelope size={28} />,
      title: t.contact.email,
      info: 'Goodwill.laundries@gmail.com',
      link: 'mailto:Goodwill.laundries@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: t.contact.address,
      info: t.footer.location || '7625 ابن مراوح المزني، حي الدواسر، الدمام 32416، السعودية',
      link: 'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiI78yz6f6QAxUAAAAAHQAAAAAQBQ..i&sca_esv=55588fd05011d482&pvq=Cg0vZy8xMWw0ZDdzd2Zo&lqi=CmE3NjI1INin2KjZhiDZhdix2KfZiNitINin2YTZhdiy2YbZitiMINit2Yog2KfZhNiv2YjYp9iz2LHYjCDYp9mE2K_Zhdin2YUgMzI0MTbYjCDYp9mE2LPYudmI2K_ZitipkgERY29tcG91bmRfYnVpbGRpbmc&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&ftid=0x3e49fc741c1d5b8f:0x93cd7cf3c9108d3a',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const workingHours = [
    { day: t.contact.working_days, hours: t.contact.working_time },
    { day: t.contact.friday, hours: t.contact.closed }
  ]

  const socialMedia = [
    {
      icon: <FaInstagram size={24} />,
  name: 'Instagram',
      link: 'https://www.instagram.com/goodwill.laundries3',
      color: 'hover:bg-pink-600'
    },
    {
      icon: <FaFacebook size={24} />,
      name: 'Facebook',
      link: 'https://facebook.com',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <FaTwitter size={24} />,
      name: 'Twitter',
      link: 'https://twitter.com',
      color: 'hover:bg-blue-400'
    },
    {
      icon: <FaWhatsapp size={24} />,
      name: 'WhatsApp',
      link: 'https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85',
      color: 'hover:bg-green-600'
    }
  ]

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/imgs/hero1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-center">
            {t.contact.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-center max-w-3xl mx-auto opacity-95">
            {t.contact.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card p-6 text-center group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  {item.info}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeInUp} className="card p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  {t.contact.form_title}
                </h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 px-5 py-4 rounded-xl mb-6">
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 px-5 py-4 rounded-xl mb-6">
                    حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                          {t.contact.name_label} *
                        </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder={t.contact.name_placeholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                        {t.contact.phone_label} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder={t.contact.phone_placeholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                      {t.contact.email_label} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder={t.contact.email_placeholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                      {t.contact.service_label}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">{t.contact.service_placeholder}</option>
                      <option value="operation">{t.contact.service_operation}</option>
                      <option value="maintenance">{t.contact.service_maintenance}</option>
                      <option value="cleaning">{t.contact.service_cleaning}</option>
                      <option value="other">{t.contact.service_other}</option>
                    </select>
                  </div>

                  <div>
                      <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                      {t.contact.message_label} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder={t.contact.message_placeholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    {t.contact.submit_button}
                  </button>
                </form>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Working Hours */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md">
                    <FaClock size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t.contact.working_hours_title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold">{item.day}</span>
                      <span className="text-gray-700 dark:text-gray-300">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                  {t.contact.follow_us}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 bg-gray-800 ${social.color} text-white py-3.5 rounded-lg transition-all hover:scale-105 shadow-md`}
                    >
                      {social.icon}
                      <span className="text-sm font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card p-6 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                <h3 className="text-xl font-bold mb-4">
                    {t.contact.quick_contact_title}
                  </h3>
                  <p className="mb-5 opacity-95">
                    {t.contact.quick_contact_desc}
                  </p>
                <a
                  href="https://wa.me/966557221833?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-primary-600 hover:bg-gray-50 text-center font-bold py-3.5 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaWhatsapp size={20} />
                      <span>{t.contact.whatsapp_message}</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center mb-12">موقعنا</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* Google Maps Embed - Replace with your actual location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1999999999994!2d50.04!3d26.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fc741c1d5b8f%3A0x93cd7cf3c9108d3a!2z3Jc2MjUg2KfYqNmGINmF2LHYp9mI2K0g2KfZhNmF2LLZhti52Iwg2K3ZiiDYp9mE2K_ZiNin2LPYsdiyINin2YTYr9mF2KfZhSDZpdmEINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
