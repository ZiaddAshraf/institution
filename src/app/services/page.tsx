'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '@/contexts/I18nContext';
import {
  Building2,
  ClipboardCheck,
  FileText,
  Target,
  Sparkles,
  Building,
  Home,
  Paintbrush,
  Armchair,
  Wind,
  Droplets,
  ShowerHead,
  Bug,
  Zap,
  Wrench,
  Hammer,
  AirVent,
  Blocks,
  Brush,
  LayoutGrid,
  HardHat,
  ShieldCheck,
  UserCheck,
  Package,
  Users,
  Camera,
  Settings
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* 🔶 1) HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 dark:from-primary-700 dark:via-primary-600 dark:to-secondary-700 text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom text-center relative z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            خدماتنا المتميزة
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            نقدم مجموعة شاملة من خدمات التشغيل والصيانة وإدارة المرافق بأعلى معايير الاحترافية والجودة.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              اطلب عرض سعر مجاني
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 🔶 2) القسم 1 — إدارة المرافق */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              إدارة المرافق
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              حلول متكاملة لإدارة وتشغيل المرافق بأعلى معايير الكفاءة والجودة
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: Building2, 
                title: 'الإشراف التشغيلي',
                desc: 'إشراف شامل على جميع عمليات التشغيل اليومية'
              },
              { 
                icon: ClipboardCheck, 
                title: 'الصيانة الدورية',
                desc: 'جدولة وتنفيذ برامج الصيانة الوقائية المنتظمة'
              },
              { 
                icon: FileText, 
                title: 'إدارة العقود',
                desc: 'إدارة احترافية لعقود المقاولين والموردين'
              },
              { 
                icon: Target, 
                title: 'التخطيط الاستراتيجي',
                desc: 'وضع خطط تشغيلية استراتيجية طويلة المدى'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card p-8 group cursor-pointer"
              >
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all"
                >
                  اطلب الخدمة
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ←
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔶 3) القسم 2 — خدمات النظافة */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              خدمات النظافة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              حلول تنظيف احترافية شاملة بأحدث التقنيات وأعلى معايير الجودة
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'تنظيف المباني', icon: Building, desc: 'تنظيف شامل لجميع أنواع المباني' },
              { title: 'تنظيف الواجهات والزجاج', icon: Sparkles, desc: 'تنظيف احترافي للواجهات الخارجية' },
              { title: 'تنظيف بعد التشطيب', icon: Brush, desc: 'تنظيف دقيق بعد أعمال البناء' },
              { title: 'التنظيف اليومي والدوري', icon: ClipboardCheck, desc: 'خدمات تنظيف منتظمة ومجدولة' },
              { title: 'تنظيف السجاد', icon: LayoutGrid, desc: 'تنظيف عميق للسجاد والموكيت' },
              { title: 'تنظيف الكنب', icon: Armchair, desc: 'تنظيف وتعقيم الأثاث المنجد' },
              { title: 'تنظيف الستائر', icon: Wind, desc: 'تنظيف متخصص لجميع أنواع الستائر' },
              { title: 'تنظيف الأثاث', icon: Home, desc: 'تنظيف وتلميع قطع الأثاث' },
              { title: 'التعقيم', icon: ShieldCheck, desc: 'تعقيم وتطهير شامل للمساحات' },
              { title: 'تنظيف خزانات المياه', icon: Droplets, desc: 'تنظيف وتعقيم خزانات المياه' },
              { title: 'تنظيف برك السباحة', icon: ShowerHead, desc: 'صيانة وتنظيف حمامات السباحة' },
              { title: 'مكافحة الحشرات', icon: Bug, desc: 'خدمات مكافحة ومنع الحشرات' }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                      {service.desc}
                    </p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
                    >
                      اطلب الخدمة ←
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔶 4) القسم 3 — خدمات الصيانة والمقاولات */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              خدمات الصيانة والمقاولات
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              خدمات متخصصة في جميع أعمال الصيانة والمقاولات بخبرة ومهنية عالية
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'الكهرباء', icon: Zap, desc: 'تركيب وصيانة الأنظمة الكهربائية' },
              { title: 'السباكة', icon: Wrench, desc: 'أعمال السباكة والصرف الصحي' },
              { title: 'الدهانات', icon: Paintbrush, desc: 'دهانات داخلية وخارجية احترافية' },
              { title: 'التكييف', icon: AirVent, desc: 'صيانة وتركيب أنظمة التكييف' },
              { title: 'البناء', icon: Blocks, desc: 'أعمال البناء والإنشاءات' },
              { title: 'الجبس بورد', icon: LayoutGrid, desc: 'تركيب وتشطيب الجبس بورد' },
              { title: 'السيراميك', icon: LayoutGrid, desc: 'تركيب جميع أنواع البلاط والسيراميك' },
              { title: 'الترميمات', icon: Hammer, desc: 'ترميم وإصلاح المباني' },
              { title: 'الأسفلت', icon: HardHat, desc: 'أعمال الأسفلت والطرق' },
              { title: 'عزل الأسطح', icon: ShieldCheck, desc: 'عزل حراري ومائي للأسطح' },
              { title: 'بناء الملاحق', icon: Home, desc: 'بناء وتشطيب الملاحق والإضافات' },
              { title: 'التشطيبات', icon: Sparkles, desc: 'تشطيبات فاخرة للمباني والمحلات' }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                      {service.desc}
                    </p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
                    >
                      اطلب الخدمة ←
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔶 5) القسم 4 — خدمات إضافية ومتخصصة */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              خدمات إضافية ومتخصصة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              مجموعة متنوعة من الخدمات المتخصصة لتلبية جميع احتياجاتكم
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* تركيبات وصيانة */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="card p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Camera className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                تركيبات وصيانة
              </h3>
              <ul className="space-y-4">
                {[
                  'تركيب وصيانة كاميرات المراقبة',
                  'تأسيس وصيانة كهرباء وسباكة'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="mt-6 w-full btn-primary text-center inline-block"
              >
                اطلب الخدمة
              </Link>
            </motion.div>

            {/* خدمات متخصصة */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="card p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Settings className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                خدمات متخصصة
              </h3>
              <ul className="space-y-4">
                {[
                  'مكافحة الحشرات',
                  'عزل الأسطح',
                  'ترميم المباني',
                  'بناء الملاحق'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="mt-6 w-full btn-primary text-center inline-block"
              >
                اطلب الخدمة
              </Link>
            </motion.div>

            {/* خدمات إدارية */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="card p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                خدمات إدارية
              </h3>
              <ul className="space-y-4">
                {[
                  'إدارة عقود الصيانة',
                  'إدارة المخزون',
                  'إدارة القوى العاملة'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="mt-6 w-full btn-primary text-center inline-block"
              >
                اطلب الخدمة
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🔶 6) CTA SECTION */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 dark:from-primary-700 dark:via-primary-600 dark:to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container-custom text-center relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            هل تحتاج إلى أي من خدماتنا؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            اتصل بنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك خلال 24 ساعة.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="https://wa.me/966501234567?text=مرحباً، أود الاستفسار عن خدماتكم"
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              واتساب
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary-600 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              اتصل بنا الآن
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
