import React from 'react';
import { QrCode, Receipt, LayoutGrid, Building2, Box, Users, ChefHat, BarChart3, ArrowUpRight } from 'lucide-react';
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
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50/80 to-white" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-teal-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-50/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/80 rounded-full mb-6">
            <span className="text-sm font-bold text-teal-900">ÖZELLİKLER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-tight">
            Restoran Yönetiminin
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Her Yönü
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed font-medium">
            Operasyonlarınızı optimize eden, zamandan tasarruf ettiren ve
            <span className="text-teal-700 font-semibold"> müşteri deneyimini geliştiren </span>
            ekosistem.
          </p>
        </div>

        {/* Primary Features - Large Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {mockData.modules.slice(0, 2).map((module, idx) => {
            const IconComponent = iconMap[module.icon];
            return (
              <div
                key={module.id}
                className="group relative bg-gradient-to-br from-white to-stone-50/50 rounded-3xl p-8 lg:p-10 border border-stone-200/60 hover:border-teal-300/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-teal-50/50 to-teal-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-teal-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-xl">
                        <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-teal-600 opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-stone-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-stone-700 font-medium">
                        <div className="w-2 h-2 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Features - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockData.modules.slice(2).map((module) => {
            const IconComponent = iconMap[module.icon];
            return (
              <div
                key={module.id}
                className="group relative bg-white rounded-2xl p-8 border border-stone-200/80 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 group-hover:from-teal-500 group-hover:to-teal-700 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-lg">
                    <IconComponent className="w-7 h-7 text-teal-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-stone-900 mb-3 group-hover:text-teal-700 transition-colors duration-200">
                    {module.title}
                  </h3>
                  <p className="text-stone-600 mb-5 leading-relaxed text-sm">
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
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all duration-200 cursor-pointer group">
            <span className="text-lg">Tüm özellikleri keşfedin</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};
