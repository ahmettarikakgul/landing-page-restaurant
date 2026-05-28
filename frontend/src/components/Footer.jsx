import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    'Ürün': [
      { label: 'Özellikler', href: '#features' },
      { label: 'Fiyatlandırma', href: '#pricing' },
      { label: 'Demo', href: '#' },
      { label: 'Entegrasyonlar', href: '#' },
      { label: 'Güncellemeler', href: '#' }
    ],
    'Şirket': [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Kariyer', href: '#' },
      { label: 'Basın Kiti', href: '#' },
      { label: 'Ortak Programı', href: '#' }
    ],
    'Destek': [
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'İletişim', href: '#' },
      { label: 'Durum', href: '#' },
      { label: 'API Dokümantasyon', href: '#' },
      { label: 'Topluluk', href: '#' }
    ],
    'Yasal': [
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'Kullanım Koşulları', href: '#' },
      { label: 'KVKK', href: '#' },
      { label: 'Çerez Politikası', href: '#' },
      { label: 'Güvenlik', href: '#' }
    ]
  };

  return (
    <footer className="relative bg-stone-900 text-stone-300 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-teal-900/20 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl blur-md opacity-50" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">R</span>
                  </div>
                </div>
                <span className="text-2xl font-black text-white">RestoraX</span>
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed text-lg">
                Restoran yönetimini dijitalleştiren, operasyonlarınızı optimize eden yeni nesil platform.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4">
                <a href="tel:+902121234567" className="flex items-center text-stone-400 hover:text-teal-400 transition-colors group">
                  <div className="w-10 h-10 bg-stone-800 group-hover:bg-teal-900/50 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+90 (212) 123 45 67</span>
                </a>
                <a href="mailto:info@restorax.com" className="flex items-center text-stone-400 hover:text-teal-400 transition-colors group">
                  <div className="w-10 h-10 bg-stone-800 group-hover:bg-teal-900/50 rounded-lg flex items-center justify-center mr-3 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">info@restorax.com</span>
                </a>
                <div className="flex items-start text-stone-400 group">
                  <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Maslak, İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-white font-bold text-lg mb-6">{category}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-stone-400 hover:text-teal-400 transition-colors text-sm flex items-center group"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-stone-500 text-sm">
                &copy; {new Date().getFullYear()} RestoraX. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-900/30 border border-teal-800/50 rounded-lg">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs text-teal-400 font-semibold">Sistem Çalışıyor</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-teal-900/50 rounded-lg flex items-center justify-center text-stone-400 hover:text-teal-400 transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-teal-900/50 rounded-lg flex items-center justify-center text-stone-400 hover:text-teal-400 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-teal-900/50 rounded-lg flex items-center justify-center text-stone-400 hover:text-teal-400 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-teal-900/50 rounded-lg flex items-center justify-center text-stone-400 hover:text-teal-400 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
