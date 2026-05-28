import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
              <Button className="bg-[#1c1917] hover:bg-[#26221e] text-amber-50 font-black text-sm shadow-sm px-5 h-10" data-testid="nav-cta-btn">
                Ücretsiz Dene <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-11 h-11 -mr-2 rounded-xl flex items-center justify-center text-stone-900 hover:bg-stone-100 active:bg-stone-200 active:scale-95 transition-all"
              data-testid="mobile-menu-toggle"
              aria-label="Menüyü aç/kapat"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0, opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              </motion.div>
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 0 : -90, opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - properly animated full-screen sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="lg:hidden fixed inset-x-0 top-0 z-40 bg-white shadow-2xl"
              data-testid="mobile-menu-drawer"
            >
              <div className="pt-20 pb-6 px-5 max-h-[88vh] overflow-y-auto">
                <div className="space-y-1 mb-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                      className="flex items-center justify-between text-stone-900 font-black text-2xl py-4 border-b border-stone-100 active:bg-stone-50 active:scale-[0.99] -mx-2 px-2 rounded-lg transition-transform"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-5 h-5 text-stone-400" />
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="space-y-3"
                >
                  <Button variant="outline" className="w-full h-14 border-2 border-stone-200 font-black text-base">
                    Giriş Yap
                  </Button>
                  <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-base shadow-lg shadow-red-600/30">
                    Ücretsiz Hesap Aç
                  </Button>
                  <p className="text-center text-xs text-stone-500 font-semibold pt-2">14 gün ücretsiz · Kredi kartı gerekmez</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
