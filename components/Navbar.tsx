import React, { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS = [
  { id: 'why-us', label: '為什麼選擇我們' },
  { id: 'how-it-works', label: '運作流程' },
  { id: 'enterprise', label: '企業合作' },
  { id: 'restaurant', label: '餐廳合作' },
  { id: 'logistics', label: '物流合作' },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (document.getElementById(id)) {
      scroll();
    } else {
      onNavigate('home');
      window.setTimeout(scroll, 50);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-[#fffaf2]/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="主要導覽">
        <button
          type="button"
          onClick={() => scrollToSection('top')}
          className="group flex items-center gap-2 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          aria-label="商辦駝獸首頁"
        >
          <span className="text-xl font-black tracking-tight text-brand-red sm:text-2xl">商辦駝獸</span>
          <span className="hidden rounded-full border border-brand-red/20 bg-brand-red/5 px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-red sm:inline">OFFICE LUNCH</span>
        </button>

        <div className="hidden items-center gap-5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-md text-sm font-medium text-stone-600 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onNavigate('buildingSelection')}
            className="rounded-xl bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            立即點餐
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => onNavigate('buildingSelection')}
            className="rounded-lg bg-brand-red px-3 py-2 text-sm font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            點餐
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg p-2 text-stone-700 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? '關閉導覽選單' : '開啟導覽選單'}
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id={menuId} className="border-t border-stone-200 bg-[#fffaf2] px-4 py-4 shadow-lg lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-lg px-3 py-3 text-left font-semibold text-stone-700 transition hover:bg-brand-beige/40 hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onNavigate('buildingSelection');
              }}
              className="mt-2 rounded-xl bg-brand-red px-4 py-3 font-bold text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            >
              立即點餐
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
