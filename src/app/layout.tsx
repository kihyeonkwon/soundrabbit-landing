import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soundrabbit.com"),
  title: "SoundRabbit – 크리에이터를 위한 음원 수익화",
  description:
    "유튜브/쇼츠/브이로그/광고에 음원을 쓰고 자동 정산 받는 새로운 수익 경험.",
  openGraph: {
    title: "SoundRabbit – 크리에이터를 위한 음원 수익화",
    description: "음원 사용만 해도 수익 발생. 지금 시작하세요!",
    url: "https://www.soundrabbit.com",
    siteName: "SoundRabbit",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoundRabbit",
    description: "크리에이터를 위한 음원 수익화 플랫폼",
    images: ["/og.png"],
  },
  alternates: { canonical: "https://www.soundrabbit.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${noto.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
