import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const PrivacyNotice: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="min-h-screen bg-[#fffaf2] pb-16 pt-28 sm:pt-32">
    <article className="mx-auto max-w-3xl px-4 sm:px-6">
      <button type="button" onClick={onBack} className="inline-flex items-center rounded-lg text-sm font-bold text-stone-600 hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"><ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />返回首頁</button>
      <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
        <ShieldCheck className="h-10 w-10 text-brand-red" aria-hidden="true" />
        <h1 className="mt-5 text-3xl font-black text-stone-900">隱私權說明</h1>
        <p className="mt-3 text-sm text-stone-500">最後更新：2026 年 7 月 31 日</p>
        <div className="mt-8 space-y-7 leading-8 text-stone-700">
          <section><h2 className="text-xl font-black text-stone-900">蒐集哪些資料</h2><p className="mt-2">當你送出「許願進駐」表單時，我們會蒐集姓名、公司名稱，以及你主動提供的手機或 Email。</p></section>
          <section><h2 className="text-xl font-black text-stone-900">使用目的</h2><p className="mt-2">資料只用於評估該商辦大樓的服務需求，以及在達成服務條件時通知你進駐消息；本次功能不會自動發送行銷訊息。</p></section>
          <section><h2 className="text-xl font-black text-stone-900">保存與存取</h2><p className="mt-2">資料儲存在商辦駝獸既有受權限控管的系統中，僅由有業務需要的管理人員存取。公開網站不會顯示許願名單或人數。</p></section>
          <section><h2 className="text-xl font-black text-stone-900">你的選擇</h2><p className="mt-2">若要查詢、更正或要求刪除你提供的資料，請透過商辦駝獸官方 LINE 聯繫我們，並提供可供辨識的聯絡資訊。</p></section>
        </div>
      </div>
    </article>
  </div>
);

export default PrivacyNotice;
