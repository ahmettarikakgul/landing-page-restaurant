import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { mockData } from '../mock';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky left column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-5">
                <MessageCircle className="w-3 h-3 text-amber-700" strokeWidth={2.5} />
                <span className="text-[11px] font-black text-amber-900 uppercase tracking-[0.15em]">Sıkça Sorulanlar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-stone-900 leading-[1.05] tracking-tight mb-5">
                Aklınızdaki
                <span className="block text-amber-600">tüm sorulara cevaplar</span>
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-8">
                Daha fazla bilgi mi gerekiyor? Destek ekibimiz size yardımcı olur.
              </p>

              {/* Contact card */}
              <a href="mailto:info@restorax.com" className="group block bg-stone-50 hover:bg-stone-100 rounded-2xl p-5 border border-stone-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-stone-900 text-sm mb-0.5">Hala soru mu var?</div>
                    <div className="text-xs text-stone-600 font-semibold mb-2">Bize her zaman ulaşabilirsiniz</div>
                    <div className="inline-flex items-center gap-1 text-amber-700 group-hover:text-amber-800 font-black text-xs">
                      info@restorax.com
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* FAQ list */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-2.5" data-testid="faq-accordion">
              {mockData.faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  data-testid={`faq-item-${idx}`}
                  className="bg-white border border-stone-200 hover:border-stone-300 data-[state=open]:border-stone-900 data-[state=open]:shadow-lg rounded-2xl px-6 lg:px-7 overflow-hidden transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-base lg:text-lg font-black text-stone-900 hover:text-amber-700 py-5 [&[data-state=open]]:text-stone-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 text-base pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
