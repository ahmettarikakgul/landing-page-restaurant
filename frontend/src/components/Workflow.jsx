import React from 'react';
import { Monitor, Smartphone, Tablet, ArrowRight } from 'lucide-react';

const steps = [
  { num: '01', title: 'QR ile menüye erişim', desc: 'Müşteri masadaki QR kodu okutarak menüye saniyeler içinde ulaşır.' },
  { num: '02', title: 'Sipariş oluşturma', desc: 'Menüden seçim yapılır, sipariş doğrudan mutfak ekranına düşer.' },
  { num: '03', title: 'Mutfak operasyonu', desc: 'Hazırlık başlar, garson bilgilendirilir, süre takip edilir.' },
  { num: '04', title: 'Servis ve ödeme', desc: 'Sipariş servis edilir, ödeme masadan veya kasadan alınır.' },
];

export const Workflow = () => {
  return (
    <section id="workflow" className="relative py-20 lg:py-32 bg-stone-50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Nasıl Çalışır</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-5">
            4 adımda
            <span className="block text-amber-600">tam dijital dönüşüm</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
            QR kod okutmaktan ödeme almaya kadar tüm operasyon RestoraX üzerinden akıcı şekilde işler.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT: Steps */}
          <div className="lg:col-span-5 space-y-3 lg:space-y-4 order-2 lg:order-1">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative flex gap-4 p-5 lg:p-6 bg-white border border-stone-200 hover:border-amber-400 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                data-testid={`workflow-step-${idx + 1}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-stone-100 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-500 flex items-center justify-center transition-all duration-300">
                    <span className="text-stone-900 group-hover:text-white font-black text-base lg:text-lg transition-colors">{step.num}</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg lg:text-xl font-black text-stone-900 mb-1.5 leading-tight">{step.title}</h3>
                  <p className="text-sm lg:text-base text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Minimal device showcase */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 order-1 lg:order-2">
            <div className="relative">
              {/* Soft ambient glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-300/20 via-orange-300/10 to-red-300/15 rounded-[3rem] blur-3xl -z-10" />

              {/* Browser frame - minimal */}
              <div className="relative bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] border border-stone-200 overflow-hidden">
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

                {/* Minimal placeholder */}
                <div className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 aspect-[16/10]">
                  <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(120,113,108,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,113,108,0.06) 1px, transparent 1px)',
                    backgroundSize: '48px 48px'
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-amber-100/20" />
                  <div className="absolute top-5 left-5 text-[10px] font-black text-stone-400/70 uppercase tracking-[0.2em]">
                    Yönetim Paneli
                  </div>
                </div>
              </div>

              {/* Devices floating chip */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-stone-200 px-4 py-3 flex items-center gap-2.5">
                <Monitor className="w-4 h-4 text-stone-700" strokeWidth={2.5} />
                <Tablet className="w-4 h-4 text-stone-700" strokeWidth={2.5} />
                <Smartphone className="w-4 h-4 text-stone-700" strokeWidth={2.5} />
                <div className="h-4 w-px bg-stone-200" />
                <span className="text-xs font-black text-stone-900">Tüm cihazlar</span>
              </div>

              {/* Sync indicator chip */}
              <div className="absolute -bottom-5 left-5 lg:-left-5 bg-stone-900 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
                </div>
                <span className="text-xs font-black text-white">Eş zamanlı senkronizasyon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
