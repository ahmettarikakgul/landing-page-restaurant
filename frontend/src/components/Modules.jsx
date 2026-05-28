import React from 'react';
import { QrCode, Receipt, LayoutGrid, Building2, Box, Users, ChefHat, BarChart3 } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  QrCode,
  Receipt,
  LayoutGrid,
  Building2,
  Box,
  Users,
  ChefHat,
  BarChart3
};

export const Modules = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 lg:mb-6">
            Restoran Yönetiminin
            <span className="block text-teal-600 mt-2">Her Yönü</span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
            Operasyonlarınızı optimize eden, zamandan tasarruf ettiren ve müşteri deneyimini geliştiren modüller.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {mockData.modules.map((module) => {
            const IconComponent = iconMap[module.icon];
            return (
              <div
                key={module.id}
                className="group bg-stone-50 hover:bg-white rounded-2xl p-6 lg:p-8 border border-stone-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-teal-100 group-hover:bg-teal-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-stone-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {module.title}
                </h3>
                <p className="text-stone-600 mb-4 lg:mb-6 leading-relaxed">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
