import React, { useEffect, useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { LINKS } from '../constants';

type BuildingWishModalProps = {
  buildingName: string;
  buildingSlug: string;
  onClose: () => void;
};

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

function validate(form: FormState): string | null {
  if (!form.contactName.trim()) return '請填寫姓名';
  if (!form.companyName.trim()) return '請填寫公司名稱';
  if (!form.phone.trim() && !form.email.trim()) return '請至少填寫手機或 Email 其中一項';
  if (form.phone.trim() && !/^\d{8,15}$/.test(form.phone.replace(/\D/g, ''))) return '手機格式不正確';
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Email 格式不正確';
  if (!form.privacyConsent) return '請先同意資料蒐集說明';
  return null;
}

const BuildingWishModal: React.FC<BuildingWishModalProps> = ({ buildingName, buildingSlug, onClose }) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
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
    try {
      const response = await fetch(LINKS.buildingWishesApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          buildingSlug,
          contactName: form.contactName.trim(),
          companyName: form.companyName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          privacyConsent: form.privacyConsent,
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.status === 409 && data?.code === 'duplicate') {
        setError('你已為此大樓連署，我們會優先通知你。');
        return;
      }
      if (!response.ok || !data?.ok) throw new Error(data?.message || '送出失敗，請稍後再試');
      setSuccess(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : '送出失敗，請稍後再試');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="wish-title" className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-sm font-bold text-brand-red">連署開發中</p><h3 id="wish-title" className="mt-1 text-2xl font-bold text-gray-900">{buildingName}</h3></div>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-red" aria-label="關閉"><X className="h-5 w-5" /></button>
        </div>
        {success ? (
          <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center text-green-800"><p className="text-lg font-bold">已收到你的連署</p><p className="mt-2 leading-7">達成服務條件時，我們會優先通知你。</p><button type="button" onClick={onClose} className="mt-5 rounded-xl bg-brand-red px-5 py-3 font-bold text-white hover:bg-red-700">完成</button></div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
            <label className="block text-sm font-bold text-gray-700">姓名 <span className="text-brand-red">*</span><input value={form.contactName} onChange={(event) => update('contactName', event.target.value)} maxLength={80} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10" /></label>
            <label className="block text-sm font-bold text-gray-700">公司名稱 <span className="text-brand-red">*</span><input value={form.companyName} onChange={(event) => update('companyName', event.target.value)} maxLength={120} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10" /></label>
            <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-bold text-gray-700">手機 <span className="font-normal text-gray-400">擇一</span><input value={form.phone} onChange={(event) => update('phone', event.target.value)} inputMode="tel" maxLength={40} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10" /></label><label className="block text-sm font-bold text-gray-700">Email <span className="font-normal text-gray-400">擇一</span><input value={form.email} onChange={(event) => update('email', event.target.value)} inputMode="email" maxLength={160} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10" /></label></div>
            <label className="flex items-start gap-3 text-sm leading-6 text-gray-600"><input type="checkbox" checked={form.privacyConsent} onChange={(event) => update('privacyConsent', event.target.checked)} className="mt-1" /><span>我同意商辦駝獸為通知進駐消息蒐集與使用上述聯絡資料。</span></label>
            {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center rounded-xl bg-brand-red px-5 py-4 font-bold text-white shadow-lg hover:bg-red-700 disabled:opacity-60">{isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />送出中</> : '送出連署'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BuildingWishModal;
