import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">精選合作夥伴</h2>
          <p className="text-lg text-gray-600">匯集台中人氣美食，每天午餐都有新選擇。</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg border border-gray-100 hover:border-brand-yellow transition-all duration-300 h-32"
            >
              <div className="w-full h-16 flex items-center justify-center mb-2 overflow-hidden">
                 {partner.logo ? (
                   <img
                     src={partner.logo}
                     alt={`${partner.name} logo`}
                     className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       target.parentElement!.innerHTML = `<span class="text-sm font-bold text-gray-400 group-hover:text-brand-red">${partner.name}</span>`;
                     }}
                   />
                 ) : (
                   <span className="text-sm font-bold text-gray-400 group-hover:text-brand-red">{partner.name}</span>
                 )}
              </div>
              <span className="text-xs font-medium text-gray-400 group-hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-dark rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">您也是餐廳老闆嗎？</h3>
            <p className="text-gray-400">加入商辦駝獸，立即解決外送人力與抽成問題。</p>
          </div>
          <div className="relative z-10">
             <a 
              href="https://lin.ee/W9liNZZ" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-brand-dark px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              免費申請合作
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;