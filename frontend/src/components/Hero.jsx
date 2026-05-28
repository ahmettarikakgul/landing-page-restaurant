import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Star, Play, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { AmbientStage, AmbientSilhouette } from './AmbientStage';

const ease = [0.22, 1, 0.36, 1];

export const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-12 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf3e7]/70 via-[#fdf9f3]/40 to-white" />
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-gradient-radial from-amber-200/40 via-amber-100/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-gradient-radial from-orange-200/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-3 pl-1.5 pr-4 py-1.5 bg-white border border-stone-200 rounded-full shadow-sm"
              data-testid="hero-trust-pill"
            >
              <div className="flex -space-x-2">
                {['bg-amber-500', 'bg-orange-500', 'bg-red-500', 'bg-[#3c352f]'].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-white ${c}`}>
                    {['M', 'A', 'C', 'E'][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-black text-[#26221e]">4.9</span>
                <span className="text-xs font-bold text-stone-500 hidden sm:inline">· 1.200+ restoran</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
              className="text-[40px] sm:text-5xl lg:text-[64px] xl:text-7xl font-black text-[#1c1917] leading-[1.02] tracking-[-0.02em]"
              data-testid="hero-heading"
            >
              Restoranınızın
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  işletim sistemi
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease }}
                  style={{ originX: 0 }}
                  className="absolute -bottom-1 left-0 right-0 h-[10px] bg-amber-200/60 -z-0 rounded-sm"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl font-medium"
            >
              Sipariş akışından mutfak operasyonuna, masa yönetiminden çoklu şubeye. Restoranınızın tüm operasyonel altyapısı <span className="text-[#1c1917] font-bold">tek sistemde</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Button
                size="lg"
                className="group h-14 px-7 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[15px] font-black shadow-xl shadow-red-600/40 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded-xl"
                data-testid="hero-primary-cta"
              >
                <span className="flex items-center gap-2">
                  Hemen Başlayın
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group h-14 px-7 border-2 border-stone-300 hover:border-[#1c1917] hover:bg-[#1c1917] hover:text-amber-50 text-[#1c1917] text-[15px] font-black bg-white transition-all duration-200 active:scale-[0.98] rounded-xl"
                data-testid="hero-secondary-cta"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                2 dk Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2"
            >
              <div className="flex items-center gap-2 text-stone-600">
                <ShieldCheck className="w-5 h-5 text-amber-600" strokeWidth={2.5} />
                <span className="text-sm font-bold">14 gün ücretsiz</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-2 text-stone-600">
                <Zap className="w-5 h-5 text-amber-600" strokeWidth={2.5} />
                <span className="text-sm font-bold">5 dk kurulum</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <div className="flex items-center gap-2 text-stone-600">
                <TrendingUp className="w-5 h-5 text-amber-600" strokeWidth={2.5} />
                <span className="text-sm font-bold">İptal serbest</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - abstract atmospheric composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="lg:col-span-6 relative"
          >
            <div className="relative max-w-[560px] mx-auto lg:max-w-none">
              <div className="absolute -inset-12 bg-gradient-to-br from-amber-300/30 via-orange-300/20 to-red-300/20 rounded-[3rem] blur-3xl -z-10" />

              {/* Main ambient stage */}
              <AmbientStage aspect="aspect-[4/3]" className="shadow-[0_30px_80px_-20px_rgba(80,40,20,0.25)] border border-amber-100">
                <AmbientSilhouette variant="grid" />
                <div className="absolute top-5 left-5 text-[10px] font-black text-stone-400/80 uppercase tracking-[0.25em]">
                  Kontrol Merkezi
                </div>
              </AmbientStage>

              {/* Phone-shaped ambient block */}
              <motion.div
                initial={{ rotate: -12, y: 30, opacity: 0 }}
                animate={{ rotate: -8, y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 80 }}
                whileHover={{ rotate: -4, transition: { duration: 0.4 } }}
                className="absolute -bottom-6 -left-4 sm:-left-12 w-[130px] sm:w-[160px] z-10"
              >
                <div className="bg-[#1c1917] rounded-[2rem] p-1.5 shadow-2xl border-[3px] border-[#26221e]">
                  <div className="relative rounded-[1.6rem] aspect-[9/19] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fdf9f3] via-[#fbf3e7] to-[#f5ead7]" />
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-[#1c1917] rounded-full z-10" />
                    {/* feed silhouette */}
                    <div className="absolute inset-0 pt-8 px-3 space-y-2">
                      {[0,1,2].map((i) => (
                        <div key={i} className="bg-white/70 border border-white rounded-lg h-10" />
                      ))}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-amber-100/40 to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* Live notification - real UX content */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-3 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 pr-4 max-w-[190px] z-10"
              >
                <div className="flex items-start gap-2.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow">
                      <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black text-stone-500 uppercase tracking-wider">Canlı</div>
                    <div className="text-sm font-black text-[#1c1917] leading-tight">+47 sipariş</div>
                    <div className="text-[10px] text-stone-500 font-semibold">son 1 saatte</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
