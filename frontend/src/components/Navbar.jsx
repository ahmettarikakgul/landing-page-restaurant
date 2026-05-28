import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Özellikler', href: '#features' },
    { label: 'Fiyatlandırma', href: '#pricing' },
    { label: 'Müşteriler', href: '#testimonials' },
    { label: 'İletişim', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b-2 border-amber-100'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-2xl">R</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-stone-900 tracking-tight">RestoraX</span>
                <div className="text-[10px] font-semibold text-amber-600 -mt-1">Restoran Yönetimi</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2.5 text-stone-700 hover:text-amber-600 font-bold text-sm transition-all duration-200 hover:bg-amber-50 rounded-xl"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-stone-700 hover:text-amber-600 hover:bg-amber-50 font-bold"
            >
              Giriş Yap
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black shadow-lg shadow-red-600/40 hover:shadow-xl hover:shadow-red-600/50 transition-all duration-200 px-6">
              Ücretsiz Başlayın
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-stone-700 hover:bg-amber-50 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t-2 border-amber-100 shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-stone-700 hover:text-amber-600 font-bold py-3 px-4 hover:bg-amber-50 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t-2 border-amber-100">
              <Button variant="outline" className="w-full border-2 border-stone-300 font-bold">
                Giriş Yap
              </Button>
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black shadow-lg">
                Ücretsiz Başlayın
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
