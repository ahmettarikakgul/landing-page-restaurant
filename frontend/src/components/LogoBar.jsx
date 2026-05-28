import React from 'react';

export const LogoBar = () => {
  const brands = [
    'BURGER PALACE',
    'CAFE AROMA',
    'LEZZET',
    'FIRIN+',
    'KAHVE EVİ',
    'PIZZA STOP'
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs lg:text-sm font-black text-stone-500 uppercase tracking-[0.2em] mb-10">
          Türkiye'nin önde gelen restoranları RestoraX kullanıyor
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center group cursor-pointer"
            >
              <span className="text-stone-400 hover:text-stone-900 font-black text-base lg:text-lg tracking-wider transition-colors duration-300">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
