import React from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-teal-50/30" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-teal-100/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-amber-50/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/80 rounded-full mb-6">
            <span className="text-sm font-bold text-teal-900">FİYATLANDIRMA</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-tight">
            İşletmenize Uygun
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Fiyatlandırma
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed font-medium">
            Her ölçekte işletme için esnek ve şeffaf fiyatlandırma. <span className="text-teal-700 font-semibold">Gizli maliyet yok.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockData.pricingPlans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl transition-all duration-500 ${
                plan.highlighted
                  ? 'lg:scale-110 lg:-mt-4 lg:mb-4 z-10'
                  : 'lg:scale-100'
              }`}
            >
              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-8 lg:p-10 border-2 transition-all duration-500 overflow-hidden ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 border-teal-700 shadow-2xl shadow-teal-600/50'
                    : 'bg-white border-stone-200/80 hover:border-teal-300 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Background pattern for highlighted */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                )}
                
                {/* Background glow */}
                {!plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative">
                  {/* Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2 bg-white text-teal-700 text-sm font-black px-4 py-2 rounded-full shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        EN POPÜLER
                      </div>
                    </div>
                  )}

                  <div className={plan.highlighted ? 'pt-4' : ''}>
                    <h3
                      className={`text-3xl font-black mb-2 ${
                        plan.highlighted ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm mb-8 ${
                        plan.highlighted ? 'text-teal-100' : 'text-stone-600'
                      }`}
                    >
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-5xl lg:text-6xl font-black ${
                            plan.highlighted ? 'text-white' : 'text-stone-900'
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`text-lg ${
                            plan.highlighted ? 'text-teal-100' : 'text-stone-600'
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      className={`w-full mb-8 py-7 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                        plan.highlighted
                          ? 'bg-white text-teal-600 hover:bg-teal-50'
                          : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white'
                      }`}
                    >
                      {plan.price === 'Özel' ? 'İletişime Geç' : 'Başlayın'}
                    </Button>
                    
                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            plan.highlighted ? 'bg-white/20' : 'bg-teal-100'
                          }`}>
                            <Check
                              className={`w-4 h-4 ${
                                plan.highlighted ? 'text-white' : 'text-teal-600'
                              }`}
                            />
                          </div>
                          <span
                            className={`text-base ${
                              plan.highlighted ? 'text-white' : 'text-stone-700'
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
            </div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border border-stone-200">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-stone-900">14 gün ücretsiz deneme</div>
              <div className="text-sm text-stone-600">Kredi kartı bilgisi gerekmez</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
