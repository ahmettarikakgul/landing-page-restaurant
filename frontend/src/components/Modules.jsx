import React from 'react';
import { QrCode, Receipt, LayoutGrid, Building2, Box, Users, ChefHat, BarChart3, ArrowUpRight, Smartphone, Globe, Gift } from 'lucide-react';

const smallModules = [
  { icon: LayoutGrid, title: 'Masa Yönetimi', desc: 'Görsel masa planı' },
  { icon: Building2, title: 'Çoklu Şube', desc: 'Merkezi kontrol' },
  { icon: Box, title: '3D Vitrin', desc: '3D ürün gösterimi' },
  { icon: Users, title: 'Garson Uygulaması', desc: 'Mobil sipariş' },
  { icon: BarChart3, title: 'Raporlama', desc: 'Detaylı analiz' },
  { icon: Globe, title: 'Çoklu Dil', desc: 'Uluslararası menü' },
  { icon: Gift, title: 'Kampanya', desc: 'Promosyon sistemi' },
  { icon: Smartphone, title: 'Mobil Uygulama', desc: 'iOS & Android' },
];

export const Modules = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden bg-stone-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-stone-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-amber-100/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-600 rounded-full" />
              <span className="text-xs font-black text-amber-900 uppercase tracking-widest">Özellikler</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-[1.05] tracking-tight">
              Tüm operasyonlarınız
              <span className="block text-amber-600">tek platformda</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 leading-relaxed font-medium">
              QR menüden mutfak ekranına, masa yönetiminden raporlamaya kadar 10+ modül ile restoranınızın her detayını yönetin.
            </p>
          </div>
          <a href="#" className="hidden lg:flex items-center gap-2 text-stone-900 font-black hover:text-amber-600 transition-colors group">
            <span className="text-base">Tüm özellikler</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Featured Section - QR Menu with Phone Mockup */}
        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 mb-5 lg:mb-6">
          {/* Large featured card */}
          <div className="lg:col-span-3 relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 lg:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-500 min-h-[400px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-amber-500/20 via-transparent to-transparent blur-3xl" />
            
            <div className="relative grid sm:grid-cols-2 gap-8 items-center h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full mb-6">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-widest">Öne Çıkan</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/30">
                  <QrCode className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">QR Menü Sistemi</h3>
                <p className="text-stone-300 text-base lg:text-lg mb-6 leading-relaxed">
                  Müşterileriniz QR okutarak menünüze anında erişir. Çoklu dil, kategoriler, alerji uyarıları.
                </p>
                <button className="inline-flex items-center gap-2 text-amber-400 font-black hover:gap-3 transition-all group">
                  Detaylı İncele <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Phone mockup placeholder */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-48 lg:w-56 bg-stone-700 rounded-[2.5rem] p-2 shadow-2xl border-[5px] border-stone-600 transform group-hover:rotate-3 transition-transform duration-500">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-stone-700 rounded-b-2xl z-10" />
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[2rem] aspect-[9/19] p-4 overflow-hidden">
                    <div className="pt-4 space-y-3">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <div className="w-16 h-2.5 bg-stone-400 rounded-full" />
                        <div className="w-6 h-6 bg-amber-500 rounded-lg" />
                      </div>
                      {/* QR area */}
                      <div className="bg-white rounded-2xl p-3 shadow-lg">
                        <div className="aspect-square bg-stone-900 rounded-xl flex items-center justify-center">
                          <QrCode className="w-14 h-14 text-white" />
                        </div>
                      </div>
                      {/* Menu items */}
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex justify-between items-center bg-white/80 rounded-lg p-2 backdrop-blur-sm">
                            <div className="w-16 h-2 bg-stone-300 rounded-full" />
                            <div className="w-10 h-2 bg-amber-500 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two stacked cards */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-5 lg:gap-6">
            {/* Adisyon */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-stone-200 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-amber-100/50 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30">
                  <Receipt className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-stone-900 mb-3">Adisyon Sistemi</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Hızlı sipariş giriş, bölünmüş hesap, anlık raporlama.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-black px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200">Hızlı POS</span>
                  <span className="text-xs font-black px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200">Hesap Bölme</span>
                </div>
              </div>
            </div>
            
            {/* Mutfak - Red accent */}
            <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-8 shadow-xl group overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-amber-400/20 via-transparent to-transparent blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 border border-white/30">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Mutfak Ekranı</h3>
                <p className="text-red-50 mb-4 leading-relaxed">
                  Siparişleri anlık görün, hazırlık sürelerini optimize edin.
                </p>
                <button className="inline-flex items-center gap-2 text-white font-black hover:gap-3 transition-all">
                  Keşfedin <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of smaller modules */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {smallModules.map((module, idx) => {
            const Icon = module.icon;
            const colors = ['amber', 'orange', 'amber', 'orange'];
            const color = colors[idx % 4];
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`w-12 h-12 ${color === 'amber' ? 'bg-gradient-to-br from-amber-400 to-amber-600' : 'bg-gradient-to-br from-orange-400 to-orange-600'} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base lg:text-lg font-black text-stone-900 mb-1 leading-tight">
                    {module.title}
                  </h3>
                  <p className="text-sm text-stone-600 font-medium">
                    {module.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
