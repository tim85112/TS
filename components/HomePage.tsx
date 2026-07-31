import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Store,
  ThermometerSun,
  Truck,
  UsersRound,
} from 'lucide-react';
import { LINKS } from '../constants';
import type { Page, PublicBuilding } from '../types';

type HomePageProps = {
  buildings: PublicBuilding[];
  isCatalogLoading: boolean;
  activeBuilding?: PublicBuilding;
  onNavigate: (page: Page) => void;
};

const valueProps = [
  { title: '店內價', description: '午餐不用為外送多付一筆。', icon: BadgeCheck },
  { title: '一人免揪團', description: '想吃就點，不必等同事湊單。', icon: UsersRound },
  { title: '免運費', description: '不用計算門檻，點一份也能安心下單。', icon: Truck },
  { title: '專人保溫配送', description: '從餐廳到大樓，交給專人接力。', icon: ThermometerSun },
];

const processSteps = [
  { number: '01', title: '選擇你的商辦', description: '確認目前服務中的大樓，加入 LINE 後開始點餐。', icon: MapPin },
  { number: '02', title: '挑選今天想吃的', description: '依自己的步調下單，一個人也不必等待。', icon: Store },
  { number: '03', title: '到大樓附近取餐', description: '配送與取餐資訊集中處理，午餐時間更從容。', icon: Clock3 },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-bold tracking-[0.18em] text-brand-red">{children}</p>;
}

