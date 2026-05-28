import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Play, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-12 lg:pb-24 overflow-hidden">
      {/* Layered warm background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-white" />
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-gradient-radial from-amber-200/40 via-amber-100/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-gradient-radial from-orange-200/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #44403c 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Copy */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-7">
            {/* Trust pill with avatars */}
            <div className="inline-flex items-center gap-3 pl-1.5 pr-4 py-1.5 bg-white border border-stone-200 rounded-full shadow-sm" data-testid="hero-trust-pill">
              <div className="flex -space-x-2">
                {['bg-amber-500', 'bg-orange-500', 'bg-red-500', 'bg-stone-700'].map((c, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-white ${c}`}
                  >
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
                <span className="text-xs font-black text-stone-900">4.9</span>
                <span className="text-xs font-bold text-stone-500 hidden sm:inline">· 1.200+ restoran</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-[40px] sm:text-5xl lg:text-[64px] xl:text-7xl font-black text-stone-900 leading-[1.02] tracking-[-0.02em]" data-testid="hero-heading">
                Restoranınızın
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    işletim sistemi
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[10px] bg-amber-200/60 -z-0 rounded-sm" />
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl font-medium">
                QR menüden mutfak ekranına, masa yönetiminden çoklu şubeye. Tüm restoran operasyonlarınız <span className="text-stone-900 font-bold">tek platformda</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                size="lg"
                className="group h-14 px-7 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[15px] font-black shadow-xl shadow-red-600/40 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 hover:-translate-y-0.5 rounded-xl"
                data-testid="hero-primary-cta"
              >
                <span className="flex items-center gap-2">
                  Ücretsiz Hesap Aç
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group h-14 px-7 border-2 border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 text-[15px] font-black bg-white transition-all duration-200 rounded-xl"
                data-testid="hero-secondary-cta"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                2 dk Demo İzle
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
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
            </div>
          </div>

          {/* RIGHT: Minimal premium product placeholder */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-[560px] mx-auto lg:max-w-none">
              {/* Ambient warm glow */}
              <div className="absolute -inset-12 bg-gradient-to-br from-amber-300/30 via-orange-300/20 to-red-300/20 rounded-[3rem] blur-3xl -z-10" />

              {/* Main browser frame - MINIMAL PLACEHOLDER */}
              <div className="relative bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] border border-stone-200 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white rounded-md px-3 py-1 text-[10px] font-mono text-stone-400 border border-stone-200 inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      app.restorax.com
                    </div>
                  </div>
                </div>

                {/* Minimal placeholder area - just soft gradient + light grid */}
                <div className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 aspect-[4/3]">
                  {/* subtle structural lines */}
                  <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(120,113,108,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,113,108,0.06) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                  {/* center diagonal soft light */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-amber-100/20" />
                  {/* tiny corner hint label */}
                  <div className="absolute top-4 left-4 text-[10px] font-black text-stone-400/70 uppercase tracking-[0.2em]">
                    Dashboard
                  </div>
                </div>
              </div>

              {/* Floating phone - MINIMAL */}
              <div className="absolute -bottom-6 -left-4 sm:-left-12 w-[130px] sm:w-[160px] z-10 rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-500">
                <div className="bg-stone-900 rounded-[2rem] p-1.5 shadow-2xl border-[3px] border-stone-800">
                  <div className="relative bg-gradient-to-b from-amber-50 via-white to-stone-50 rounded-[1.6rem] aspect-[9/19] overflow-hidden">
                    {/* notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-stone-900 rounded-full z-10" />
                    {/* Just a soft gradient placeholder, with a tiny brand mark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[9px] font-black text-stone-300 uppercase tracking-[0.25em] rotate-0">App</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating live notification - REAL UX content, not fake UI */}
              <div className="absolute -top-3 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 pr-4 max-w-[190px] z-10">
                <div className="flex items-start gap-2.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow">
                      <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black text-stone-500 uppercase tracking-wider">Canlı</div>
                    <div className="text-sm font-black text-stone-900 leading-tight">+47 sipariş</div>
                    <div className="text-[10px] text-stone-500 font-semibold">son 1 saatte</div>
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
