import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, MapPin, RefreshCw } from 'lucide-react';
import { LINKS } from '../constants';
import type { PublicBuilding } from '../types';
import BuildingWishModal from './BuildingWishModal';

interface BuildingSelectionProps {
  buildings: PublicBuilding[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => Promise<void>;
  onBack: () => void;
  onOpenPrivacy: () => void;
}

const BuildingSelection: React.FC<BuildingSelectionProps> = ({
  buildings,
  isLoading,
  error,
  onRetry,
  onBack,
  onOpenPrivacy,
}) => {
  const [wishBuilding, setWishBuilding] = useState<PublicBuilding | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const orderedBuildings = [...buildings].sort((a, b) => a.displayOrder - b.displayOrder);

  const retry = async () => {
    setIsRetrying(true);
    await onRetry();
    setIsRetrying(false);
  };

  return (
    <div className="min-h-screen bg-[#fffaf2] pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onBack} className="inline-flex items-center rounded-lg text-sm font-bold text-stone-600 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"><ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />返回首頁</button>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-bold tracking-[0.18em] text-brand-red">TAICHUNG OFFICE NETWORK</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">選擇你的商辦大樓</h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">已啟用的大樓可立即開始點餐；即將進駐的大樓，留下許願資料後我們會優先通知你。</p>
        </header>

        {isLoading ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="載入大樓資料中">
            {Array.from({ length: 9 }).map((_, index) => <div key={index} className="h-56 animate-pulse rounded-3xl bg-stone-200/70" />)}
          </div>
        ) : error || orderedBuildings.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm">
            <h2 className="text-xl font-black text-stone-900">暫時無法載入大樓資料</h2>
            <p className="mt-2 text-stone-600">{error || '請重新整理後再試。'}</p>
            <button type="button" onClick={retry} disabled={isRetrying} className="mt-6 inline-flex items-center rounded-xl bg-brand-red px-5 py-3 font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-60"><RefreshCw className={`mr-2 h-4 w-4 ${isRetrying ? 'animate-spin' : ''}`} aria-hidden="true" />重新載入</button>
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orderedBuildings.map((building) => {
              const isOpen = building.status === 'open';
              return (
                <article key={building.slug} className={`group relative flex min-h-64 flex-col rounded-3xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl ${isOpen ? 'border-brand-red/40 bg-[linear-gradient(145deg,#fff7ec,#f8d7b6)]' : 'border-stone-200 bg-white'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isOpen ? 'bg-brand-red text-white' : 'bg-brand-beige/60 text-brand-red'}`}><Building2 className="h-6 w-6" aria-hidden="true" /></div>
                    <span className={`rounded-full px-3 py-1.5 text-xs font-black ${isOpen ? 'bg-brand-red text-white' : 'border border-stone-200 bg-[#fffaf2] text-stone-700'}`}>{isOpen ? '近期正式啟用' : '即將進駐'}</span>
                  </div>
                  <div className="mt-7"><h2 className="text-2xl font-black leading-8 text-stone-900">{building.name}</h2><p className="mt-3 flex items-center text-sm text-stone-500"><MapPin className="mr-1.5 h-4 w-4 text-brand-red" aria-hidden="true" />台中商辦服務網絡</p></div>
                  <div className="mt-auto pt-7">
                    {isOpen ? (
                      <a href={LINKS.consumerLine} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-xl bg-brand-red px-4 py-3.5 font-black text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">立即點餐 <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" /></a>
                    ) : (
                      <button type="button" onClick={() => setWishBuilding(building)} className="inline-flex w-full items-center justify-center rounded-xl border border-brand-red/30 bg-white px-4 py-3.5 font-black text-brand-red transition hover:border-brand-red hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">許願進駐 <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" /></button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <section className="mt-16 rounded-3xl border border-stone-200 bg-white p-7 text-center shadow-sm sm:p-10">
          <p className="text-sm font-bold tracking-wider text-brand-red">已啟用大樓的點餐方式</p>
          <div className="mt-5 grid gap-4 text-left sm:grid-cols-3">
            {['加入大樓 LINE', '選擇今天想吃的', '依通知前往取餐'].map((step, index) => <div key={step} className="flex items-center rounded-2xl bg-stone-50 p-4"><span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-black text-white">{index + 1}</span><span className="font-bold text-stone-800">{step}</span></div>)}
          </div>
        </section>
      </div>
      {wishBuilding && <BuildingWishModal building={wishBuilding} onClose={() => setWishBuilding(null)} onOpenPrivacy={onOpenPrivacy} />}
    </div>
  );
};

export default BuildingSelection;
