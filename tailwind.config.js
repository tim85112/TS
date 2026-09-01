import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './constants.ts',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c94625',
          yellow: '#fdc939',
          beige: '#fde8c8',
          dark: '#2d2d2d',
        },
      },
      fontFamily: {
        // 拉丁字在前、中文在後：英數走 Inter，中文自動 fallback 到 Noto Sans TC
        sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
};
