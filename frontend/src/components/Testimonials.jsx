import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 lg:mb-6">
            Müşterilerimiz
            <span className="block text-teal-600 mt-2">Ne Diyor?</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
            Binın üzerinde restoranın güvendiği platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockData.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="border-t border-stone-200 pt-4">
                <div className="font-bold text-stone-900">{testimonial.name}</div>
                <div className="text-sm text-stone-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
