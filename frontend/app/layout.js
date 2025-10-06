import localFont from 'next/font/local';

// تحميل الخطوط المحلية باستخدام next/font للأداء الأمثل
const dgGhayaty = localFont({
  src: '../src/assets/fonts/DG-Ghayaty-Regular-F.ttf',
  variable: '--font-dg-ghayaty',
  display: 'swap',
  weight: '400',
});

const alarabiya = localFont({
  src: '../src/assets/fonts/Alarabiya-Font.ttf',
  variable: '--font-alarabiya',
  display: 'swap',
  weight: '400',
});

const tajawal = localFont({
  src: [
    {
      path: '../src/assets/fonts/tajawal-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/tajawal-700.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata = {
  title: "الأسطورة أونلاين | الدفع الإلكتروني وشحن الرصيد",
  description: "الأسطورة أونلاين - حلول الدفع الإلكتروني وشحن الرصيد والألعاب والبرامج والبطاقات الإلكترونية بسرعة وأمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${dgGhayaty.variable} ${alarabiya.variable} ${tajawal.variable}`}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

// Global CSS imports kept exactly as in CRA
import "../src/index.css";
import "../src/App.css";
