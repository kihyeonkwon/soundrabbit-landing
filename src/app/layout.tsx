import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soundrabbit.com"),
  title: "사운드래빗 | 당신의 콘텐츠가 곧 수익이 되는 곳",
  description:
    "크리에이터를 위한 차세대 음원 수익 플랫폼. 누구나 손쉽게 자신의 음악을 등록하고, 유튜브 쇼츠·틱톡·더우인 등 숏폼 콘텐츠를 통해 전 세계에 노출되며 자동으로 수익을 창출할 수 있습니다.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "사운드래빗",
    "SoundRabbit",
    "유튜브 쇼츠 음원 수익",
    "숏폼 음원 수익 사이트",
    "음원 유통 플랫폼",
    "크리에이터 음원 수익",
    "틱톡 음원 수익",
    "릴스 음원 등록",
    "짤스튜디오 대체",
    "뮤직플렉스 대체",
    "크리워드 대체",
    "유튜브 쇼츠 음악 등록",
    "음원 수익 정산",
    "크리에이터 수익분배",
    "음악 유통",
    "음원 저작권 관리",
  ],
  authors: [{ name: "SoundRabbit" }],
  creator: "SoundRabbit",
  publisher: "SoundRabbit",
  openGraph: {
    title: "사운드래빗 | 당신의 콘텐츠가 곧 수익이 되는 곳",
    description:
      "크리에이터를 위한 차세대 음원 수익 플랫폼. 유튜브 쇼츠, 틱톡, 릴스 등 숏폼 콘텐츠로 음원 수익을 자동 창출하세요.",
    url: "https://www.soundrabbit.com",
    siteName: "사운드래빗 SoundRabbit",
    images: [
      {
        url: "/soundrabbit.jpeg",
        width: 1200,
        height: 630,
        alt: "사운드래빗 - 크리에이터 음원 수익화 플랫폼",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "사운드래빗 | 당신의 콘텐츠가 곧 수익이 되는 곳",
    description: "크리에이터를 위한 차세대 음원 수익 플랫폼",
    images: ["/soundrabbit.jpeg"],
    creator: "@soundrabbit",
  },
  alternates: { canonical: "https://www.soundrabbit.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // 네이버 서치어드바이저 인증 코드는 등록 후 추가
    // naver: "네이버_인증코드",
    // 구글 서치콘솔 인증 코드도 필요시 추가
    // google: "구글_인증코드",
  },
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
