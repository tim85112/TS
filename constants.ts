import { Utensils, Truck, DollarSign, Clock, Users, ShieldCheck, Box } from 'lucide-react';

export const LINKS = {
  consumerLine: "https://lin.ee/CAkrvvv",
  restaurantLine: "https://lin.ee/W9liNZZ",
  buildingIntakeApi: "https://cowork-admin-mu.vercel.app/api/public/building-intake",
};

export const CONTACTS = [
  {
    name: "Hsieh David",
    phone: "0916-366130",
    line: "https://line.me/ti/p/TqP-CgZSVt"
  },
  {
    name: "Ivan Lee",
    phone: "0938-089609",
    line: "https://line.me/ti/p/DyoGGgwKTv"
  },
  {
    name: "Chiu",
    phone: "0978-521989",
    line: "https://line.me/ti/p/UInmpX-4TS"
  }
];

export const PARTNERS = [
  { name: "WAYMAKER COFFEE", logo: "https://i.meee.com.tw/zB1l6RF.jpg" },
  { name: "九菜盒子", logo: "https://i.meee.com.tw/5DgkJl5.jpg" },
  { name: "隨主飡法式水煮", logo: "https://i.meee.com.tw/EiDvXFZ.jpg" },
  { name: "蛋白盒子", logo: "https://i.postimg.cc/7hdPcySP/dan-bai-he-zilogo.png" },
  { name: "食見生活", logo: "https://i.postimg.cc/sxvDw2G3/can-ting-LOGO.png" },
  { name: "迷客夏", logo: "https://i.postimg.cc/kMQmPK9Y/LOGO.jpg" },
  { name: "清序智茶", logo: "https://i.postimg.cc/T1pYCPLJ/can-ting-LOGO.jpg" },
  { name: "丰樂食堂", logo: "https://i.postimg.cc/yd6N3jV9/can-ting-LOGO.png" },
  { name: "湘春家", logo: "https://i.postimg.cc/yxt65z0X/2.png" },
  { name: "8私廚小餐館", logo: "https://i.meee.com.tw/DhtkRLX.png" },
  { name: "TEA'S原味", logo: "https://i.meee.com.tw/FhvLgV7.png" },
  { name: "OKKO義式小館", logo: "https://i.meee.com.tw/OdtFwif.png" },
  { name: "三分味牛肉麵" },
  { name: "無限好油飯" },
  { name: "發居齋素食" },
  { name: "一粒麥子陳傳盛爌肉飯" },
  { name: "意品香佛跳牆" },
  { name: "糊塗麵" },

];

export const COMPARISON_DATA = [
  {
    feature: "餐點價格",
    traditional: "遠高於店內價",
    beast: "店內價 (省荷包)",
    icon: DollarSign,
  },
  {
    feature: "運費門檻",
    traditional: "平台費＋運費",
    beast: "1人即免運",
    icon: Truck,
  },
  {
    feature: "配送品質",
    traditional: "外送員隨機、易冷掉",
    beast: "高等保溫箱、準時抵達！",
    icon: ShieldCheck,
  },
  {
    feature: "訂餐流程",
    traditional: "揪團、找零錢、算人頭",
    beast: "個人點餐、電子支付",
    icon: Clock,
  },
];

export const B_SIDE_BENEFITS = [
  {
    title: "預約制產能優化",
    description: "不壓縮現場客量，產能利用最大化。\n提前接單，從容備餐。",
    icon: Clock,
  },
  {
    title: "單筆大宗穩單",
    description: "一單即數十份，大幅提升出餐效率。\n不再為了一碗麵跑一趟。",
    icon: Box,
  },
  {
    title: "免三費",
    description: "免上架費、免月租、免機器費。\n用 Line 即可接單，利潤回歸店家。",
    icon: DollarSign,
  },
  {
    title: "客訴我來扛",
    description: "餐點瑕疵、漏送由平台先行補償，無耗時處理抱怨，專注做菜即可。",
    icon: ShieldCheck,
  },
];
