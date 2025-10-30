import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const noto = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const metadataByLocale: Record<string, Metadata> = {
    ko: {
      metadataBase: new URL("https://soundrabbitent.com"),
      title: "사운드래빗 | 당신의 콘텐츠가 곧 수익이 되는 곳",
      description:
        "크리에이터를 위한 차세대 음원 수익 플랫폼. 누구나 손쉽게 자신의 음악을 등록하고, 유튜브 쇼츠·틱톡·더우인 등 숏폼 콘텐츠를 통해 전 세계에 노출되며 자동으로 수익을 창출할 수 있습니다.",
      keywords: [
        "사운드래빗",
        "SoundRabbit",
        "유튜브 쇼츠 음원 수익",
        "숏폼 음원 수익 사이트",
        "음원 유통 플랫폼",
        "크리에이터 음원 수익",
        "틱톡 음원 수익",
        "릴스 음원 등록",
      ],
      openGraph: {
        title: "사운드래빗 | 당신의 콘텐츠가 곧 수익이 되는 곳",
        description:
          "크리에이터를 위한 차세대 음원 수익 플랫폼. 누구나 손쉽게 자신의 음악을 등록하고, 유튜브 쇼츠·틱톡·더우인 등 숏폼 콘텐츠를 통해 전 세계에 노출되며 자동으로 수익을 창출할 수 있습니다.",
        url: "https://soundrabbitent.com",
        siteName: "사운드래빗",
        locale: "ko_KR",
        type: "website",
      },
    },
    ja: {
      metadataBase: new URL("https://soundrabbitent.com"),
      title: "SoundRabbit | あなたのコンテンツが収益になる場所",
      description:
        "クリエイターのための次世代音源収益プラットフォーム。誰でも簡単に自分の音楽を登録し、YouTube ショート・TikTok・Douyinなどのショート動画を通じて世界中に露出され、自動的に収益を創出できます。",
      keywords: [
        "SoundRabbit",
        "サウンドラビット",
        "YouTubeショート音源収益",
        "ショート動画音源収益",
        "音源配信プラットフォーム",
      ],
      openGraph: {
        title: "SoundRabbit | あなたのコンテンツが収益になる場所",
        description:
          "クリエイターのための次世代音源収益プラットフォーム。誰でも簡単に自分の音楽を登録し、YouTube ショート・TikTok・Douyinなどのショート動画を通じて世界中に露出され、自動的に収益を創出できます。",
        url: "https://soundrabbitent.com/ja",
        siteName: "SoundRabbit",
        locale: "ja_JP",
        type: "website",
      },
    },
    "zh-TW": {
      metadataBase: new URL("https://soundrabbitent.com"),
      title: "SoundRabbit | 您的內容即是收益的地方",
      description:
        "為創作者打造的下一代音源收益平台。任何人都可以輕鬆註冊自己的音樂，通過YouTube Shorts、TikTok、抖音等短影音向全世界曝光，自動創造收益。",
      keywords: [
        "SoundRabbit",
        "YouTube Shorts音源收益",
        "短影音音源收益網站",
        "音源發行平台",
      ],
      openGraph: {
        title: "SoundRabbit | 您的內容即是收益的地方",
        description:
          "為創作者打造的下一代音源收益平台。任何人都可以輕鬆註冊自己的音樂，通過YouTube Shorts、TikTok、抖音等短影音向全世界曝光，自動創造收益。",
        url: "https://soundrabbitent.com/zh-TW",
        siteName: "SoundRabbit",
        locale: "zh_TW",
        type: "website",
      },
    },
    "zh-CN": {
      metadataBase: new URL("https://soundrabbitent.com"),
      title: "SoundRabbit | 您的内容即是收益的地方",
      description:
        "为创作者打造的下一代音源收益平台。任何人都可以轻松注册自己的音乐，通过YouTube Shorts、TikTok、抖音等短视频向全世界曝光，自动创造收益。",
      keywords: [
        "SoundRabbit",
        "YouTube Shorts音源收益",
        "短视频音源收益网站",
        "音源发行平台",
      ],
      openGraph: {
        title: "SoundRabbit | 您的内容即是收益的地方",
        description:
          "为创作者打造的下一代音源收益平台。任何人都可以轻松注册自己的音乐，通过YouTube Shorts、TikTok、抖音等短视频向全世界曝光，自动创造收益。",
        url: "https://soundrabbitent.com/zh-CN",
        siteName: "SoundRabbit",
        locale: "zh_CN",
        type: "website",
      },
    },
  };

  const metadata = metadataByLocale[locale] || metadataByLocale.ko;

  return {
    ...metadata,
    icons: [
      { rel: "icon", url: "/logo.png" },
      { rel: "shortcut icon", url: "/logo.png" },
      { rel: "apple-touch-icon", url: "/logo.png" },
    ],
    authors: [{ name: "SoundRabbit" }],
    creator: "SoundRabbit",
    publisher: "SoundRabbit",
    twitter: {
      card: "summary_large_image",
      title: metadata.title as string,
      description: metadata.description as string,
      images: ["https://soundrabbitent.com/soundrabbit.jpeg"],
    },
    alternates: {
      canonical: metadata.openGraph?.url as string,
      languages: {
        ko: "https://soundrabbitent.com",
        ja: "https://soundrabbitent.com/ja",
        "zh-TW": "https://soundrabbitent.com/zh-TW",
        "zh-CN": "https://soundrabbitent.com/zh-CN",
      },
    },
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
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ko" | "ja" | "zh-TW" | "zh-CN")) {
    notFound();
  }

  const messages = await getMessages();

  const langMap: Record<string, string> = {
    ko: "ko",
    ja: "ja",
    "zh-TW": "zh-TW",
    "zh-CN": "zh-CN",
  };

  return (
    <html lang={langMap[locale] || "ko"}>
      <body
        className={`${noto.variable} ${inter.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
