import React from 'react';
import { ArrowRight, Coffee, Building2, Truck, Users } from 'lucide-react';
import { LINKS } from '../constants';
import type { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-brand-beige/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red font-medium text-sm mb-6 border border-brand-red/20">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            台中商辦午餐救星
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            用<span className="text-brand-red relative whitespace-nowrap">
              <span className="relative z-10">「店內價」</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/60 -z-10 transform -rotate-2"></span>
            </span>吃午餐，<br />
            剩下的錢拿來買咖啡。
          </h1>

          <p className="mt-4 text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            不需揪團訂餐、不再找零錢。<br />專為商辦精英設計的訂餐平台。<br className="hidden md:block" />
            <br />一人就能點，免運費直送大樓一樓。
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('buildingSelection')}
              className="group flex items-center justify-center bg-brand-red text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-red-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <Coffee className="mr-2 w-5 h-5" />
              我是員工 (立即點餐)
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('buildingIntake')}
              className="group flex items-center justify-center bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-brand-red hover:text-brand-red hover:-translate-y-1 transition-all duration-200"
            >
              <Users className="mr-2 w-5 h-5" />
              公司合作
            </button>

            <a
              href={LINKS.restaurantLine}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-brand-red hover:text-brand-red hover:-translate-y-1 transition-all duration-200"
            >
              <Building2 className="mr-2 w-5 h-5" />
              餐廳合作
            </a>

            <a
              href="https://lin.ee/MrkTwKS"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-brand-red hover:text-brand-red hover:-translate-y-1 transition-all duration-200"
            >
              <Truck className="mr-2 w-5 h-5" />
              物流合作
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              無低消
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              免運費
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              專人保溫
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
