import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(60,30,15,0.4)]"
        >
          {/* Warm espresso background */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #1f1612 0%, #2a1d15 40%, #3a2618 100%)'
          }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-500/25 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-red-500/15 via-transparent to-transparent blur-3xl" />

          <div className="relative px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/15 backdrop-blur-sm border border-amber-400/30 rounded-full mb-6"
                >
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <span className="text-[11px] font-black text-amber-300 uppercase tracking-[0.15em]">Şimdi Başlayın</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-[56px] font-black text-amber-50 leading-[1.05] tracking-tight mb-5"
                  data-testid="cta-heading"
                >
                  Restoranınızı bugün
                  <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                    dijitalleştirin
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-base lg:text-lg text-amber-100/70 leading-relaxed mb-8 max-w-xl"
                >
                  14 gün ücretsiz deneyin. Kredi kartı bilgisi gerekmez. <span className="text-amber-50 font-bold">5 dakikada kurulum.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                >
                  <Button
                    size="lg"
                    className="group h-14 px-7 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-[#1f1612] text-[15px] font-black shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 rounded-xl"
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
                    className="h-14 px-7 border-2 border-amber-50/20 hover:border-amber-50 hover:bg-amber-50/10 backdrop-blur-sm text-amber-50 text-[15px] font-black active:scale-[0.98] transition-all duration-200 rounded-xl"
                    data-testid="cta-secondary"
                  >
                    <Phone className="w-4 h-4 mr-2" strokeWidth={2.5} />
                    Bizi Arayın
                  </Button>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  {['Kredi kartı yok', '5 dk kurulum', 'Türkçe destek', 'İptal serbest'].map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-xs lg:text-sm text-amber-100/80 font-bold">{t}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="bg-white/[0.05] backdrop-blur-xl border border-amber-50/10 rounded-3xl p-7 shadow-2xl">
                    <div className="text-[10px] font-black text-amber-400 uppercase tracking-[0.2em] mb-5">Bu hafta</div>

                    <div className="space-y-5">
                      <div>
                        <div className="text-5xl font-black text-amber-50 leading-none mb-1">+247</div>
                        <div className="text-sm text-amber-100/60 font-bold">Yeni restoran katıldı</div>
                      </div>

                      <div className="h-px bg-amber-50/10" />

                      <div className="space-y-3">
                        {[
                          { label: 'Kurulum süresi', value: '5 dakika' },
                          { label: 'Destek dili', value: 'Türkçe' },
                          { label: 'Veri uyumluluğu', value: 'KVKK · ISO 27001' },
                          { label: 'Uptime', value: '%99.9' },
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-baseline gap-3">
                            <span className="text-xs text-amber-100/50 font-semibold">{item.label}</span>
                            <span className="text-sm text-amber-50 font-black text-right">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl px-4 py-2.5 shadow-xl"
                  >
                    <div className="text-[9px] font-black text-amber-900 uppercase tracking-wider">Aktif</div>
                    <div className="text-xl font-black text-[#1f1612] leading-none">1.200+</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
