import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Receipt, LayoutGrid, Building2, Box, Users, ChefHat, BarChart3, Globe, Gift, Smartphone, CreditCard, ArrowRight, Check } from 'lucide-react';

const categories = [
  {
    id: 'operations',
    label: 'Operasyon',
    title: 'Saha operasyonu',
    headline: 'Sipariş aldığınız anda mutfak haberdar.',
    desc: 'Sıra, hata, gecikme yok. Operasyon ekibi tek ekran üzerinden hareket eder.',
    modules: [
      { icon: Receipt, title: 'Adisyon & POS', desc: 'Hızlı sipariş, bölünmüş hesap, çoklu ödeme.', tags: ['POS', 'Ödeme'] },
      { icon: LayoutGrid, title: 'Masa Yönetimi', desc: 'Görsel masa planı, rezervasyon, durum takibi.', tags: ['Plan', 'Rezervasyon'] },
      { icon: ChefHat, title: 'Mutfak Ekranı', desc: 'KDS ile sipariş akışı, hazırlık süresi optimizasyonu.', tags: ['KDS', 'Akış'] },
      { icon: Users, title: 'Garson Uygulaması', desc: 'iOS & Android mobil sipariş, masa transferi.', tags: ['Mobil', 'iOS/Android'] },
    ]
  },
  {
    id: 'customer',
    label: 'Müşteri',
    title: 'Müşteri deneyimi',
    headline: 'Müşteriniz QR okuttuğu an, markanızla karşılaşır.',
    desc: 'Temassız menü, çoklu dil ve modern müşteri arayüzleri ile akılda kalın.',
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
    title: 'Yönetim & büyüme',
    headline: 'Tüm şubeleriniz tek kontrol panelinde.',
    desc: 'Veriye dayalı kararlar, merkezi yönetim, ölçeklenebilir altyapı.',
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-stone-50/60 to-transparent" />
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Çözümler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-5" data-testid="modules-heading">
            Restoranınızı yöneten
            <span className="block text-amber-600">tek bir platform</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
            10+ modül üç ana kategoride: operasyon, müşteri deneyimi ve yönetim.
          </p>
        </motion.div>

        {/* Tab Switcher - scroll snap on mobile */}
        <div className="mb-8 lg:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
          <div className="inline-flex p-1.5 bg-stone-100 rounded-2xl gap-1" data-testid="modules-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                data-testid={`tab-${cat.id}`}
                className={`relative px-5 lg:px-7 py-3 rounded-xl font-black text-sm whitespace-nowrap transition-colors duration-300 active:scale-[0.97] ${
                  activeTab === cat.id ? 'text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-[#1f1612] rounded-xl shadow-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category content with motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16"
          >
            <div className="lg:col-span-4">
              <div className="text-[11px] font-black text-amber-700 uppercase tracking-[0.2em] mb-3">{current.title}</div>
              <h3 className="text-2xl lg:text-3xl font-black text-stone-900 leading-tight mb-3" data-testid="category-title">
                {current.headline}
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
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-white rounded-2xl p-5 lg:p-6 border border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Espresso stat strip - warm dark instead of pure black */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden p-8 lg:p-12"
          style={{ background: 'linear-gradient(135deg, #2a1d15 0%, #3a2618 50%, #2a1d15 100%)' }}
        >
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.18), transparent 50%), radial-gradient(circle at 80% 50%, rgba(234, 88, 12, 0.12), transparent 50%)'
          }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { stat: '5 dk', label: 'Ortalama kurulum süresi' },
              { stat: '%99.9', label: 'Uptime garantisi' },
              { stat: '7/24', label: 'Türkçe destek' },
              { stat: 'KVKK', label: 'Veri uyumluluğu' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-1.5"
              >
                <Check className="w-5 h-5 text-amber-400 flex-shrink-0" strokeWidth={3} />
                <div>
                  <div className="text-xl lg:text-2xl font-black text-amber-50">{item.stat}</div>
                  <div className="text-xs lg:text-sm text-amber-100/60 font-bold">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
