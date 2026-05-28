import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, ChevronDown, Plus } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    id: 'starter',
    name: 'Başlangıç',
    pitch: 'Tek şubeli işletmeler için',
    monthly: 1499,
    yearly: 1199,
    cta: 'Ücretsiz Başla',
    highlight: false,
    headline: 'Dijital dönüşüme ilk adım.',
    color: { primary: '#1c1917' },
    inside: {
      'Sipariş & Masa': ['Adisyon & POS', 'Masa Yönetimi', 'QR Menü'],
      'Müşteri': ['Temel menü düzenleme', 'Tek dil'],
      'Yönetim': ['1 şube · 5 kullanıcı', 'Temel raporlar', 'E-posta destek'],
    }
  },
  {
    id: 'pro',
    name: 'Profesyonel',
    pitch: 'Büyüyen restoranlar için',
    monthly: 2999,
    yearly: 2399,
    cta: 'Ücretsiz Başla',
    highlight: true,
    badge: 'En Popüler',
    headline: 'Operasyonun tamamı, tek panel.',
    color: { primary: '#26221e' },
    inside: {
      'Sipariş & Masa': ['Adisyon & POS', 'Masa Yönetimi', 'QR Menü', 'Mutfak Ekranı (KDS)', 'Garson Uygulaması'],
      'Müşteri': ['3D Vitrin', 'Çoklu dil (12+)', 'Kampanya & Sadakat'],
      'Yönetim': ['3 şubeye kadar · 20 kullanıcı', 'Gelişmiş raporlama', 'Öncelikli destek'],
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    pitch: 'Zincir & kurumsal markalar',
    monthly: null,
    yearly: null,
    cta: 'İletişime Geç',
    highlight: false,
    headline: 'Sınırsız ölçek, özel altyapı.',
    color: { primary: '#1c1917' },
    inside: {
      'Sipariş & Masa': ['Profesyonel paketin tamamı'],
      'Müşteri': ['Özel menü tasarımı', 'Branded mobil uygulama'],
      'Yönetim': ['Sınırsız şube & kullanıcı', 'API entegrasyonu', 'Özel geliştirme', 'Hesap yöneticisi', '7/24 telefon desteği'],
    }
  },
];

const addons = [
  { name: 'Online sipariş entegrasyonu', desc: 'Yemeksepeti · Getir · Trendyol', price: '₺499/ay' },
  { name: 'Branded mobil uygulama', desc: 'iOS & Android markalı uygulama', price: 'Özel teklif' },
  { name: 'Donanım paketi', desc: 'POS terminal · mutfak ekranı · yazıcı', price: 'Tek sefer' },
];

const formatPrice = (v) => (v ? `₺${v.toLocaleString('tr-TR')}` : null);

