import React, { useState } from 'react';
import { QrCode, Receipt, LayoutGrid, Building2, Box, Users, ChefHat, BarChart3, Globe, Gift, Smartphone, CreditCard, ArrowRight, Check } from 'lucide-react';

const categories = [
  {
    id: 'operations',
    label: 'Operasyon',
    title: 'Saha operasyonlarınızı dijitalleştirin',
    desc: 'Sipariş alımından mutfak ekranına kadar tüm operasyonel akış tek sistemde.',
    modules: [
      { icon: Receipt, title: 'Adisyon & POS', desc: 'Hızlı sipariş, bölünmüş hesap, çoklu ödeme.', tags: ['POS', 'Ödeme'] },
      { icon: LayoutGrid, title: 'Masa Yönetimi', desc: 'Görsel masa planı, rezervasyon, durum takibi.', tags: ['Plan', 'Rezervasyon'] },
      { icon: ChefHat, title: 'Mutfak Ekranı', desc: 'KDS ile sipariş akışı ve hazırlık süresi optimizasyonu.', tags: ['KDS', 'Akış'] },
      { icon: Users, title: 'Garson Uygulaması', desc: 'iOS & Android mobil sipariş ve masa transferi.', tags: ['Mobil', 'iOS/Android'] },
    ]
  },
  {
    id: 'customer',
    label: 'Müşteri',
    title: 'Müşteri deneyimini yeniden tanımlayın',
    desc: 'Temassız menü, çoklu dil ve modern müşteri arayüzleri.',
    modules: [
      { icon: QrCode, title: 'QR Menü', desc: 'Temassız dijital menü, anlık güncelleme.', tags: ['QR', 'Web'] },
      { icon: Box, title: '3D Vitrin', desc: '3D ürün gösterimi ve detaylı içerik.', tags: ['3D', 'Görsel'] },
      { icon: Globe, title: 'Çoklu Dil', desc: 'Sınırsız dil desteği, uluslararası menü.', tags: ['i18n', 'Çeviri'] },
      { icon: Gift, title: 'Kampanya & Sadakat', desc: 'Promosyon, indirim ve sadakat sistemi.', tags: ['Kampanya', 'CRM'] },
    ]
  },
  {
    id: 'management',
    label: 'Yönetim',
    title: 'Veriye dayalı kararlar alın',
    desc: 'Çoklu şube yönetimi, detaylı raporlar ve ekip kontrolü.',
    modules: [
      { icon: Building2, title: 'Çoklu Şube', desc: 'Merkezi yönetim, şubeler arası transfer.', tags: ['Zincir', 'Merkez'] },
      { icon: BarChart3, title: 'Raporlama', desc: 'Satış, ürün ve personel analitiği.', tags: ['Analitik', 'BI'] },
      { icon: CreditCard, title: 'Finans & Kasa', desc: 'Günsonu, gider takibi, mutabakat.', tags: ['Finans', 'Kasa'] },
      { icon: Smartphone, title: 'Mobil Panel', desc: 'Yöneticiler için iOS & Android paneli.', tags: ['Sahibim', 'Mobil'] },
    ]
  }
];

export const Modules = () => {
  const [activeTab, setActiveTab] = useState('operations');
  const current = categories.find(c => c.id === activeTab);

  return (
    <section id="features" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-stone-50/60 to-transparent" />
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Çözümler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-5" data-testid="modules-heading">
            Restoranınızı yöneten
            <span className="block text-amber-600">tek bir platform</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
            10+ modül üç ana kategoride: operasyon, müşteri deneyimi ve yönetim. İhtiyacınız olanı seçin.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mb-8 lg:mb-12">
          <div className="inline-flex p-1.5 bg-stone-100 rounded-2xl gap-1 w-full sm:w-auto overflow-x-auto" data-testid="modules-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                data-testid={`tab-${cat.id}`}
                className={`relative px-5 lg:px-7 py-3 rounded-xl font-black text-sm whitespace-nowrap transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-stone-900 text-white shadow-lg'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category title + grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <h3 className="text-2xl lg:text-3xl font-black text-stone-900 leading-tight mb-3" data-testid="category-title">
              {current.title}
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">{current.desc}</p>
            <a href="#" className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-black text-sm group">
              Detaylı incele
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {current.modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-5 lg:p-6 border border-stone-200 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  data-testid={`module-card-${idx}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-11 h-11 bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-500 group-hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5 text-amber-700 group-hover:text-white transition-colors" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base lg:text-lg font-black text-stone-900 mb-1 leading-tight">{mod.title}</h4>
                      <p className="text-sm text-stone-600 leading-relaxed mb-3">{mod.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-black px-2 py-0.5 bg-stone-100 text-stone-700 rounded-full uppercase tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom feature highlight strip */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 lg:p-12">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15), transparent 50%), radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.1), transparent 50%)'
          }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative grid lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { stat: '5 dk', label: 'Ortalama kurulum süresi' },
              { stat: '%99.9', label: 'Uptime garantisi' },
              { stat: '7/24', label: 'Türkçe destek' },
              { stat: 'KVKK', label: 'Veri uyumluluğu' },
            ].map((item, i) => (
              <div key={i} className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-1.5">
                <Check className="w-5 h-5 text-amber-400 flex-shrink-0" strokeWidth={3} />
                <div>
                  <div className="text-xl lg:text-2xl font-black text-white">{item.stat}</div>
                  <div className="text-xs lg:text-sm text-stone-400 font-bold">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
