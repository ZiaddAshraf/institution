import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img
                src="/imgs/logo.jpg"
                alt="مؤسسة طريق الخير"
                className="h-16 w-auto rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold">مؤسسة طريق الخير</h3>
            <p className="text-gray-300 leading-relaxed">
              نحن مؤسسة سعودية رائدة في مجال التشغيل والصيانة والنظافة، نقدم حلولاً متكاملة للمنشآت التجارية والسكنية بأعلى معايير الجودة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <span className="ml-2">←</span> اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3 text-gray-300">
              <li>• خدمات التشغيل</li>
              <li>• الصيانة الشاملة</li>
              <li>• خدمات النظافة</li>
              <li>• إدارة المرافق</li>
              <li>• الصيانة الوقائية</li>
              <li>• التنظيف المتخصص</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 space-x-reverse text-gray-300">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span>المملكة العربية السعودية</span>
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
                  info@goodwill.sa
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <FaWhatsapp className="text-primary-400" />
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  واتساب
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-4">تابعنا</h5>
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
              © {currentYear} مؤسسة طريق الخير للتشغيل والصيانة. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
