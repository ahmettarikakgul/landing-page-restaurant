import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Sipariş süremiz %40 azaldı, mutfak operasyonu artık çok daha senkronize. 3 şubemizi tek panelden yönetiyoruz.",
    name: 'Mehmet Yılmaz',
    role: 'Kurucu',
    brand: 'Burger Palace',
    rating: 5,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 2,
    quote: "QR menü ve masa yönetimi sayesinde müşteri memnuniyeti gözle görülür arttı. Kurulum gerçekten 5 dakika.",
    name: 'Ayşe Demir',
    role: 'İşletme Müdürü',
    brand: 'Cafe Aroma',
    rating: 5,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    quote: "Mutfak ekranı ve garson uygulaması iş akışımızı tamamen değiştirdi. Ekip olarak çok memnunuz.",
    name: 'Can Özkan',
    role: 'Patron',
    brand: 'Lezzet Durağı',
    rating: 5,
    color: 'from-red-500 to-red-700',
  },
  {
    id: 4,
    quote: "Raporlama modülü ile veriye dayalı karar almaya başladık. Hangi ürün, hangi saatte, hangi şubede ne kadar satıyor görüyoruz.",
    name: 'Elif Kaya',
    role: 'Operasyon Direktörü',
    brand: 'Fırın+',
    rating: 5,
    color: 'from-stone-700 to-stone-900',
  },
];

export const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]');
    const width = card ? card.offsetWidth + 16 : 320;
    scrollRef.current.scrollBy({ left: dir * width, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-orange-100/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Müşteri Görüşleri</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-4" data-testid="testimonials-heading">
              1.200+ restoran
              <span className="block text-amber-600">bize güveniyor</span>
            </h2>
            <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
              Her gün yüz binlerce sipariş RestoraX üzerinden geçiyor.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              data-testid="testimonial-prev"
              className="w-12 h-12 rounded-full border-2 border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll(1)}
              data-testid="testimonial-next"
              className="w-12 h-12 rounded-full border-2 border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel - snap scroll on all screens */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          data-testid="testimonials-carousel"
        >
          {testimonials.map((t, idx) => (
            <article
              key={t.id}
              data-card
              data-testid={`testimonial-card-${idx}`}
              className="snap-start flex-shrink-0 w-[85%] sm:w-[55%] lg:w-[calc((100%-2.5rem)/3)] bg-white rounded-3xl p-6 lg:p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Top: Quote icon + stars */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md`}>
                  <Quote className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-stone-800 text-base lg:text-[17px] leading-relaxed font-medium flex-1 mb-6">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between pt-5 border-t border-stone-100">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-sm`}>
                    <span className="text-white font-black text-base">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-black text-stone-900 text-sm leading-tight">{t.name}</div>
                    <div className="text-xs text-stone-500 font-semibold mt-0.5">{t.role}</div>
                  </div>
                </div>
                {/* Brand chip */}
                <div className="text-[10px] font-black text-stone-900 px-2.5 py-1 bg-stone-100 rounded-full uppercase tracking-wider">
                  {t.brand}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile pagination hint */}
        <div className="lg:hidden flex items-center justify-center gap-1.5 mt-4">
          {testimonials.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all ${i === 0 ? 'w-6 bg-stone-900' : 'w-1.5 bg-stone-300'}`} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200">
          {[
            { value: '%98', label: 'Memnuniyet' },
            { value: '4.9/5', label: 'Ortalama puan' },
            { value: '%40', label: 'Hız artışı' },
            { value: '7/24', label: 'Türkçe destek' },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 lg:p-8 text-center">
              <div className="text-3xl lg:text-4xl font-black text-stone-900 mb-1">{s.value}</div>
              <div className="text-xs lg:text-sm text-stone-500 font-bold uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
