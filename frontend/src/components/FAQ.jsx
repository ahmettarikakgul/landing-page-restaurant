import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { mockData } from '../mock';
import { MessageCircle, Mail } from 'lucide-react';

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden bg-stone-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-stone-50" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full mb-6">
                <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-xs font-black text-amber-900 uppercase tracking-widest">Sıkça Sorulanlar</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-[1.05] tracking-tight">
                Aklınızdaki
                <span className="block text-amber-600">tüm sorulara</span>
                cevaplar
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed font-medium mb-8">
                Daha fazla bilgi mi gerekiyor? Destek ekibimiz size yardımcı olmaktan mutluluk duyar.
              </p>

              {/* Contact card */}
              <div className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 mb-1">Hala soru mu var?</h3>
                    <p className="text-sm text-stone-600 mb-3">Bize her zaman ulaşabilirsiniz</p>
                    <a href="mailto:info@restorax.com" className="inline-flex items-center gap-1 text-amber-700 font-black text-sm hover:text-amber-800 transition-colors">
                      info@restorax.com →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-3">
              {mockData.faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="bg-white border-2 border-stone-200 hover:border-amber-300 data-[state=open]:border-amber-400 data-[state=open]:shadow-xl rounded-2xl px-6 lg:px-8 overflow-hidden transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base lg:text-lg font-black text-stone-900 hover:text-amber-700 py-6 [&[data-state=open]]:text-amber-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 text-base pb-6 leading-relaxed font-medium">
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
