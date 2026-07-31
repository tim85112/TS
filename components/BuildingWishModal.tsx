import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Loader2, X } from 'lucide-react';
import { LINKS } from '../constants';
import type { PublicBuilding } from '../types';

type FormState = {
  contactName: string;
  companyName: string;
  phone: string;
  email: string;
  privacyConsent: boolean;
};

const initialForm: FormState = {
  contactName: '',
  companyName: '',
  phone: '',
  email: '',
  privacyConsent: false,
};

type BuildingWishModalProps = {
  building: PublicBuilding;
  onClose: () => void;
  onOpenPrivacy: () => void;
};

function validate(form: FormState): string | null {
  if (!form.contactName.trim()) return '請填寫姓名';
  if (form.contactName.trim().length > 80) return '姓名請勿超過 80 字';
  if (!form.companyName.trim()) return '請填寫公司名稱';
  if (form.companyName.trim().length > 120) return '公司名稱請勿超過 120 字';
  if (!form.phone.trim() && !form.email.trim()) return '請至少填寫手機或 Email 其中一項';
  const phoneDigits = form.phone.replace(/\D/g, '');
  if (form.phone.trim() && (phoneDigits.length < 8 || phoneDigits.length > 15)) return '手機格式不正確';
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Email 格式不正確';
  if (!form.privacyConsent) return '請先同意個資蒐集說明';
  return null;
}

const inputClass = 'mt-2 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-brand-red focus:ring-4 focus:ring-brand-red/10';

const BuildingWishModal: React.FC<BuildingWishModalProps> = ({ building, onClose, onOpenPrivacy }) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), a[href]'),
      ) as HTMLElement[];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const update = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    setError(null);
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(LINKS.buildingWishesApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          buildingSlug: building.slug,
          contactName: form.contactName.trim(),
          companyName: form.companyName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          privacyConsent: form.privacyConsent,
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.status === 409 && data?.code === 'duplicate') {
        setSuccess('你已為此大樓許願，我們會在達成服務條件時優先通知你。');
        return;
      }
      if (!response.ok || !data?.ok) throw new Error(data?.message || '送出失敗，請稍後再試');
      setSuccess(data.message || '已收到你的許願，達成服務條件時將優先通知你。');
      setForm(initialForm);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : '送出失敗，請稍後再試');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end bg-stone-950/55 p-0 sm:items-center sm:justify-center sm:p-5" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="wish-title" className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-[#fffaf2] p-5 shadow-2xl sm:rounded-3xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-sm font-bold text-brand-red">即將進駐</p><h2 id="wish-title" className="mt-1 text-2xl font-black text-stone-900">為「{building.name}」許願</h2><p className="mt-2 text-sm leading-6 text-stone-600">留下資料後，達成服務條件時將優先通知你。</p></div>
          <button type="button" onClick={onClose} data-autofocus className="rounded-lg p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-red" aria-label="關閉許願表單"><X className="h-5 w-5" aria-hidden="true" /></button>
        </div>

        {success ? (
          <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center"><CheckCircle2 className="mx-auto h-11 w-11 text-emerald-600" aria-hidden="true" /><h3 className="mt-3 text-xl font-black text-emerald-900">已收到你的許願</h3><p className="mt-2 leading-7 text-emerald-800">{success}</p><button type="button" onClick={onClose} className="mt-6 rounded-xl bg-stone-900 px-5 py-3 font-bold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">完成</button></div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
            <label className="block text-sm font-bold text-stone-800">姓名 <span className="text-brand-red">*</span><input value={form.contactName} onChange={(event) => update('contactName', event.target.value)} className={inputClass} maxLength={80} autoComplete="name" placeholder="請填寫姓名" /></label>
            <label className="block text-sm font-bold text-stone-800">公司名稱 <span className="text-brand-red">*</span><input value={form.companyName} onChange={(event) => update('companyName', event.target.value)} className={inputClass} maxLength={120} autoComplete="organization" placeholder="請填寫公司名稱" /></label>
            <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-bold text-stone-800">手機 <span className="font-medium text-stone-500">（擇一）</span><input value={form.phone} onChange={(event) => update('phone', event.target.value)} className={inputClass} maxLength={40} autoComplete="tel" inputMode="tel" placeholder="0912-345-678" /></label><label className="block text-sm font-bold text-stone-800">Email <span className="font-medium text-stone-500">（擇一）</span><input value={form.email} onChange={(event) => update('email', event.target.value)} className={inputClass} maxLength={160} autoComplete="email" inputMode="email" placeholder="name@example.com" /></label></div>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-200 bg-white p-3 text-sm leading-6 text-stone-600"><input type="checkbox" checked={form.privacyConsent} onChange={(event) => update('privacyConsent', event.target.checked)} className="mt-1 h-4 w-4 rounded border-stone-400 text-brand-red focus:ring-brand-red" /><span>我同意商辦駝獸為通知進駐消息蒐集與使用上述聯絡資訊，並已閱讀 <button type="button" onClick={onOpenPrivacy} className="font-bold text-brand-red underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-brand-red">隱私權說明</button>。<span className="text-brand-red">*</span></span></label>
            {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
            <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center rounded-xl bg-brand-red px-5 py-4 text-base font-black text-white shadow-lg shadow-brand-red/20 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />送出中</> : '送出許願'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BuildingWishModal;
