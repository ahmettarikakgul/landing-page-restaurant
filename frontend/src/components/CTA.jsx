import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Phone, CheckCircle2 } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
          {/* Layered backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          {/* Atmospheric lighting */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-amber-500/30 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-orange-500/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl" />

          <div className="relative px-6 sm:px-12 lg:px-20 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 rounded-full mb-8">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-black text-amber-300 uppercase tracking-widest">Şimdi Başlayın</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  Restoranınızı
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent mt-2">
                    bugün dijitalleştirin
                  </span>
                </h2>

                <p className="text-lg lg:text-xl text-stone-300 leading-relaxed mb-8 font-medium">
                  14 gün ücretsiz deneyin. Kredi kartı bilgisi gerekmez. <span className="text-white font-black">5 dakikada kurulum.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-stone-900 px-8 py-7 text-base font-black shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 hover:scale-105 transition-all duration-300 rounded-xl"
                  >
                    <span className="flex items-center gap-2">
                      Ücretsiz Hesap Aç
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white px-8 py-7 text-base font-black transition-all duration-200 rounded-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Demo Talep Et
                  </Button>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-stone-300 font-bold">Kredi kartı yok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-stone-300 font-bold">Türkçe destek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-stone-300 font-bold">5 dk kurulum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-stone-300 font-bold">İstediğin zaman iptal</span>
                  </div>
                </div>
              </div>

              {/* Right - Contact card / placeholder area */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Floating quote/stat card */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-amber-400 text-xs font-black uppercase tracking-widest">Bu Hafta</div>
                          <div className="text-white text-2xl font-black">+247 Yeni Restoran</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          { label: 'Kurulum süresi', value: '5 dakika' },
                          { label: 'Destek dili', value: 'Türkçe + İngilizce' },
                          { label: 'Veri güvenliği', value: 'ISO 27001' },
                          { label: 'Çalışma süresi', value: '%99.9 uptime' }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                            <span className="text-stone-400 text-sm font-semibold">{item.label}</span>
                            <span className="text-white font-black">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl px-4 py-3 shadow-xl rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="text-xs font-black text-stone-900 uppercase">Aktif</div>
                    <div className="text-2xl font-black text-stone-900">1.200+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
