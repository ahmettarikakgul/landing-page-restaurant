import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden bg-stone-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-white to-stone-50" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-orange-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="text-xs font-black text-amber-900 uppercase tracking-widest">Müşteri Görüşleri</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-[1.05] tracking-tight">
            1.200+ restoran
            <span className="block text-amber-600">bize güveniyor</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed font-medium">
            Her gün yüz binlerce sipariş RestoraX üzerinden geçiyor. İşte müşterilerimizin deneyimleri.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          {/* Featured testimonial - large */}
          <div className="lg:col-span-7 relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-10 lg:p-14 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-amber-500/20 via-transparent to-transparent blur-3xl" />
            
            <div className="relative">
              <Quote className="w-16 h-16 text-amber-400/40 mb-6" />
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl text-white font-bold leading-relaxed mb-8">
                "RestoraX'i kullanmaya başladığımızdan beri sipariş süremiz <span className="text-amber-400">%40 azaldı</span>, müşteri memnuniyeti tavan yaptı. 3 şubemizi tek bir panelden yönetiyoruz."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-xl">M</span>
                </div>
                <div>
                  <div className="font-black text-white text-lg">Mehmet Yılmaz</div>
                  <div className="text-amber-400 font-semibold">Kurucu · Burger Palace</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two smaller testimonials */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            {mockData.testimonials.slice(1).map((t) => (
              <div
                key={t.id}
                className="group relative bg-white rounded-3xl p-8 border-2 border-stone-200 hover:border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-amber-50 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-700 mb-5 leading-relaxed font-medium">"{t.content}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-black">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-black text-stone-900">{t.name}</div>
                      <div className="text-sm text-stone-600 font-semibold">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-10 lg:p-14 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl" />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">%98</div>
              <div className="text-amber-50 font-bold text-sm lg:text-base">Memnuniyet</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">4.9/5</div>
              <div className="text-amber-50 font-bold text-sm lg:text-base">Ortalama Puan</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">%40</div>
              <div className="text-amber-50 font-bold text-sm lg:text-base">Hız Artışı</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">7/24</div>
              <div className="text-amber-50 font-bold text-sm lg:text-base">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
