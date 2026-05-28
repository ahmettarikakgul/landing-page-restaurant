import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Çözümler', href: '#features' },
    { label: 'Nasıl Çalışır', href: '#workflow' },
    { label: 'Fiyatlar', href: '#pricing' },
    { label: 'Müşteriler', href: '#testimonials' },
  ];

  return (
    <>
      <nav
        data-testid="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-[0_1px_0_rgba(0,0,0,0.02)]'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/" className="flex items-center gap-2.5 group" data-testid="navbar-logo">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl lg:text-2xl leading-none">R</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl lg:text-[22px] font-black text-stone-900 tracking-tight">RestoraX</span>
                <span className="text-[10px] lg:text-[11px] font-bold text-amber-600 tracking-wider uppercase mt-0.5">Restoran OS</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`nav-link-${link.label}`}
                  className="px-4 py-2 text-stone-700 hover:text-stone-900 font-bold text-[14px] transition-all duration-200 hover:bg-stone-100 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" className="text-stone-700 hover:text-stone-900 hover:bg-stone-100 font-bold text-sm" data-testid="nav-login-btn">
                Giriş
              </Button>
              <Button className="bg-stone-900 hover:bg-stone-800 text-white font-black text-sm shadow-sm px-5 h-10" data-testid="nav-cta-btn">
                Ücretsiz Dene <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 -mr-2 rounded-xl text-stone-900 hover:bg-stone-100 active:bg-stone-200 transition-all"
              data-testid="mobile-menu-toggle"
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={2.5} /> : <Menu className="w-6 h-6" strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          data-testid="mobile-menu-drawer"
        >
          <div className="h-full overflow-y-auto px-5 py-6 flex flex-col">
            <div className="flex-1 space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-stone-900 hover:text-amber-700 font-black text-2xl py-4 border-b border-stone-100 transition-colors"
                  style={{ transitionDelay: `${idx * 30}ms` }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-stone-400" />
                </a>
              ))}
            </div>

            <div className="pt-6 space-y-3">
              <Button variant="outline" className="w-full h-14 border-2 border-stone-200 font-black text-base">
                Giriş Yap
              </Button>
              <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-base shadow-lg shadow-red-600/30">
                Ücretsiz Hesap Aç
              </Button>
              <p className="text-center text-xs text-stone-500 font-semibold pt-2">14 gün ücretsiz · Kredi kartı gerekmez</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
