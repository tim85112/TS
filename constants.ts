import { Utensils, Truck, DollarSign, Clock, Users, ShieldCheck, Box } from 'lucide-react';

export const LINKS = {
  consumerLine: "https://lin.ee/CAkrvvv",
  restaurantLine: "https://lin.ee/W9liNZZ",
  buildingIntakeApi: "https://cowork-admin-mu.vercel.app/api/public/building-intake",
  buildingWishesApi: "https://cowork-admin-mu.vercel.app/api/public/building-wishes",
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
  { name: "湘春家鍋燒意麵", logo: "https://i.postimg.cc/yxt65z0X/2.png" },
  { name: "丰樂食堂", logo: "https://i.postimg.cc/yd6N3jV9/can-ting-LOGO.png" },
  { name: "迷客夏", logo: "https://i.postimg.cc/kMQmPK9Y/LOGO.jpg" },
  { name: "8私廚小餐館", logo: "https://i.meee.com.tw/DhtkRLX.png" },
  { name: "食見生活", logo: "https://i.postimg.cc/sxvDw2G3/can-ting-LOGO.png" },
  { name: "青序智茶", logo: "https://i.postimg.cc/T1pYCPLJ/can-ting-LOGO.jpg" },
  { name: "蛋白盒子", logo: "https://i.postimg.cc/7hdPcySP/dan-bai-he-zilogo.png" },
  { name: "一粒麥子陳傳盛爌肉飯", logo: "/logos/11.jpg" },
  { name: "TEA'S原味", logo: "https://i.meee.com.tw/FhvLgV7.png" },
  { name: "OKKO義式小館", logo: "https://i.meee.com.tw/OdtFwif.png" },
  { name: "WAYMAKER COFFEE", logo: "https://i.meee.com.tw/zB1l6RF.jpg" },
  { name: "隨主飡法式水煮", logo: "https://i.meee.com.tw/EiDvXFZ.jpg" },
  { name: "Gatewell Coffee Roasters", logo: "/logos/18.png" },
  { name: "九菜盒子", logo: "https://i.meee.com.tw/5DgkJl5.jpg" },
  { name: "上舫港式燒臘", logo: "/logos/20.jpg" },
  { name: "昇牛肉飯", logo: "/logos/23.jpg" },
  { name: "耶濃搖滾豆漿", logo: "/logos/24.png" },
  { name: "鹿港洪爌肉飯", logo: "/logos/25.jpg" },
  { name: "本便當", logo: "/logos/26.jpg" },
  { name: "丘森茶室", logo: "/logos/27.jpg" },
  { name: "吐司男", logo: "/logos/28.jpg" },
  { name: "麵涼涼麵", logo: "/logos/29.jpg" },
  { name: "日青優格", logo: "/logos/30.jpg" },
  { name: "澎發號小卷米粉", logo: "/logos/31.jpg" },
  { name: "Mr.Wish", logo: "/logos/32.jpg" },
  { name: "炒飯超人", logo: "/logos/33.jpg" },
  { name: "芮可咖啡", logo: "/logos/34.jpg" },
  { name: "裡好早午餐", logo: "/logos/35.jpg" },
  { name: "簡簡JianJian健康餐盒", logo: "/logos/36.jpg" },
  { name: "Le Walthert 瑞士乾酪", logo: "/logos/37.jpg" },
  { name: "自慢嗑旅", logo: "/logos/38.jpg" },
  { name: "叁時叁便當", logo: "/logos/39.jpg" },
  { name: "無限好油飯", logo: "" },
  { name: "發居齋素食", logo: "" },
  { name: "三分味牛肉麵", logo: "" },
  { name: "意品香佛跳牆", logo: "" },
  { name: "糊塗麵", logo: "" },
  { name: "麻古", logo: "" },
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
