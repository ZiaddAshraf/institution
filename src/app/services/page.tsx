 'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
import { 
  FaCog, FaBroom, FaTools, FaWrench, FaBuilding, FaShieldAlt,
  FaCheckCircle, FaClipboardList, FaHardHat, FaPaintRoller,
  FaLightbulb, FaSnowflake
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

export default function Services() {
  const { t } = useI18n()
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [detailsRef, detailsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const mainServices = [
    {
      icon: <FaCog size={50} />,
      title: t.services.operation.title,
      description: t.services.operation.description,
      features: [
        t.services.operation.features.feature1,
        t.services.operation.features.feature2,
        t.services.operation.features.feature3,
        t.services.operation.features.feature4
      ],
      image: '/imgs/Service1.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaTools size={50} />,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      features: [
        t.services.maintenance.features.feature1,
        t.services.maintenance.features.feature2,
        t.services.maintenance.features.feature3,
        t.services.maintenance.features.feature4
      ],
      image: '/imgs/Service2.jpg',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <FaBroom size={50} />,
      title: t.services.cleaning.title,
      description: t.services.cleaning.description,
      features: [
        t.services.cleaning.features.feature1,
        t.services.cleaning.features.feature2,
        t.services.cleaning.features.feature3,
        t.services.cleaning.features.feature4
      ],
      image: '/imgs/Service3.jpg',
      color: 'from-green-500 to-green-600'
    }
  ]

  const additionalServices = [
    {
      icon: <FaWrench size={30} />,
      title: t.services.additional.plumbing_title,
      description: t.services.additional.plumbing_desc
    },
    {
      icon: <FaPaintRoller size={30} />,
      title: t.services.additional.painting_title,
      description: t.services.additional.painting_desc
    },
    {
      icon: <FaLightbulb size={30} />,
      title: t.services.additional.electrical_title,
      description: t.services.additional.electrical_desc
    },
    {
      icon: <FaSnowflake size={30} />,
      title: t.services.additional.ac_title,
      description: t.services.additional.ac_desc
    },
    {
      icon: <FaHardHat size={30} />,
      title: t.services.additional.construction_title,
      description: t.services.additional.construction_desc
    },
    {
      icon: <FaBuilding size={30} />,
      title: t.services.additional.building_management_title,
      description: t.services.additional.building_management_desc
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaShieldAlt size={40} />,
      title: 'الجودة والضمان',
      description: 'نضمن جودة خدماتنا بشهادات معتمدة وضمان شامل'
    },
    {
      icon: <FaClipboardList size={40} />,
      title: 'التخطيط المحكم',
      description: 'نخطط لكل مشروع بدقة لضمان التنفيذ الأمثل'
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: 'الخبرة الواسعة',
      description: 'أكثر من 15 عاماً من الخبرة في المجال'
    }
  ]

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/imgs/Service4.png")',
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
            خدماتنا المتميزة
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الاحترافية في التشغيل والصيانة والنظافة
          </motion.p>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="py-20 bg-white dark:bg-gray-800">
        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500`}></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`text-primary-500 mb-6 bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white`}>
                    {service.icon}
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 space-x-reverse">
                        <FaCheckCircle className="text-primary-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700 dark:text-gray-100 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t.services.additional_services_title}</h2>
            <p className="section-subtitle">
              {t.services.additional_services_subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center group"
              >
                <div className="text-primary-500 mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-100">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={detailsRef} className="py-20 bg-white dark:bg-gray-800">
        <motion.div
          initial="hidden"
          animate={detailsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">{t.services.why_choose_us_title}</h2>
            <p className="section-subtitle">
              {t.services.why_choose_us_subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center"
              >
                <div className="text-primary-500 mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل تحتاج إلى أي من خدماتنا؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم للحصول على عرض أسعار مجاني واستشارة متخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                طلب عرض أسعار
              </Link>
              <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
