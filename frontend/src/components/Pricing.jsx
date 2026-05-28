import React from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-amber-50/30" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-orange-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="text-xs font-black text-amber-900 uppercase tracking-widest">Fiyatlandırma</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-[1.05] tracking-tight">
            Şeffaf, esnek
            <span className="block text-amber-600">fiyatlandırma</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed font-medium">
            Her ölçekte işletme için uygun paketler. <span className="text-stone-900 font-black">Gizli maliyet yok.</span> İstediğin zaman iptal edebilirsin.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {mockData.pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${
                plan.highlighted ? 'lg:scale-105 lg:-mt-4 lg:mb-4 z-10' : ''
              }`}
            >
              <div
                className={`relative h-full rounded-3xl p-8 lg:p-10 border-2 transition-all duration-300 overflow-hidden ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border-amber-500 shadow-2xl shadow-amber-500/20'
                    : 'bg-white border-stone-200 hover:border-amber-300 shadow-lg hover:shadow-2xl'
                }`}
              >
                {plan.highlighted && (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-amber-500/20 via-transparent to-transparent blur-3xl" />
                  </>
                )}

                <div className="relative">
                  {plan.highlighted && (
                    <div className="absolute -top-12 -right-2 lg:right-0 z-10">
                      <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 text-xs font-black px-4 py-2 rounded-full shadow-xl">
                        <Sparkles className="w-3.5 h-3.5" />
                        EN POPÜLER
                      </div>
                    </div>
                  )}

                  <h3
                    className={`text-2xl lg:text-3xl font-black mb-2 ${
                      plan.highlighted ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-8 font-semibold ${
                      plan.highlighted ? 'text-stone-300' : 'text-stone-600'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-8 pb-8 border-b border-stone-200/30">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span
                        className={`text-4xl sm:text-5xl lg:text-6xl font-black ${
                          plan.highlighted ? 'text-amber-400' : 'text-stone-900'
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-base font-semibold ${
                          plan.highlighted ? 'text-stone-400' : 'text-stone-500'
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <Button
                    className={`w-full mb-8 py-7 font-black text-base shadow-lg hover:shadow-xl transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-stone-900'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {plan.price === 'Özel' ? 'İletişime Geç' : 'Hemen Başla'}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted ? 'bg-amber-400' : 'bg-amber-100'
                        }`}>
                          <Check
                            className={`w-3 h-3 ${
                              plan.highlighted ? 'text-stone-900' : 'text-amber-700'
                            }`}
                            strokeWidth={3}
                          />
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            plan.highlighted ? 'text-stone-200' : 'text-stone-700'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border-2 border-amber-200">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-black text-stone-900">14 gün ücretsiz deneme</div>
              <div className="text-sm text-stone-600 font-semibold">Kredi kartı bilgisi gerekmez</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