const HomePage: React.FC<HomePageProps> = ({ buildings, isCatalogLoading, activeBuilding, onNavigate }) => {
  const activeName = activeBuilding?.name ?? '服務大樓資料載入中';

  return (
    <>
      <section id="top" className="relative overflow-hidden bg-[#fffaf2] pb-16 pt-28 sm:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-[12%] h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-white/80 px-3 py-1.5 text-sm font-bold text-brand-red shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-red" />
              台中商辦午餐配送
            </div>
            <h1 className="mt-6 text-4xl font-black leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              店內價吃午餐，
              <span className="block text-brand-red">送到你的辦公桌附近</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              一人就能點，不必揪團、不必湊免運；為台中商辦上班族準備的午餐配送服務，讓你每天準時享用熱騰騰午餐。
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5" aria-label="服務特色">
              {valueProps.map(({ title }) => (
                <span key={title} className="rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-bold text-stone-700 shadow-sm">
                  <Check className="mr-1 inline h-4 w-4 text-brand-red" aria-hidden="true" />
                  {title}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate('buildingSelection')}
                className="group inline-flex items-center justify-center rounded-xl bg-brand-red px-6 py-4 text-base font-black text-white shadow-lg shadow-brand-red/20 transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
              >
                立即點餐
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('buildingIntake')}
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-4 text-base font-bold text-stone-800 transition hover:border-brand-red hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
              >
                企業合作
              </button>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-stone-500">
              <a href={LINKS.restaurantLine} target="_blank" rel="noreferrer" className="rounded underline-offset-4 hover:text-brand-red hover:underline focus:outline-none focus:ring-2 focus:ring-brand-red">餐廳合作</a>
              <a href={LINKS.logisticsLine} target="_blank" rel="noreferrer" className="rounded underline-offset-4 hover:text-brand-red hover:underline focus:outline-none focus:ring-2 focus:ring-brand-red">物流合作</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-label="商辦午餐服務情境">
            <div className="rounded-[2rem] border border-white/80 bg-stone-900 p-5 shadow-2xl shadow-stone-900/20 sm:p-7">
              <div className="rounded-[1.4rem] bg-[linear-gradient(145deg,#d85c37_0%,#c94625_42%,#7e281b_100%)] p-6 text-white sm:p-8">
                <div className="flex items-center justify-between text-sm font-bold text-white/80">
                  <span>OFFICE CAMEL</span>
                  <span className="rounded-full bg-white/15 px-3 py-1">午餐配送中</span>
                </div>
                <div className="mt-12 rounded-2xl bg-white p-5 text-stone-900 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-brand-red">TODAY&apos;S LUNCH</p>
                      <p className="mt-1 text-xl font-black">午餐，剛好抵達</p>
                    </div>
                    <div className="rounded-xl bg-brand-beige/60 p-3 text-brand-red"><ThermometerSun className="h-7 w-7" aria-hidden="true" /></div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-stone-50 p-3"><p className="text-xs text-stone-500">配送方式</p><p className="mt-1 font-bold">專人保溫配送</p></div>
                    <div className="rounded-xl bg-stone-50 p-3"><p className="text-xs text-stone-500">下單方式</p><p className="mt-1 font-bold">一人即可點餐</p></div>
                  </div>
                </div>
                <p className="mt-7 text-lg font-bold leading-7">把午餐的麻煩，留在辦公室以外。</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-xs font-bold text-stone-500">專為商辦上班族設計</p>
              <p className="mt-1 text-sm font-black text-stone-900">少一件待辦，多一點午休</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>WHY OFFICE CAMEL</SectionLabel>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">午餐不該卡在揪團與運費</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">把同事最常遇到的訂餐摩擦，整理成一個更適合商辦節奏的服務。</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-[#fffdf9] p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mt-5 text-xl font-black text-stone-900">{title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-stone-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">午餐流程，簡化成三步</h2>
            <button type="button" onClick={() => onNavigate('buildingSelection')} className="inline-flex w-fit items-center rounded-lg text-sm font-bold text-brand-yellow underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-brand-yellow">先找我的商辦 <ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="flex items-center justify-between"><span className="text-sm font-black tracking-widest text-brand-yellow">{number}</span><Icon className="h-6 w-6 text-white/70" aria-hidden="true" /></div>
                <h3 className="mt-12 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7ead8] py-16 sm:py-24" aria-labelledby="launch-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1.5 text-sm font-black text-white"><span className="h-2 w-2 rounded-full bg-brand-yellow" />近期正式啟用</div>
            <h2 id="launch-heading" className="mt-4 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">{activeName}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">可立即開始使用商辦駝獸點餐。先加入 LINE，掌握大樓的點餐與取餐資訊。</p>
            <a href={LINKS.consumerLine} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center rounded-xl bg-brand-red px-6 py-4 font-black text-white shadow-lg shadow-brand-red/20 transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />開啟 LINE 加好友
            </a>
          </div>
          <div className="hidden w-64 rounded-3xl border border-stone-200 bg-white p-5 text-center shadow-xl sm:block">
            <img src="/qr/office-camel-line.svg" alt="掃描加入商辦駝獸 LINE 好友" className="mx-auto h-48 w-48" />
            <p className="mt-3 text-sm font-bold text-stone-800">掃碼加入 LINE 好友</p>
            <p className="mt-1 text-xs leading-5 text-stone-500">手機掃描後開啟同一個加好友連結</p>
          </div>
        </div>
      </section>

      <section id="service-network" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl"><SectionLabel>TAICHUNG OFFICE NETWORK</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">台中商辦服務網絡</h2><p className="mt-4 text-lg leading-8 text-stone-600">看看你的辦公室是否已可立即點餐；尚未進駐的大樓，也能留下需求。</p></div>
            <button type="button" onClick={() => onNavigate('buildingSelection')} className="inline-flex items-center rounded-xl border border-stone-300 px-5 py-3 font-bold text-stone-800 transition hover:border-brand-red hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red">選擇商辦大樓 <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></button>
          </div>
          {isCatalogLoading ? (
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="載入服務大樓資料中">{Array.from({ length: 9 }).map((_, index) => <div key={index} className="h-28 animate-pulse rounded-2xl bg-stone-100" />)}</div>
          ) : (
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {buildings.map((building) => (
                <button key={building.slug} type="button" onClick={() => onNavigate('buildingSelection')} className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-red ${building.status === 'open' ? 'border-brand-red/40 bg-brand-red/5' : 'border-stone-200 bg-[#fffdf9]'}`}>
                  <div className="flex items-start justify-between gap-3"><Building2 className={`h-6 w-6 ${building.status === 'open' ? 'text-brand-red' : 'text-stone-500'}`} aria-hidden="true" /><span className={`rounded-full px-2.5 py-1 text-xs font-black ${building.status === 'open' ? 'bg-brand-red text-white' : 'bg-brand-beige/60 text-stone-700'}`}>{building.status === 'open' ? '可立即點餐' : '即將進駐'}</span></div>
                  <h3 className="mt-5 font-black leading-6 text-stone-900">{building.name}</h3>
                  <p className="mt-2 text-sm font-bold text-brand-red">{building.status === 'open' ? '開始點餐' : '許願進駐'} <ArrowRight className="ml-1 inline h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="enterprise" className="scroll-mt-24 bg-stone-100 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-3xl bg-white p-7 shadow-sm lg:col-span-2"><UsersRound className="h-8 w-8 text-brand-red" aria-hidden="true" /><h2 className="mt-6 text-3xl font-black text-stone-900">企業合作</h2><p className="mt-3 max-w-xl leading-8 text-stone-600">若你是行政、福委或大樓導入窗口，讓我們了解你的商辦午餐需求與現場條件。</p><button type="button" onClick={() => onNavigate('buildingIntake')} className="mt-7 rounded-xl bg-brand-red px-5 py-3 font-black text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">洽談企業合作</button></article>
          <article id="restaurant" className="scroll-mt-24 rounded-3xl bg-[#d65b37] p-7 text-white"><Store className="h-8 w-8 text-brand-yellow" aria-hidden="true" /><h2 className="mt-6 text-2xl font-black">餐廳合作</h2><p className="mt-3 leading-7 text-white/80">把穩定的商辦午餐需求，帶進你的日常營運節奏。</p><a href={LINKS.restaurantLine} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-lg font-bold underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white">了解餐廳合作</a></article>
          <article id="logistics" className="scroll-mt-24 rounded-3xl bg-stone-900 p-7 text-white lg:col-start-3"><Truck className="h-8 w-8 text-brand-yellow" aria-hidden="true" /><h2 className="mt-6 text-2xl font-black">物流合作</h2><p className="mt-3 leading-7 text-white/70">一起讓商辦午餐更準時、更有品質。</p><a href={LINKS.logisticsLine} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-lg font-bold underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white">加入物流合作</a></article>
        </div>
      </section>

      <footer className="bg-stone-950 py-10 text-stone-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-4 sm:flex-row sm:items-end sm:px-6 lg:px-8"><div><p className="text-xl font-black text-white">商辦駝獸</p><p className="mt-2 text-sm leading-6 text-stone-400">台中商辦午餐配送服務</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm"><button type="button" onClick={() => onNavigate('privacy')} className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow">隱私權政策</button><button type="button" onClick={() => onNavigate('buildingSelection')} className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow">立即點餐</button><a href={LINKS.consumerLine} target="_blank" rel="noreferrer" className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow">加入 LINE</a></div></div>
      </footer>
    </>
  );
};

export default HomePage;
