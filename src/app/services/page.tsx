'use client';

import { motion } from 'framer-motion';
import {
  HiOfficeBuilding,
  HiSparkles,
  HiHome,
  HiShieldCheck,
  HiLightningBolt,
  HiCog,
  HiBriefcase,
  HiClipboardList,
  HiCamera,
  HiUsers,
  HiColorSwatch,
  HiFire,
  HiBeaker,
  HiCollection
} from 'react-icons/hi';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00a6a6] via-[#0e87a4] to-[#00a6a6] dark:from-[#008080] dark:via-[#0c6d85] dark:to-[#008080] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-7xl text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">خدماتنا المتميزة</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
            نقدم مجموعة شاملة من الخدمات الاحترافية في إدارة المرافق والنظافة والصيانة بأعلى معايير الجودة العالمية
          </p>
        </motion.div>
      </section>

      {/* 1️⃣ إدارة المرافق - Premium Highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative bg-gradient-to-br from-white via-[#00a6a6]/5 to-white dark:from-gray-800 dark:via-[#00a6a6]/10 dark:to-gray-800 rounded-2xl border-2 border-[#00a6a6]/30 shadow-2xl p-12 md:p-16 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00a6a6] to-[#0e87a4]"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00a6a6]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[#00a6a6] to-[#0e87a4] rounded-3xl flex items-center justify-center shadow-2xl">
                  <HiOfficeBuilding className="w-20 h-20 text-white" />
                </div>
              </motion.div>
              
              <div className="flex-1 text-center md:text-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  إدارة المرافق
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[#00a6a6] to-transparent mb-6 mx-auto md:mx-0"></div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  الإشراف الشامل على تشغيل وصيانة المرافق بأعلى مستويات الاحترافية والكفاءة التشغيلية
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['الإشراف التشغيلي', 'الصيانة الدورية', 'إدارة العقود', 'التخطيط الاستراتيجي'].map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-5 py-2.5 bg-gradient-to-r from-[#00a6a6] to-[#0e87a4] text-white rounded-full text-sm font-semibold shadow-md"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ خدمات النظافة */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100/50 to-white dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative">
              خدمات النظافة
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a6a6] to-transparent"></div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto">
              حلول تنظيف احترافية شاملة بأحدث التقنيات وأعلى معايير الجودة
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'تنظيف المباني', icon: HiHome },
              { title: 'تنظيف زجاج وواجهات المباني', icon: HiSparkles },
              { title: 'تنظيف برك السباحة', icon: HiBeaker },
              { title: 'تنظيف خزانات المياه', icon: HiShieldCheck },
              { title: 'تنظيف بعد التشطيب', icon: HiBriefcase },
              { title: 'تنظيف يومي', icon: HiSparkles },
              { title: 'تنظيف نوافذ', icon: HiSparkles },
              { title: 'تنظيف سجاد', icon: HiHome },
              { title: 'تنظيف كنب', icon: HiHome },
              { title: 'تنظيف الستائر', icon: HiSparkles },
              { title: 'تنظيف الأثاث', icon: HiCollection },
              { title: 'تنظيف دوري', icon: HiClipboardList },
              { title: 'التعقيم', icon: HiShieldCheck },
              { title: 'مكافحة الحشرات', icon: HiShieldCheck }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl hover:border-[#00a6a6] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#00a6a6]/10 to-[#0e87a4]/10 rounded-xl group-hover:from-[#00a6a6] group-hover:to-[#0e87a4] transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#00a6a6] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#00a6a6] dark:group-hover:text-[#00a6a6] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ خدمات الصيانة والمقاولات */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative">
              خدمات الصيانة والمقاولات
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a6a6] to-transparent"></div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto">
              خدمات متخصصة في جميع أعمال الصيانة والمقاولات بخبرة ومهنية عالية
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'الكهرباء', icon: HiLightningBolt },
              { title: 'السباكة', icon: HiCog },
              { title: 'الصبغ والدهانات', icon: HiColorSwatch },
              { title: 'التكييف', icon: HiFire },
              { title: 'البناء', icon: HiHome },
              { title: 'الجبس بورد', icon: HiBriefcase },
              { title: 'السيراميك', icon: HiCollection },
              { title: 'الترميمات', icon: HiCog },
              { title: 'الأسفلت', icon: HiBriefcase },
              { title: 'عزل الأسطح', icon: HiShieldCheck },
              { title: 'بناء الملاحق', icon: HiHome },
              { title: 'تشطيب المباني والمحلات', icon: HiSparkles }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl hover:border-[#00a6a6] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#00a6a6]/10 to-[#0e87a4]/10 rounded-xl group-hover:from-[#00a6a6] group-hover:to-[#0e87a4] transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#00a6a6] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#00a6a6] dark:group-hover:text-[#00a6a6] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ خدمات أخرى */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100/50 to-white dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative">
              خدمات أخرى
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a6a6] to-transparent"></div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-8">
              خدمات إضافية متنوعة لتلبية جميع احتياجاتكم
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1: تركيبات وصيانة */}
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 shadow-xl hover:shadow-2xl hover:border-[#00a6a6] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00a6a6] via-[#0e87a4] to-[#00a6a6]"></div>
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#00a6a6]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#00a6a6] to-[#0e87a4] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <HiCamera className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  تركيبات وصيانة
                </h3>
                <ul className="space-y-4">
                  {['تركيب وصيانة كاميرات المراقبة', 'تأسيس وصيانة الكهرباء والسباكة'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-[#00a6a6] text-xl mt-1">◆</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2: خدمات متخصصة */}
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 shadow-xl hover:shadow-2xl hover:border-[#00a6a6] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00a6a6] via-[#0e87a4] to-[#00a6a6]"></div>
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#00a6a6]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#00a6a6] to-[#0e87a4] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <HiCog className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  خدمات متخصصة
                </h3>
                <ul className="space-y-4">
                  {['مكافحة الحشرات', 'عزل الأسطح', 'ترميم المباني', 'بناء الملاحق'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-[#00a6a6] text-xl mt-1">◆</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3: خدمات إدارية */}
            <motion.div
              variants={item}
              whileHover={{ y: -10 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 shadow-xl hover:shadow-2xl hover:border-[#00a6a6] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00a6a6] via-[#0e87a4] to-[#00a6a6]"></div>
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#00a6a6]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#00a6a6] to-[#0e87a4] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <HiUsers className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  خدمات إدارية
                </h3>
                <ul className="space-y-4">
                  {['إدارة عقود الصيانة', 'إدارة المخزون', 'إدارة القوى العاملة'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-[#00a6a6] text-xl mt-1">◆</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#00a6a6] via-[#0e87a4] to-[#00a6a6] dark:from-[#008080] dark:via-[#0c6d85] dark:to-[#008080] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            هل تحتاج إلى أي من خدماتنا؟
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95">
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-white text-[#00a6a6] font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            تواصل معنا الآن
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
