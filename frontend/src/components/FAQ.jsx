import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { mockData } from '../mock';

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 lg:mb-6">
            Sıkça Sorulan
            <span className="block text-teal-600 mt-2">Sorular</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
            Aklınıza takılan her şey. Cevabını bulamadınız mı? Bize ulaşın.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {mockData.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-white border border-stone-200 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-stone-900 hover:text-teal-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
