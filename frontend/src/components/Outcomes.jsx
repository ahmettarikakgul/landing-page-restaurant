import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, MapPin, TrendingUp, ShoppingBag, Globe, Clock } from 'lucide-react';

export const Outcomes = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">İşletme Sonuçları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-5">
            Özellik değil,
            <span className="block text-amber-600">işletme sonucu satıyoruz.</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
            RestoraX'in her modülü gerçek bir iş hedefine hizmet eder: daha çok ciro, daha hızlı servis, daha güçlü marka.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* CARD 1 - Google visibility */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.99 }}
            className="lg:col-span-7 relative bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-3xl p-7 lg:p-10 border border-stone-200 overflow-hidden"
          >
            <div className="relative">
              <div className="text-[10px] font-black text-amber-700 uppercase tracking-[0.2em] mb-3">Marka Görünürlüğü</div>
              <h3 className="text-2xl lg:text-3xl font-black text-stone-900 leading-tight mb-3 max-w-md">
                Markanız Google'da görünür.
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6 max-w-md">
                Restoranınızın dijital kimliği, arama sonuçlarında ön plana çıkar. Müşteri sizi arar, sizi bulur.
              </p>

              {/* Editorial atmospheric composition - no fake UI */}
              <div className="relative mt-2 max-w-lg">
                <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
                  {/* Browser bar - kept minimal as it's frame, not fake UI */}
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-stone-50 border-b border-stone-200">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-stone-300" />
                      <div className="w-2 h-2 rounded-full bg-stone-300" />
                      <div className="w-2 h-2 rounded-full bg-stone-300" />
                    </div>
                    <div className="flex-1 mx-2 bg-white rounded px-2 py-1 text-[9px] font-mono text-stone-400 border border-stone-200 inline-flex items-center gap-1">
                      <Search className="w-2.5 h-2.5" />
                      google.com
                    </div>
                  </div>
                  {/* Brand showcase - real, intentional */}
                  <div className="p-6 bg-gradient-to-br from-[#fdf9f3] via-white to-[#fbf3e7]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl font-black shadow-md">B</div>
                      <div>
                        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">restoraniniz.com</div>
                        <div className="text-base font-black text-[#1c1917]">Burger Palace · Maslak</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                        ))}
                        <span className="ml-1 font-black text-[#1c1917]">4.9</span>
                      </div>
                      <span className="text-stone-400">·</span>
                      <span className="text-stone-600 font-semibold">842 yorum</span>
                      <span className="text-stone-400">·</span>
                      <span className="text-green-700 font-bold">Açık</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 - Online orders */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.99 }}
            className="lg:col-span-5 relative rounded-3xl p-7 lg:p-10 overflow-hidden border border-amber-200/60"
            style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)' }}
          >
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.6), transparent 50%)'
            }} />
            <div className="relative">
              <div className="text-[10px] font-black text-amber-900 uppercase tracking-[0.2em] mb-3">Online Sipariş</div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#1c1917] leading-tight mb-3">
                Telefon yerine link.
              </h3>
              <p className="text-stone-700 leading-relaxed mb-8 font-medium">
                Yemeksepeti, Getir, Trendyol entegrasyonu. Tüm online siparişler tek panelde.
              </p>

              <div className="space-y-2.5">
                {['Yemeksepeti', 'Getir Yemek', 'Trendyol Yemek', 'Online Menü'].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between bg-white/90 backdrop-blur-sm border border-white rounded-xl px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1c1917] flex items-center justify-center shadow-sm">
                        <ShoppingBag className="w-4 h-4 text-amber-400" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-black text-[#1c1917]">{src}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                      </div>
                      <span className="text-[10px] font-black text-green-700 uppercase tracking-wider">Aktif</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 3 - Speed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.99 }}
            className="lg:col-span-4 relative bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-3xl p-7 lg:p-8 border border-amber-200/60 overflow-hidden"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-5">
                <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-5xl lg:text-6xl font-black text-stone-900 leading-none mb-2 tracking-tight">%40</div>
              <div className="text-base font-black text-stone-900 mb-1.5">Daha hızlı servis</div>
              <p className="text-sm text-stone-600 leading-relaxed">Sipariş alımdan mutfak çıkışına kadar geçen ortalama süre.</p>
            </div>
          </motion.div>

          {/* CARD 4 - Multi-language */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.99 }}
            className="lg:col-span-4 relative bg-white rounded-3xl p-7 lg:p-8 border border-stone-200 overflow-hidden"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-amber-400" strokeWidth={2.5} />
              </div>
              <div className="text-base font-black text-stone-900 mb-1.5">Uluslararası misafirler</div>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">Menünüzü 12+ dilde sunun. Turist hedef kitlenize kolayca ulaşın.</p>
              <div className="flex flex-wrap gap-1.5">
                {['TR', 'EN', 'DE', 'RU', 'AR', 'FR', '+7'].map((l, i) => (
                  <span key={i} className="text-[10px] font-black px-2 py-1 bg-stone-100 text-stone-700 rounded-md">{l}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 5 - Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.99 }}
            className="lg:col-span-4 relative bg-white rounded-3xl p-7 lg:p-8 border border-stone-200 overflow-hidden"
          >
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-red-600" strokeWidth={2.5} />
                <span className="text-[10px] font-black text-stone-500 uppercase tracking-[0.15em]">Google Maps</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-stone-900">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <div className="text-base font-black text-stone-900 mb-1.5">Yüksek değerlendirmeler</div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Memnun müşteri = yüksek puan. RestoraX kullanan restoranlar ortalama <span className="text-stone-900 font-black">+0.4 puan</span> artış görüyor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
