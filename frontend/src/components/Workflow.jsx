import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Tablet, ArrowRight, QrCode, Receipt, ChefHat, CreditCard } from 'lucide-react';

const steps = [
  { num: '01', icon: QrCode, title: 'QR ile menüye erişim', desc: 'Müşteri masadaki QR kodu okutarak menüye saniyeler içinde ulaşır.' },
  { num: '02', icon: Receipt, title: 'Sipariş oluşturma', desc: 'Menüden seçim yapılır, sipariş doğrudan mutfak ekranına düşer.' },
  { num: '03', icon: ChefHat, title: 'Mutfak operasyonu', desc: 'Hazırlık başlar, garson bilgilendirilir, süre takip edilir.' },
  { num: '04', icon: CreditCard, title: 'Servis ve ödeme', desc: 'Sipariş servis edilir, ödeme masadan veya kasadan alınır.' },
];

export const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Akış</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-5">
            QR'dan ödemeye
            <span className="block text-amber-600">kesintisiz operasyon</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
            Müşteri QR'ı okuttuğu andan ödemeyi tamamladığı ana kadar her adım RestoraX üzerinden ilerler.
          </p>
        </motion.div>

        {/* DESKTOP: Interactive step picker */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Step navigator */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const active = activeStep === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full text-left relative flex gap-4 p-5 rounded-2xl border-2 transition-colors duration-300 ${
                    active
                      ? 'bg-white border-amber-400 shadow-xl'
                      : 'bg-transparent border-transparent hover:bg-white/50 hover:border-stone-200'
                  }`}
                  data-testid={`workflow-step-${idx + 1}`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30'
                        : 'bg-stone-200 text-stone-600'
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${
                        active ? 'text-amber-700' : 'text-stone-400'
                      }`}>Adım {step.num}</span>
                    </div>
                    <h3 className="text-base lg:text-lg font-black text-stone-900 mb-1 leading-tight">{step.title}</h3>
                    <AnimatePresence>
                      {active && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-stone-600 leading-relaxed overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Cinematic stage */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-300/20 via-orange-300/10 to-red-300/15 rounded-[3rem] blur-3xl -z-10" />

              <div className="relative bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(80,40,20,0.18)] border border-stone-200 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white rounded-md px-3 py-1 text-[10px] font-mono text-stone-400 border border-stone-200 inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      app.restorax.com/dashboard
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 aspect-[16/10]">
                  {/* cinematic light */}
                  <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
                  <div className="absolute inset-x-12 top-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent" />
                  <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(120,100,80,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,100,80,0.05) 1px, transparent 1px)',
                    backgroundSize: '56px 56px'
                  }} />

                  {/* Animated step indicator */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="text-[10px] font-black text-stone-400 uppercase tracking-[0.25em] mb-3">
                          Adım {steps[activeStep].num}
                        </div>
                        <div className="text-2xl font-black text-stone-700">{steps[activeStep].title}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-100/30 to-transparent" />
                </div>
              </div>

              {/* Device strip */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-stone-200 px-4 py-3 flex items-center gap-2.5">
                <Monitor className="w-4 h-4 text-stone-700" strokeWidth={2.5} />
                <Tablet className="w-4 h-4 text-stone-700" strokeWidth={2.5} />
                <Smartphone className="w-4 h-4 text-stone-700" strokeWidth={2.5} />
                <div className="h-4 w-px bg-stone-200" />
                <span className="text-xs font-black text-stone-900">Tüm cihazlar</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: Snap-scroll card stack with progress */}
        <div className="lg:hidden -mx-4">
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-2"
            data-testid="workflow-mobile-snap"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={idx}
                  whileTap={{ scale: 0.98 }}
                  className="snap-center flex-shrink-0 w-[85%] bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm"
                >
                  {/* Cinematic mini stage */}
                  <div className="relative bg-gradient-to-br from-amber-50 via-orange-50/40 to-stone-50 aspect-[5/3] overflow-hidden">
                    <div className="absolute inset-0 opacity-40" style={{
                      backgroundImage: 'linear-gradient(to right, rgba(120,100,80,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,100,80,0.06) 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }} />
                    <div className="absolute inset-x-6 top-0 h-1/3 bg-gradient-to-b from-white/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl shadow-amber-500/30">
                        <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="absolute top-3 left-4 text-[9px] font-black text-stone-400 uppercase tracking-[0.25em]">
                      Adım {step.num}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-black text-stone-900 mb-1.5 leading-tight">{step.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === 0 ? 'w-6 bg-stone-900' : 'w-1.5 bg-stone-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
