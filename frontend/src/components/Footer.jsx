import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    'Ürün': [
      { label: 'Özellikler', href: '#features' },
      { label: 'Fiyatlandırma', href: '#pricing' },
      { label: 'Demo Talep Et', href: '#' },
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
      { label: 'Sistem Durumu', href: '#' },
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
    <footer className="relative text-amber-100/80 overflow-hidden" style={{ background: 'linear-gradient(180deg, #171411 0%, #1c1917 100%)' }}>
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-amber-900/15 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-orange-900/10 via-transparent to-transparent blur-3xl" />

      {/* Newsletter signup band */}
      <div className="relative border-b border-amber-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-amber-50 mb-3">
                Bültenimize <span className="text-amber-400">abone olun</span>
              </h3>
              <p className="text-amber-100/60 text-base lg:text-lg">
                Yeni özellikler, restoran teknolojisi haberleri ve özel kampanyalardan ilk siz haberdar olun.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="ornek@restoraniniz.com"
                className="flex-1 px-5 py-4 bg-[#26221e] border-2 border-amber-900/20 hover:border-stone-700 focus:border-amber-500 focus:outline-none rounded-xl text-amber-50 placeholder-amber-100/30 font-medium transition-colors"
              />
              <button className="group px-6 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-stone-900 font-black rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Abone Ol
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-60" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-amber-50 font-black text-2xl">R</span>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-black text-amber-50">RestoraX</span>
                  <div className="text-xs font-bold text-amber-400">Restoran Teknolojileri</div>
                </div>
              </div>
              <p className="text-amber-100/60 mb-8 leading-relaxed">
                Türkiye'nin önde gelen restoran yönetim platformu. 1.200+ restoran her gün RestoraX ile operasyonlarını yönetiyor.
              </p>
              
              {/* Contact */}
              <div className="space-y-4">
                <a href="tel:+902121234567" className="flex items-center text-amber-100/60 hover:text-amber-400 transition-colors group">
                  <div className="w-10 h-10 bg-[#26221e] group-hover:bg-amber-500/15 border border-amber-900/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-bold">+90 (212) 123 45 67</span>
                </a>
                <a href="mailto:info@restorax.com" className="flex items-center text-amber-100/60 hover:text-amber-400 transition-colors group">
                  <div className="w-10 h-10 bg-[#26221e] group-hover:bg-amber-500/15 border border-amber-900/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-bold">info@restorax.com</span>
                </a>
                <div className="flex items-start text-amber-100/60">
                  <div className="w-10 h-10 bg-[#26221e] border border-amber-900/20 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-bold pt-2">Maslak, Sarıyer<br/>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-amber-50 font-black text-base mb-6 uppercase tracking-wider">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-amber-100/60 hover:text-amber-400 transition-colors text-sm font-semibold flex items-center group"
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
        <div className="border-t border-amber-900/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-amber-100/40 text-sm font-medium">
                &copy; {new Date().getFullYear()} RestoraX. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/30 border border-green-800/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-black uppercase tracking-wider">Sistem Çalışıyor</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-11 h-11 bg-[#26221e] hover:bg-amber-500/15 border border-amber-900/20 hover:border-amber-700 rounded-xl flex items-center justify-center text-amber-100/60 hover:text-amber-400 transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
