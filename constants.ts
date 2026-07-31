import { Box, Clock, DollarSign, ShieldCheck, Truck } from 'lucide-react';

export const LINKS = {
  consumerLine: 'https://lin.ee/uTQG4LH',
  restaurantLine: 'https://lin.ee/W9liNZZ',
  logisticsLine: 'https://lin.ee/MrkTwKS',
  buildingIntakeApi: 'https://cowork-admin-mu.vercel.app/api/public/building-intake',
  buildingWishesApi: 'https://cowork-admin-mu.vercel.app/api/public/building-wishes',
};

// 保留舊元件的型別相容；首頁已改由 HomePage 呈現服務資訊，避免未驗證的合作實績展示。
export const CONTACTS: Array<{ name: string; phone: string; line: string }> = [];
export const PARTNERS: Array<{ name: string; logo: string }> = [];

export const COMPARISON_DATA = [
  { feature: '價格', traditional: '外送加價', beast: '店內價', icon: DollarSign },
  { feature: '下單方式', traditional: '需湊單', beast: '一人即可點餐', icon: Truck },
  { feature: '配送', traditional: '配送條件不一', beast: '專人保溫配送', icon: ShieldCheck },
  { feature: '午餐節奏', traditional: '常需等待揪團', beast: '依商辦流程安排', icon: Clock },
];

export const B_SIDE_BENEFITS = [
  { title: '商辦需求', description: '對接台中商辦午餐時段。', icon: Clock },
  { title: '配送流程', description: '由專人安排取餐與配送。', icon: Box },
  { title: '餐廳合作', description: '透過 LINE 了解合作方式。', icon: DollarSign },
  { title: '服務品質', description: '重視午餐配送的完整體驗。', icon: ShieldCheck },
];
