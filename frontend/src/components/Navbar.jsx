import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    { label: 'SSS', href: '#faq' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl lg:text-2xl">R</span>
                </div>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-stone-900 tracking-tight">RestoraX</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-stone-700 hover:text-teal-600 font-medium transition-all duration-200 hover:bg-teal-50/50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="text-stone-700 hover:text-teal-600 hover:bg-teal-50">
              Giriş Yap
            </Button>
            <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 transition-all duration-200">
              Ücretsiz Dene
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-stone-200 shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-stone-700 hover:text-teal-600 font-medium py-3 px-4 hover:bg-teal-50 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-stone-200">
              <Button variant="outline" className="w-full border-2">
                Giriş Yap
              </Button>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg">
                Ücretsiz Dene
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
