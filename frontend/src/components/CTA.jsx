import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-stone-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Background with pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          {/* Glowing orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-teal-400/30 via-transparent to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-400/10 via-transparent to-transparent blur-3xl" />

          <div className="relative px-8 sm:px-12 lg:px-20 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">ŞİMDİ BAŞLAYIN</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                Restoranınızı
                <span className="block mt-2">Daha İyi Yönetin</span>
              </h2>
              
              {/* Description */}
              <p className="text-xl lg:text-2xl text-teal-50 leading-relaxed max-w-3xl mx-auto font-medium">
                Şimdi başlayın, ilk <span className="text-white font-bold">14 gün tamamen ücretsiz.</span> Kredi kartı bilgisi gerekmez.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-white text-teal-600 hover:bg-teal-50 px-10 py-7 text-lg font-black shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Ücretsiz Hesap Açın
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/40 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg font-black transition-all duration-200"
                >
                  Satış Ekibiyle Görüşün
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                <div className="flex items-center gap-2 text-white/90">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-semibold">5 dakikada kurulum</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <div className="flex items-center gap-2 text-white/90">
                  <span className="text-sm font-semibold">1.200+ mutlu müşteri</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <div className="flex items-center gap-2 text-white/90">
                  <span className="text-sm font-semibold">%98 memnuniyet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
