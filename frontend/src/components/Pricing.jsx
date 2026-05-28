import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    id: 'starter',
    name: 'Başlangıç',
    desc: 'Tek şubeli işletmeler için',
    monthly: 1499,
    yearly: 1199,
    highlighted: false,
    cta: 'Ücretsiz Başla',
    features: [
      'QR Menü Sistemi',
      'Adisyon & Masa Yönetimi',
      'Temel raporlama',
      '1 şube · 5 kullanıcı',
      'E-posta destek',
    ],
  },
  {
    id: 'pro',
    name: 'Profesyonel',
    desc: 'Büyüyen restoranlar için',
    monthly: 2999,
    yearly: 2399,
    highlighted: true,
    badge: 'En çok tercih edilen',
    cta: 'Ücretsiz Başla',
    features: [
      'Başlangıç içeriğinin tamamı',
      '3D Vitrin & Çoklu dil',
      'Mutfak ekranı (KDS)',
      '3 şubeye kadar · 20 kullanıcı',
      'Gelişmiş raporlama',
      'Öncelikli destek',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'Zincir & kurumsal markalar',
    monthly: null,
    yearly: null,
    highlighted: false,
    cta: 'İletişime Geç',
    features: [
      'Profesyonel içeriğinin tamamı',
      'Sınırsız şube & kullanıcı',
      'API entegrasyonu',
      'Özel geliştirme',
      'Hesap yöneticisi',
      '7/24 telefon desteği',
    ],
  },
];

const formatPrice = (v) => v ? `₺${v.toLocaleString('tr-TR')}` : null;

export const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Fiyatlandırma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-4" data-testid="pricing-heading">
            Şeffaf,
            <span className="text-amber-600"> esnek fiyatlandırma</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
            Gizli maliyet yok. İstediğin zaman iptal edebilirsin.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-1 p-1.5 bg-white rounded-full border border-stone-200 shadow-sm" data-testid="billing-toggle">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2.5 rounded-full text-sm font-black transition-all ${
                !yearly ? 'bg-[#1f1612] text-amber-50 shadow' : 'text-stone-600 hover:text-stone-900'
              }`}
              data-testid="billing-monthly"
            >
              Aylık
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2.5 rounded-full text-sm font-black transition-all flex items-center gap-2 ${
                yearly ? 'bg-[#1f1612] text-amber-50 shadow' : 'text-stone-600 hover:text-stone-900'
              }`}
              data-testid="billing-yearly"
            >
              Yıllık
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                yearly ? 'bg-amber-400 text-stone-900' : 'bg-amber-100 text-amber-800'
              }`}>%20 İNDİRİM</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <div
                key={plan.id}
                data-testid={`pricing-${plan.id}`}
                className={`relative rounded-3xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'lg:scale-[1.03] lg:-mt-2 z-10'
                    : ''
                }`}
              >
                <div className={`relative h-full rounded-3xl p-7 lg:p-8 border-2 transition-all duration-300 overflow-hidden flex flex-col ${
                  plan.highlighted
                    ? 'border-[#3a2618] shadow-2xl'
                    : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-xl'
                }`}
                style={plan.highlighted ? { background: 'linear-gradient(135deg, #2a1d15 0%, #3a2618 50%, #2a1d15 100%)' } : {}}
                >
                  {plan.highlighted && (
                    <>
                      <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: 'radial-gradient(circle at 30% 0%, rgba(251, 191, 36, 0.2), transparent 50%)'
                      }} />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
                    </>
                  )}

                  <div className="relative">
                    {/* Badge */}
                    {plan.highlighted && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-stone-900 text-[10px] font-black rounded-full mb-5 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" strokeWidth={3} />
                        {plan.badge}
                      </div>
                    )}

                    <h3 className={`text-2xl font-black mb-1 ${plan.highlighted ? 'text-white' : 'text-stone-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm font-medium mb-6 ${plan.highlighted ? 'text-stone-400' : 'text-stone-600'}`}>
                      {plan.desc}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-stone-200/30 min-h-[88px]">
                      {price ? (
                        <>
                          <div className="flex items-baseline gap-1.5">
                            <span className={`text-5xl font-black tracking-tight ${plan.highlighted ? 'text-amber-400' : 'text-stone-900'}`}>
                              {formatPrice(price)}
                            </span>
                            <span className={`text-sm font-bold ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>
                              /ay
                            </span>
                          </div>
                          {yearly && (
                            <div className={`text-xs font-bold mt-1.5 ${plan.highlighted ? 'text-amber-400/80' : 'text-amber-700'}`}>
                              Yıllık ödendiğinde · {formatPrice(price * 12)} /yıl
                            </div>
                          )}
                        </>
                      ) : (
                        <div>
                          <div className={`text-3xl font-black ${plan.highlighted ? 'text-amber-400' : 'text-stone-900'}`}>
                            Özel teklif
                          </div>
                          <div className={`text-xs font-bold mt-2 ${plan.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>
                            İhtiyaçlarınıza göre fiyatlandırılır
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      className={`w-full h-12 mb-6 font-black text-sm shadow-lg transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-stone-900 shadow-amber-500/30'
                          : 'bg-[#1f1612] hover:bg-[#2a1d15] text-amber-50'
                      }`}
                      data-testid={`pricing-cta-${plan.id}`}
                    >
                      <span className="flex items-center gap-1.5">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" strokeWidth={3} />
                      </span>
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.highlighted ? 'bg-amber-400/20' : 'bg-amber-100'
                          }`}>
                            <Check className={`w-3 h-3 ${plan.highlighted ? 'text-amber-400' : 'text-amber-700'}`} strokeWidth={3.5} />
                          </div>
                          <span className={`text-sm leading-snug ${plan.highlighted ? 'text-stone-200' : 'text-stone-700'}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom assurance */}
        <div className="mt-10 lg:mt-12 text-center">
          <p className="text-sm text-stone-500 font-bold">
            Tüm planlarda <span className="text-stone-900">14 gün ücretsiz deneme</span> · Kredi kartı gerekmez · İstediğin zaman iptal
          </p>
        </div>
      </div>
    </section>
  );
};
