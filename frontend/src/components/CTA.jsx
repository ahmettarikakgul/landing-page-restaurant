import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Restoranınızı Daha İyi Yönetin
            </h2>
            <p className="text-lg lg:text-xl text-teal-50 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
              Şimdi başlayın, ilk 14 gün tamamen ücretsiz. Kredi kartı bilgisi gerekmez.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Ücretsiz Hesap Açın
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold transition-all duration-200"
              >
                Satış Ekibiyle Görüşün
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
