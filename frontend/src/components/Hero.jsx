import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, CheckCircle2, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0">
        {/* Base warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/40 to-yellow-50/60" />
        
        {/* Atmospheric lighting */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-radial from-amber-200/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-orange-100/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-100/20 via-transparent to-transparent blur-2xl" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse" />
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm font-black text-stone-900">1.200+ Restoran Aktif Kullanıyor</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-stone-900 leading-[1.05] tracking-tight">
                Restoranınızı
                <span className="block mt-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Dijital Güce
                </span>
                <span className="block mt-2">Dönüştürün</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-700 leading-relaxed font-semibold max-w-xl">
                Sipariş yönetiminden mutfak operasyonlarına, <span className="text-amber-700">her şey tek platformda.</span> Türkiye'nin en güvenilir restoran teknolojisi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-10 py-7 text-lg font-black shadow-2xl shadow-red-600/50 hover:shadow-red-700/60 transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <span className="flex items-center gap-3">
                  Ücretsiz Başlayın
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-3 border-stone-900 hover:bg-stone-900 text-stone-900 hover:text-white px-10 py-7 text-lg font-black transition-all duration-200 rounded-xl"
              >
                Demo İsteyin
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-sm font-black text-stone-900">Kredi Kartı Yok</div>
                  <div className="text-xs text-stone-600 font-semibold">14 gün ücretsiz</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-black text-stone-900">5 Dakika Kurulum</div>
                  <div className="text-xs text-stone-600 font-semibold">Hemen kullanın</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Device Mockup Placeholder */}
          <div className="relative hidden lg:block">
            {/* Floating device frame mockup */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-red-400/30 rounded-[2rem] blur-3xl scale-105" />
              
              {/* Main device container - iPad mockup */}
              <div className="relative bg-stone-900 rounded-[2.5rem] shadow-2xl p-3 border-[6px] border-stone-800">
                {/* Screen area placeholder */}
                <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-[1.75rem] aspect-[4/3] p-8 overflow-hidden relative">
                  {/* Dashboard placeholder grid */}
                  <div className="space-y-4">
                    {/* Header bar */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="w-32 h-3 bg-stone-300 rounded" />
                        <div className="w-48 h-8 bg-stone-400 rounded" />
                      </div>
                      <div className="w-16 h-16 bg-amber-500/30 rounded-2xl" />
                    </div>
                    {/* Chart bars placeholder */}
                    <div className="space-y-3 mt-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-5 bg-amber-400/40 rounded-lg" style={{width: '100%'}} />
                        <div className="w-12 h-4 bg-stone-300 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-5 bg-amber-400/30 rounded-lg" style={{width: '75%'}} />
                        <div className="w-12 h-4 bg-stone-300 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-5 bg-amber-400/20 rounded-lg" style={{width: '60%'}} />
                        <div className="w-12 h-4 bg-stone-300 rounded" />
                      </div>
                    </div>
                    {/* Stats grid placeholder */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="space-y-2">
                        <div className="w-16 h-3 bg-stone-300 rounded" />
                        <div className="w-20 h-6 bg-amber-500/30 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-16 h-3 bg-stone-300 rounded" />
                        <div className="w-20 h-6 bg-amber-500/30 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-16 h-3 bg-stone-300 rounded" />
                        <div className="w-20 h-6 bg-amber-500/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mobile mockup */}
              <div className="absolute -bottom-8 -left-12 w-40 bg-stone-900 rounded-[2rem] shadow-2xl p-2 border-4 border-stone-800 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-[1.5rem] aspect-[9/16] p-4">
                  <div className="space-y-3">
                    <div className="w-full h-2 bg-stone-300 rounded-full" />
                    <div className="w-3/4 h-4 bg-amber-400/30 rounded" />
                    <div className="space-y-2 mt-4">
                      <div className="w-full h-12 bg-stone-300 rounded-lg" />
                      <div className="w-full h-12 bg-stone-300 rounded-lg" />
                      <div className="w-full h-12 bg-stone-300 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-xs font-bold text-stone-600">Canlı Sipariş</div>
                    <div className="text-3xl font-black text-stone-900">+47</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 lg:mt-28">
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-amber-100 p-10 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-transparent to-orange-50/60 rounded-3xl" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text mb-2 lg:mb-3">1.200+</div>
                <div className="text-xs sm:text-sm lg:text-base text-stone-700 font-bold">Aktif Restoran</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text mb-2 lg:mb-3">50K+</div>
                <div className="text-xs sm:text-sm lg:text-base text-stone-700 font-bold">Günlük Sipariş</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text mb-2 lg:mb-3">3.500+</div>
                <div className="text-xs sm:text-sm lg:text-base text-stone-700 font-bold">Şube Yönetimi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text mb-2 lg:mb-3">%98</div>
                <div className="text-xs sm:text-sm lg:text-base text-stone-700 font-bold">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
