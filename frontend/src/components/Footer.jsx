import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    'Ürün': [
      { label: 'Özellikler', href: '#features' },
      { label: 'Fiyatlandırma', href: '#pricing' },
      { label: 'Demo', href: '#' },
      { label: 'Entegrasyonlar', href: '#' }
    ],
    'Şirket': [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Kariyer', href: '#' },
      { label: 'Basın Kiti', href: '#' }
    ],
    'Destek': [
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'İletişim', href: '#' },
      { label: 'Durum', href: '#' },
      { label: 'API Dokümantasyon', href: '#' }
    ],
    'Yasal': [
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'Kullanım Koşulları', href: '#' },
      { label: 'KVKK', href: '#' },
      { label: 'Çerez Politikası', href: '#' }
    ]
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-white">RestoraX</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Restoran yönetimini dijitalleştiren, operasyonlarınızı optimize eden yeni nesil platform.
            </p>
            <div className="space-y-3">
              <a href="tel:+902121234567" className="flex items-center text-stone-400 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +90 (212) 123 45 67
              </a>
              <a href="mailto:info@restorax.com" className="flex items-center text-stone-400 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@restorax.com
              </a>
              <div className="flex items-start text-stone-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Maslak, İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} RestoraX. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-500 hover:text-teal-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-500 hover:text-teal-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-500 hover:text-teal-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-500 hover:text-teal-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
