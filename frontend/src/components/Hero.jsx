import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-stone-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6 lg:mb-8">
            <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-teal-900">Restoran yönetiminde yeni nesil</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-900 mb-6 lg:mb-8 leading-tight">
            Restoranınızı
            <span className="block text-teal-600 mt-2">Dijitalleştirin</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            QR menüden mutfak ekranına, masa yönetiminden raporlamaya kadar tüm operasyonlarınızı tek platformda yönetin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Ücretsiz Deneyin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-stone-300 hover:border-teal-600 hover:text-teal-600 px-8 py-6 text-lg font-semibold transition-all duration-200"
            >
              <Play className="mr-2 w-5 h-5" />
              Demo İzle
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">1.200+</div>
              <div className="text-sm lg:text-base text-stone-600 font-medium">Aktif Restoran</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">50K+</div>
              <div className="text-sm lg:text-base text-stone-600 font-medium">Günlük Sipariş</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">3.500+</div>
              <div className="text-sm lg:text-base text-stone-600 font-medium">Şube</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">%98</div>
              <div className="text-sm lg:text-base text-stone-600 font-medium">Memnuniyet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
