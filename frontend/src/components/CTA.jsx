import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-500/25 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-red-500/15 via-transparent to-transparent blur-3xl" />

          <div className="relative px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/15 backdrop-blur-sm border border-amber-400/30 rounded-full mb-6">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <span className="text-[11px] font-black text-amber-300 uppercase tracking-[0.15em]">Şimdi Başlayın</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-black text-white leading-[1.05] tracking-tight mb-5" data-testid="cta-heading">
                  Restoranınızı bugün
                  <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    dijitalleştirin
                  </span>
                </h2>

                <p className="text-base lg:text-lg text-stone-300 leading-relaxed mb-8 max-w-xl">
                  14 gün ücretsiz deneyin. Kredi kartı bilgisi gerekmez. <span className="text-white font-bold">5 dakikada kurulum.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button
                    size="lg"
                    className="group h-14 px-7 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-stone-900 text-[15px] font-black shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                    data-testid="cta-primary"
                  >
                    <span className="flex items-center gap-2">
                      Ücretsiz Hesap Aç
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-7 border-2 border-white/20 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white text-[15px] font-black transition-all duration-200 rounded-xl"
                    data-testid="cta-secondary"
                  >
                    <Phone className="w-4 h-4 mr-2" strokeWidth={2.5} />
                    Bizi Arayın
                  </Button>
                </div>

                {/* Trust */}
                <div className="grid grid-cols-2 gap-3">
                  {['Kredi kartı yok', '5 dk kurulum', 'Türkçe destek', 'İptal serbest'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-xs lg:text-sm text-stone-300 font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal stat panel */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative">
                  <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-2xl">
                    <div className="text-[10px] font-black text-amber-400 uppercase tracking-[0.2em] mb-5">Bu hafta</div>

                    <div className="space-y-5">
                      <div>
                        <div className="text-5xl font-black text-white leading-none mb-1">+247</div>
                        <div className="text-sm text-stone-400 font-bold">Yeni restoran katıldı</div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="space-y-3">
                        {[
                          { label: 'Kurulum süresi', value: '5 dakika' },
                          { label: 'Destek dili', value: 'Türkçe' },
                          { label: 'Veri uyumluluğu', value: 'KVKK · ISO 27001' },
                          { label: 'Uptime', value: '%99.9' },
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-baseline gap-3">
                            <span className="text-xs text-stone-400 font-semibold">{item.label}</span>
                            <span className="text-sm text-white font-black text-right">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating chip */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl px-4 py-2.5 shadow-xl rotate-3">
                    <div className="text-[9px] font-black text-amber-900 uppercase tracking-wider">Aktif</div>
                    <div className="text-xl font-black text-stone-900 leading-none">1.200+</div>
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