export const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const [activeMobileIdx, setActiveMobileIdx] = useState(1); // Pro as default
  const [expandedDesktop, setExpandedDesktop] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector('[data-plan-card]');
      if (!card) return;
      const width = card.offsetWidth + 16;
      const idx = Math.round(el.scrollLeft / width);
      setActiveMobileIdx(Math.min(idx, plans.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToPlan = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('[data-plan-card]');
    if (!card) return;
    el.scrollTo({ left: idx * (card.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-[#fdf9f3] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-100/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Fiyatlandırma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-[#1c1917] leading-[1.05] tracking-tight mb-4" data-testid="pricing-heading">
            Tek karar:
            <span className="text-amber-600"> hangi paket?</span>
          </h2>
          <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
            Restoranınızın boyutuna göre seçin. Detaylar paket içinde.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1 p-1.5 bg-white rounded-full border border-stone-200 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-black transition-colors active:scale-[0.97] ${
                !yearly ? 'text-amber-50' : 'text-stone-600'
              }`}
              data-testid="billing-monthly"
            >
              {!yearly && (
                <motion.div layoutId="billing-pill" className="absolute inset-0 bg-[#1c1917] rounded-full shadow" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="relative z-10">Aylık</span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-black transition-colors active:scale-[0.97] flex items-center gap-2 ${
                yearly ? 'text-amber-50' : 'text-stone-600'
              }`}
              data-testid="billing-yearly"
            >
              {yearly && (
                <motion.div layoutId="billing-pill" className="absolute inset-0 bg-[#1c1917] rounded-full shadow" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Yıllık
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${yearly ? 'bg-amber-400 text-[#1c1917]' : 'bg-amber-100 text-amber-800'}`}>%20 İNDİRİM</span>
              </span>
            </button>
          </div>
        </div>

        {/* DESKTOP: Comparison-style control center */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {plans.map((plan) => (
            <DesktopPlanCard
              key={plan.id}
              plan={plan}
              yearly={yearly}
              isExpanded={expandedDesktop === plan.id}
              onToggle={() => setExpandedDesktop(expandedDesktop === plan.id ? null : plan.id)}
            />
          ))}
        </div>

        {/* MOBILE: Swipeable card carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
            data-testid="mobile-pricing-swipe"
          >
            {plans.map((plan, idx) => (
              <MobilePlanCard
                key={plan.id}
                plan={plan}
                yearly={yearly}
                isActive={activeMobileIdx === idx}
              />
            ))}
          </div>

          {/* Mobile plan dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {plans.map((p, i) => (
              <button
                key={p.id}
                onClick={() => scrollToPlan(i)}
                className="group p-1.5 active:scale-90 transition-transform"
                aria-label={`Plan ${p.name}`}
              >
                <motion.div
                  animate={{
                    width: i === activeMobileIdx ? 28 : 8,
                    backgroundColor: i === activeMobileIdx ? '#1c1917' : '#d6d3d1',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Contextual add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mt-14 lg:mt-20"
        >
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-[10px] font-black text-amber-700 uppercase tracking-[0.2em] mb-2">Ek Modüller</div>
            <h3 className="text-2xl lg:text-3xl font-black text-[#1c1917]">Paketinize ekleyebilirsiniz</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 lg:gap-4 max-w-5xl mx-auto">
            {addons.map((addon, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="text-left bg-white border-2 border-stone-200 hover:border-amber-400 rounded-2xl p-5 transition-colors group"
                data-testid={`addon-${i}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 group-hover:bg-amber-500 flex items-center justify-center transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4 text-amber-700 group-hover:text-white transition-colors" strokeWidth={3} />
                  </div>
                  <span className="text-[10px] font-black text-stone-900 px-2 py-1 bg-stone-100 rounded-full uppercase tracking-wider">{addon.price}</span>
                </div>
                <div className="font-black text-[#1c1917] text-sm mb-1 leading-tight">{addon.name}</div>
                <div className="text-xs text-stone-600 font-medium leading-relaxed">{addon.desc}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 lg:mt-12 text-center">
          <p className="text-sm text-stone-500 font-bold">
            Tüm planlarda <span className="text-[#1c1917]">14 gün ücretsiz deneme</span> · Kredi kartı gerekmez · İstediğin zaman iptal
          </p>
        </div>
      </div>
    </section>
  );
};

/* ============ DESKTOP CARD - control-center comparison ============ */
const DesktopPlanCard = ({ plan, yearly, isExpanded, onToggle }) => {
  const price = yearly ? plan.yearly : plan.monthly;
  const isPro = plan.highlight;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative rounded-3xl p-7 lg:p-8 transition-all duration-300 flex flex-col ${
        isPro ? 'shadow-2xl' : 'bg-white border-2 border-stone-200 hover:border-stone-300 hover:shadow-xl'
      }`}
      style={isPro ? { background: 'linear-gradient(150deg, #1c1917 0%, #26221e 50%, #3c352f 100%)', borderColor: '#3c352f' } : {}}
      data-testid={`pricing-${plan.id}`}
    >
      {isPro && (
        <>
          <div className="absolute inset-0 opacity-30 rounded-3xl" style={{
            backgroundImage: 'radial-gradient(circle at 30% 0%, rgba(251, 191, 36, 0.2), transparent 50%)'
          }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl" />
        </>
      )}

      <div className="relative">
        {isPro && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-[#1c1917] text-[10px] font-black rounded-full mb-5 uppercase tracking-wider">
            <Sparkles className="w-3 h-3" strokeWidth={3} />
            {plan.badge}
          </div>
        )}

        <h3 className={`text-2xl font-black mb-1 ${isPro ? 'text-amber-50' : 'text-[#1c1917]'}`}>{plan.name}</h3>
        <p className={`text-sm font-medium mb-1 ${isPro ? 'text-amber-100/60' : 'text-stone-600'}`}>{plan.pitch}</p>
        <p className={`text-base font-bold mb-6 leading-snug ${isPro ? 'text-amber-200' : 'text-amber-700'}`}>{plan.headline}</p>

        <div className="mb-6 pb-6 border-b min-h-[88px]" style={{ borderColor: isPro ? 'rgba(245,230,211,0.1)' : 'rgba(120,113,108,0.15)' }}>
          {price ? (
            <>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className={`text-5xl font-black tracking-tight ${isPro ? 'text-amber-400' : 'text-[#1c1917]'}`}>{formatPrice(price)}</span>
                <span className={`text-sm font-bold ${isPro ? 'text-amber-100/50' : 'text-stone-500'}`}>/ay</span>
              </div>
              {yearly && (
                <div className={`text-xs font-bold mt-1.5 ${isPro ? 'text-amber-400/80' : 'text-amber-700'}`}>Yıllık {formatPrice(price * 12)}</div>
              )}
            </>
          ) : (
            <>
              <div className={`text-3xl font-black ${isPro ? 'text-amber-400' : 'text-[#1c1917]'}`}>Özel teklif</div>
              <div className={`text-xs font-bold mt-2 ${isPro ? 'text-amber-100/50' : 'text-stone-500'}`}>İhtiyacınıza göre fiyatlandırılır</div>
            </>
          )}
        </div>

        <Button
          className={`w-full h-12 mb-5 font-black text-sm shadow-lg active:scale-[0.98] transition-all ${
            isPro ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-[#1c1917] shadow-amber-500/30' : 'bg-[#1c1917] hover:bg-[#26221e] text-amber-50'
          }`}
          data-testid={`pricing-cta-${plan.id}`}
        >
          <span className="flex items-center gap-1.5">
            {plan.cta} <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </span>
        </Button>

        {/* Expandable feature layer */}
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between py-3 font-black text-sm transition-colors ${
            isPro ? 'text-amber-100/80 hover:text-amber-50' : 'text-stone-700 hover:text-[#1c1917]'
          }`}
        >
          <span>Paket içeriği</span>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" strokeWidth={3} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-2 space-y-5">
                {Object.entries(plan.inside).map(([group, items]) => (
                  <div key={group}>
                    <div className={`text-[10px] font-black uppercase tracking-[0.15em] mb-2.5 ${isPro ? 'text-amber-400' : 'text-amber-700'}`}>{group}</div>
                    <ul className="space-y-2">
                      {items.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${isPro ? 'bg-amber-400/20' : 'bg-amber-100'}`}>
                            <Check className={`w-2.5 h-2.5 ${isPro ? 'text-amber-400' : 'text-amber-700'}`} strokeWidth={3.5} />
                          </div>
                          <span className={`text-sm leading-snug ${isPro ? 'text-amber-100/90' : 'text-stone-700'}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ============ MOBILE CARD - swipeable, native-feel ============ */
const MobilePlanCard = ({ plan, yearly, isActive }) => {
  const [expanded, setExpanded] = useState(false);
  const price = yearly ? plan.yearly : plan.monthly;
  const isPro = plan.highlight;
  return (
    <motion.article
      data-plan-card
      animate={{ scale: isActive ? 1 : 0.96, opacity: isActive ? 1 : 0.7 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className={`snap-center flex-shrink-0 w-[88%] rounded-3xl p-7 relative overflow-hidden ${
        isPro ? 'shadow-2xl' : 'bg-white border-2 border-stone-200'
      }`}
      style={isPro ? { background: 'linear-gradient(150deg, #1c1917 0%, #26221e 50%, #3c352f 100%)' } : {}}
    >
      {isPro && (
        <div className="absolute inset-0 opacity-30 rounded-3xl" style={{
          backgroundImage: 'radial-gradient(circle at 30% 0%, rgba(251, 191, 36, 0.2), transparent 50%)'
        }} />
      )}

      <div className="relative">
        {isPro && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-[#1c1917] text-[10px] font-black rounded-full mb-4 uppercase tracking-wider">
            <Sparkles className="w-3 h-3" strokeWidth={3} />
            {plan.badge}
          </div>
        )}

        <h3 className={`text-2xl font-black mb-1 ${isPro ? 'text-amber-50' : 'text-[#1c1917]'}`}>{plan.name}</h3>
        <p className={`text-sm font-medium mb-6 ${isPro ? 'text-amber-100/60' : 'text-stone-600'}`}>{plan.pitch}</p>

        <div className="mb-6">
          {price ? (
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className={`text-5xl font-black tracking-tight ${isPro ? 'text-amber-400' : 'text-[#1c1917]'}`}>{formatPrice(price)}</span>
              <span className={`text-sm font-bold ${isPro ? 'text-amber-100/50' : 'text-stone-500'}`}>/ay</span>
            </div>
          ) : (
            <div className={`text-3xl font-black ${isPro ? 'text-amber-400' : 'text-[#1c1917]'}`}>Özel teklif</div>
          )}
        </div>

        <Button
          className={`w-full h-14 mb-4 font-black text-sm active:scale-[0.97] transition-transform ${
            isPro ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-[#1c1917] shadow-lg shadow-amber-500/30' : 'bg-[#1c1917] text-amber-50'
          }`}
        >
          {plan.cta}
        </Button>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between py-3 font-black text-sm ${isPro ? 'text-amber-100/80' : 'text-stone-700'}`}
        >
          <span>{expanded ? 'Gizle' : 'İçeriği gör'}</span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" strokeWidth={3} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-4">
                {Object.entries(plan.inside).map(([group, items]) => (
                  <div key={group}>
                    <div className={`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${isPro ? 'text-amber-400' : 'text-amber-700'}`}>{group}</div>
                    <ul className="space-y-1.5">
                      {items.map((f, i) => (
                        <li key={i} className={`text-sm leading-snug ${isPro ? 'text-amber-100/90' : 'text-stone-700'}`}>· {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};
