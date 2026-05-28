import React from 'react';
import { Monitor, Smartphone, Tablet, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Workflow = () => {
  const steps = [
    { num: '01', title: 'QR Kod Okutun', desc: 'Müşteri masadaki QR kodu okutur ve menüye saniyeler içinde ulaşır.' },
    { num: '02', title: 'Sipariş Verin', desc: 'Menüden seçim yapılır ve sipariş doğrudan mutfağa düşer.' },
    { num: '03', title: 'Mutfakta Hazırlanır', desc: 'Mutfak ekranı siparişi alır, hazırlık başlar, garson bilgilendirilir.' },
    { num: '04', title: 'Servis & Ödeme', desc: 'Sipariş servis edilir, müşteri masadan ya da kasadan ödeme yapar.' },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="text-xs font-black text-amber-900 uppercase tracking-widest">Nasıl Çalışır</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-[1.05] tracking-tight">
            4 adımda
            <span className="block text-amber-600">tam dijital dönüşüm</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed font-medium">
            QR kod okutmaktan ödeme almaya kadar tüm operasyon RestoraX üzerinden akıcı şekilde işler.
          </p>
        </div>

        {/* Browser mockup with steps */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex gap-5 p-6 bg-white border-2 border-stone-200 hover:border-amber-400 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Browser mockup */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-400/15 to-red-400/20 rounded-3xl blur-3xl scale-105" />
              
              {/* Browser frame */}
              <div className="relative bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-700">
                {/* Browser top bar */}
                <div className="bg-stone-800 px-4 py-3 flex items-center gap-2 border-b border-stone-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-amber-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-stone-700 rounded-md px-3 py-1.5 text-xs text-stone-400 font-mono">
                      app.restorax.com/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content placeholder */}
                <div className="bg-stone-100 aspect-[16/10] p-6">
                  {/* Sidebar */}
                  <div className="grid grid-cols-12 gap-4 h-full">
                    <div className="col-span-3 bg-white rounded-xl p-3 shadow-sm">
                      <div className="space-y-2">
                        <div className="w-full h-7 bg-amber-500 rounded-lg" />
                        <div className="w-full h-7 bg-stone-200 rounded-lg" />
                        <div className="w-full h-7 bg-stone-200 rounded-lg" />
                        <div className="w-full h-7 bg-stone-200 rounded-lg" />
                        <div className="w-full h-7 bg-stone-200 rounded-lg" />
                        <div className="w-full h-7 bg-stone-200 rounded-lg" />
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="col-span-9 space-y-3">
                      {/* Top stats */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-12 h-2 bg-stone-300 rounded mb-2" />
                          <div className="w-16 h-5 bg-amber-500 rounded" />
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-12 h-2 bg-stone-300 rounded mb-2" />
                          <div className="w-16 h-5 bg-orange-500 rounded" />
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-12 h-2 bg-stone-300 rounded mb-2" />
                          <div className="w-16 h-5 bg-red-500 rounded" />
                        </div>
                      </div>
                      {/* Chart area */}
                      <div className="bg-white rounded-xl p-4 shadow-sm flex-1 h-full">
                        <div className="flex justify-between items-end h-full gap-2">
                          {[60, 80, 45, 90, 70, 85, 95, 50, 75, 65].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-amber-500 to-orange-400 rounded-t"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating device icons */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-4 flex gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-amber-700" />
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Tablet className="w-5 h-5 text-orange-700" />
                </div>
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-red-700" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border-2 border-stone-200 p-4 max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-xs font-black text-stone-900">CANLI</span>
                </div>
                <p className="text-xs text-stone-600 font-semibold">Tüm cihazlardan eş zamanlı erişim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
