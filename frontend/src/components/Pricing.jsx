import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 lg:mb-6">
            İşletmenize Uygun
            <span className="block text-teal-600 mt-2">Fiyatlandırma</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
            Her ölçekte işletme için esnek ve şeffaf fiyatlandırma. Gizli maliyet yok.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {mockData.pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 lg:p-10 border-2 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-teal-600 border-teal-700 shadow-2xl scale-105 lg:scale-110'
                  : 'bg-white border-stone-200 hover:border-teal-300 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  En Popüler
                </div>
              )}
              <h3
                className={`text-2xl lg:text-3xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-stone-900'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-teal-100' : 'text-stone-600'
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-8">
                <span
                  className={`text-4xl lg:text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-lg ml-2 ${
                    plan.highlighted ? 'text-teal-100' : 'text-stone-600'
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <Button
                className={`w-full mb-8 py-6 font-semibold text-base ${
                  plan.highlighted
                    ? 'bg-white text-teal-600 hover:bg-teal-50'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {plan.price === 'Özel' ? 'İletişime Geç' : 'Başlayın'}
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-teal-600'
                      }`}
                    />
                    <span
                      className={`text-sm lg:text-base ${
                        plan.highlighted ? 'text-white' : 'text-stone-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
