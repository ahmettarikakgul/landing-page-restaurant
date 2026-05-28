import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-stone-50" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-teal-100/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-amber-50/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/80 rounded-full mb-6">
            <span className="text-sm font-bold text-teal-900">MÜŞTERİLER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-tight">
            Müşterilerimiz
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed font-medium">
            Binın üzerinde restoranın güvendiği, her gün kullandığı platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-stone-200/80 hover:border-teal-300 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-teal-50/30 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-teal-100 group-hover:text-teal-200 transition-colors duration-500" />
              
              <div className="relative">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-stone-700 text-lg mb-8 leading-relaxed font-medium relative z-10">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="relative pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-stone-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 lg:mt-24">
          <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-white/10 to-transparent blur-3xl" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
              <div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3">%98</div>
                <div className="text-teal-100 text-lg font-semibold">Müşteri Memnuniyeti</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3">4.9/5</div>
                <div className="text-teal-100 text-lg font-semibold">Ortalama Puan</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3">1.200+</div>
                <div className="text-teal-100 text-lg font-semibold">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
