import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { mockData } from '../mock';
import { MessageCircle } from 'lucide-react';

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50/50 to-teal-50/20" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-teal-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/80 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-teal-700" />
            <span className="text-sm font-bold text-teal-900">SSS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-tight">
            Sıkça Sorulan
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Sorular
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Aklınıza takılan her şey. Cevabını bulamadınız mı? <span className="text-teal-700 font-semibold">Bize ulaşın.</span>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-white border-2 border-stone-200/80 hover:border-teal-300 rounded-2xl px-8 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg lg:text-xl font-bold text-stone-900 hover:text-teal-600 py-8">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 text-base lg:text-lg pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl border border-teal-200/60 shadow-xl">
            <p className="text-lg font-semibold text-stone-900">
              Başka sorularınız mı var?
            </p>
            <p className="text-stone-600">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              İletişime Geçin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
