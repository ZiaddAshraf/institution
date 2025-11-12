'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { FaEye, FaBullseye, FaAward, FaUsers, FaCheckCircle } from 'react-icons/fa'

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

export default function About() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: <FaAward size={40} />,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في كل ما نقدمه من خدمات'
    },
    {
      icon: <FaUsers size={40} />,
      title: 'الاحترافية',
      description: 'فريق عمل محترف ومدرب على أحدث الأساليب والتقنيات'
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: 'الالتزام',
      description: 'نلتزم بمواعيدنا ونحرص على إتمام المشاريع في الوقت المحدد'
    },
    {
      icon: <FaBullseye size={40} />,
      title: 'رضا العملاء',
      description: 'رضا عملائنا هو هدفنا الأول ونسعى لتحقيقه دائماً'
    }
  ]

  const achievements = [
    'أكثر من 500 عميل راضٍ عن خدماتنا',
    'أكثر من 1000 مشروع منجز بنجاح',
    '15 عاماً من الخبرة في المجال',
    'فريق عمل يزيد عن 100 موظف متخصص',
    'شهادات جودة معتمدة محلياً ودولياً',
    'تغطية شاملة في جميع مناطق المملكة'
  ]

  const gallery = [
    '/imgs/hero1.jpg',
    '/imgs/hero2.jpg',
    '/imgs/hero3.jpg',
    '/imgs/Service1.jpg',
    '/imgs/Service2.jpg',
    '/imgs/Service3.jpg'
  ]

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/imgs/hero3.jpg")',
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
            من نحن
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            تعرف على قصتنا ورؤيتنا ورسالتنا في خدمة عملائنا الكرام
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                مؤسسة طريق الخير للتشغيل والصيانة
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                تأسست مؤسسة طريق الخير للتشغيل والصيانة بهدف تقديم خدمات متميزة في مجال التشغيل والصيانة والنظافة للمنشآت التجارية والسكنية في المملكة العربية السعودية.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                منذ انطلاقتنا، ونحن نسعى لتحقيق التميز في كل ما نقدمه، مستندين على فريق عمل محترف ومدرب، وأحدث المعدات والتقنيات، وأفضل الممارسات في مجال عملنا.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نفخر بكوننا الشريك الموثوق لأكثر من 500 عميل في مختلف القطاعات، ونلتزم بتقديم خدمات تفوق توقعاتهم وتحقق رضاهم التام.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/imgs/hero2.jpg"
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              إنجازاتنا
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="card p-8">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                <FaEye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                أن نكون الخيار الأول والأكثر موثوقية في مجال خدمات التشغيل والصيانة والنظافة في المملكة العربية السعودية، من خلال تقديم خدمات متميزة تتسم بالجودة العالية والابتكار المستمر.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card p-8">
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                <FaBullseye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">رسالتنا</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                تقديم حلول متكاملة واحترافية في مجال التشغيل والصيانة والنظافة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع الالتزام بأعلى معايير الجودة والسلامة والاستدامة البيئية.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white">
        <motion.div
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">قيمنا</h2>
            <p className="section-subtitle">
              المبادئ التي تحكم عملنا وتوجه مسيرتنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center"
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="container-custom"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">معرض الصور</h2>
            <p className="section-subtitle">
              لمحات من أعمالنا ومشاريعنا المنجزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              هل تريد العمل معنا؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              نحن دائماً في انتظار شركاء جدد وفرص للتعاون
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-block">
              تواصل معنا
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
