import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export const MobileStickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      data-testid="mobile-sticky-cta"
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-stone-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="flex items-center gap-2">
          <button
            data-testid="mobile-call-btn"
            className="w-12 h-12 rounded-xl bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-900 flex-shrink-0 active:scale-95 transition-transform"
            aria-label="Bizi arayın"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <button
            data-testid="mobile-cta-btn"
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-sm shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            Ücretsiz Başlayın
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
