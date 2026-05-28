import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-32 overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-teal-50/30" />
        
        {/* Radial lighting effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-teal-100/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-gradient-radial from-amber-50/60 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-teal-50/50 via-transparent to-transparent blur-2xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-50 to-teal-100/80 border border-teal-200/60 rounded-full backdrop-blur-sm shadow-lg shadow-teal-100/50">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-900">1.200+ restoran kullanıyor</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-stone-900 leading-[1.1] tracking-tight">
                Restoranınızı
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 bg-clip-text text-transparent">
                  Dijitalleştirin
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed max-w-2xl font-medium">
                QR menüden mutfak ekranına, masa yönetiminden raporlamaya. Tek platform, sonsuz verimlilik.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                className="group relative w-full sm:w-auto bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 hover:from-teal-700 hover:via-teal-800 hover:to-teal-900 text-white px-8 py-7 text-lg font-bold shadow-2xl shadow-teal-600/50 hover:shadow-teal-700/60 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ücretsiz Deneyin
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-stone-300 hover:border-teal-600 hover:bg-teal-50 text-stone-900 hover:text-teal-700 px-8 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                Demo İzle
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-stone-600">
                <Shield className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium">ISO 27001 Sertifikalı</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <Zap className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium">5 Dakikada Kurulum</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium">%40 Verimlilik Artışı</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Dashboard mockup */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-emerald-400/20 to-teal-600/30 rounded-3xl blur-3xl scale-105" />
              
              {/* Main dashboard card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-stone-200/50 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-stone-500">Bugünkü Sipariş</p>
                      <p className="text-4xl font-black text-stone-900 mt-1">1,247</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Chart bars */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-md" style={{width: '100%'}} />
                      <span className="text-sm font-bold text-stone-700">%100</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-4 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full shadow-md" style={{width: '75%'}} />
                      <span className="text-sm font-bold text-stone-700">%75</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-4 bg-gradient-to-r from-teal-300 to-teal-400 rounded-full shadow-md" style={{width: '60%'}} />
                      <span className="text-sm font-bold text-stone-700">%60</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Ortalama</p>
                      <p className="text-xl font-bold text-stone-900 mt-1">₺847</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Masa</p>
                      <p className="text-xl font-bold text-stone-900 mt-1">28/32</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Aktif</p>
                      <p className="text-xl font-bold text-teal-600 mt-1">%87</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl border border-stone-200 p-4 backdrop-blur-sm">
                <p className="text-xs text-stone-500 font-medium">Canlı Sipariş</p>
                <p className="text-2xl font-black text-teal-600 mt-1">+12</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-xl p-4">
                <p className="text-xs text-teal-100 font-medium">Mutfak</p>
                <p className="text-2xl font-black text-white mt-1">4 dk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-24">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-stone-200/60 p-8 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-amber-50/30 rounded-3xl" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-teal-600 to-teal-800 bg-clip-text text-transparent mb-2">1.200+</div>
                <div className="text-sm lg:text-base text-stone-600 font-semibold">Aktif Restoran</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-teal-600 to-teal-800 bg-clip-text text-transparent mb-2">50K+</div>
                <div className="text-sm lg:text-base text-stone-600 font-semibold">Günlük Sipariş</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-teal-600 to-teal-800 bg-clip-text text-transparent mb-2">3.500+</div>
                <div className="text-sm lg:text-base text-stone-600 font-semibold">Şube Yönetimi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-teal-600 to-teal-800 bg-clip-text text-transparent mb-2">%98</div>
                <div className="text-sm lg:text-base text-stone-600 font-semibold">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
