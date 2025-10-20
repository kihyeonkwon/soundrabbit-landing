"use client";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const DASH_URL =
  process.env.NEXT_PUBLIC_DASH_URL ?? "https://dash.soundrabbit.com"; // .env exposure requires NEXT_PUBLIC_

// 컬러 시스템
const COLORS = {
  primary: "#5b54d4", // 메인 브랜드 컬러 (보라색)
  primaryDark: "#004AAD", // 브랜드 진한색
  primaryLight: "#9c98e5", // 브랜드 연한색
  secondary: "#10b981", // 에메랄드-500
  accent: "#f59e0b", // 앰버-500
  danger: "#ef4444", // 레드-500
  success: "#10b981", // 에메랄드-500
  warning: "#f59e0b", // 앰버-500
  info: "#3b82f6", // 블루-500

  // 포인트 컬러들
  points: {
    emerald: "#10b981",
    blue: "#3b82f6",
    rose: "#f43f5e",
    violet: "#8b5cf6",
    amber: "#f59e0b",
    teal: "#14b8a6",
    pink: "#ec4899",
  },

  // 그라디언트 컬러들
  gradients: {
    primary: "from-[#004AAD] to-[#CB6CE6]", // 지금 시작하기 버튼 그라디언트
    secondary: "from-emerald-500 to-teal-500",
    accent: "from-amber-500 to-orange-600",
    danger: "from-rose-500 to-pink-600",
    violet: "from-violet-500 to-purple-600",
  },
};

// 스크롤 애니메이션을 위한 컴포넌트
function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 카드나 개별 요소를 위한 스테거 애니메이션
function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "사운드래빗 SoundRabbit",
    alternateName: "SoundRabbit",
    url: "https://www.soundrabbit.com",
    logo: "https://www.soundrabbit.com/soundrabbit.jpeg",
    description:
      "크리에이터를 위한 차세대 음원 수익 플랫폼. 유튜브 쇼츠, 틱톡, 릴스 등 숏폼 콘텐츠를 통해 음원 수익을 자동으로 창출할 수 있습니다.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@soundrabbit.com",
      contactType: "Customer Service",
      availableLanguage: ["Korean", "English"],
    },
    sameAs: [
      "https://www.instagram.com/soundrabbit.official",
      "https://www.youtube.com/@SoundRabbitChannel",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <Nav />
        <Hero />
        <About />
        <ShortsRevenue />
        <RevenueStructure />
        <CustomMusic />
        <RealtimeDashboard />
        <Testimonials />
        <HowTo />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="wrapper flex items-center justify-between py-4">
        <Link href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SoundRabbit"
            width={36}
            height={36}
            priority
            className="brightness-0 invert"
          />
          <span className="text-white/90 font-semibold tracking-wide">
            SoundRabbit
          </span>
        </Link>
        <nav
          className="hidden md:flex items-center gap-6 text-white/70"
          aria-label="주요 섹션"
        >
          <a
            href="#about"
            className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-1"
          >
            서비스 소개
          </a>
          <a
            href="#pricing"
            className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-1"
          >
            수익 구조
          </a>
          <a
            href="#how"
            className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-1"
          >
            이용방법
          </a>
          <a
            href="#faq"
            className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-1"
          >
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={`${DASH_URL}/login`} className="button-ghost">
            로그인
          </a>
          <a href={`${DASH_URL}/signup`} className="button-primary">
            지금 시작하기
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="section relative min-h-screen flex items-center"
      aria-label="메인 배너"
    >
      {/* 배경 비디오 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4" /* CDN 권장 */
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="wrapper relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge mb-4">모든 크리에이터를 위한 새로운 수익</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            SoundRabbit
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/80">
            음원을 쓰기만 해도 수익이 따라오는 플랫폼.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={`${DASH_URL}/signup`} className="button-primary">
              지금 시작하기
            </a>
            <a href="#about" className="button-ghost">
              서비스 살펴보기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const slider = [
    { title: "유튜브 쇼츠", icon: "▶", color: "#ef4444" },
    { title: "브이로그", icon: "📹", color: "#f59e0b" },
    { title: "광고 영상", icon: "📢", color: "#10b981" },
  ];
  return (
    <section id="about" className="section" aria-label="서비스 소개">
      <div className="wrapper grid md:grid-cols-2 gap-10 items-center">
        <ScrollReveal>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              What is SoundRabbit?
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              유튜브, 쇼츠, 브이로그, 광고 등 다양한 콘텐츠에서 음원을 활용하고
              수익을 창출할 수 있는 크리에이터 수익화 플랫폼입니다.
            </p>
            <p className="mt-4 text-white/60">
              콘텐츠를 만들기만 해도 수익이 따라오는 시대, 지금 사운드래빗에서
              시작하세요.
            </p>
            <div className="mt-6">
              <a href={`${DASH_URL}/signup`} className="button-primary">
                자세히 알아보기
              </a>
            </div>
          </div>
        </ScrollReveal>
        {/* 미니 슬라이더 */}
        <ScrollReveal delay={0.2}>
          <div className="card p-6">
            <div className="overflow-x-auto flex gap-4 snap-x">
              {slider.map((item, i) => (
                <motion.div
                  key={i}
                  className="min-w-[260px] h-56 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center snap-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div
                    className="mt-3 font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </div>
                  <div className="text-sm text-white/60">미리보기</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ShortsRevenue() {
  const points = [
    {
      title: "누구나 무료 사용 가능",
      desc: "회원가입만으로 모든 음원을 무료로 사용",
      color: COLORS.points.emerald,
    },
    {
      title: "조회수 기반 자동 수익",
      desc: "영상 조회수에 따라 자동 정산",
      color: COLORS.points.blue,
    },
    {
      title: "쇼츠/롱폼 즉시 적용",
      desc: "복잡한 등록 없이 바로 사용",
      color: COLORS.points.rose,
    },
  ];
  return (
    <section className="section" aria-label="핵심 포인트">
      <div className="wrapper">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            사용만 해도 수익 발생
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-center text-white/70">
            영상이 재생되면 조회수에 따라 수익이 자동 정산됩니다.
          </p>
        </ScrollReveal>
        <StaggerReveal
          className="mt-10 grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {points.map((p) => (
            <motion.div
              key={p.title}
              className="card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="text-sm badge mb-3"
                style={{
                  color: p.color,
                  backgroundColor: `${p.color}20`,
                }}
              >
                POINT
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function RevenueStructure() {
  return (
    <section id="pricing" className="section" aria-label="수익 구조">
      <div className="wrapper grid md:grid-cols-2 gap-10 items-center">
        <ScrollReveal>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              높은 정산, 확실한 수익
            </h2>
            <p className="mt-4 text-white/70">
              중간 유통사 없이 직접 정산하여 최대 수익을 돌려드립니다.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                ✔ 업계 최고 수익률
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                ✔ 타사 대비 최대 5배 수익
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ✔ 정산 수수료 0%
              </motion.li>
            </ul>
          </div>
        </ScrollReveal>
        {/* 심플 바 차트 */}
        <ScrollReveal delay={0.3}>
          <div className="card p-6">
            <h4 className="font-semibold text-white/80">수익률 비교</h4>
            <div className="mt-6 grid grid-cols-2 gap-6 items-end h-52">
              <Bar label="업계 평균" ratio={0.4} color="#9ca3af" />
              <Bar label="사운드래빗" ratio={1.0} color={COLORS.primary} />
            </div>
            <div
              className="mt-6 text-center font-semibold"
              style={{ color: COLORS.points.rose }}
            >
              정산 수수료 0%
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Bar({
  label,
  ratio,
  color,
}: {
  label: string;
  ratio: number;
  color: string;
}) {
  // Clamp ratio between 0.1 and 1, then map to 0..160px
  const r = Math.max(0.1, Math.min(1, ratio));
  const height = r * 160; // px
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className="w-16 rounded-lg"
        style={{ background: color }}
        initial={{ height: 0 }}
        whileInView={{ height }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="text-sm text-white/80 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
    </div>
  );
}

function CustomMusic() {
  const items = [
    { title: "광고", emoji: "📢", gradient: COLORS.gradients.accent },
    { title: "브이로그", emoji: "📹", gradient: COLORS.gradients.secondary },
    { title: "쇼츠", emoji: "▶", gradient: COLORS.gradients.danger },
    { title: "게임", emoji: "🎮", gradient: COLORS.gradients.violet },
  ];
  return (
    <section className="section" aria-label="맞춤 음원 제작">
      <div className="wrapper">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            맞춤 음원 제작 서비스
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-3 text-center text-white/70">
            영상 분위기/감정/장르에 맞춰 전문 작곡가가 제작합니다.
          </p>
        </ScrollReveal>
        <StaggerReveal
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          staggerDelay={0.1}
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              className="card p-6 text-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${it.gradient} flex items-center justify-center text-3xl`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {it.emoji}
              </motion.div>
              <div className="mt-3 font-semibold">{it.title}</div>
            </motion.div>
          ))}
        </StaggerReveal>
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-10">
            <a href={`${DASH_URL}/custom-music`} className="button-primary">
              음원 제작 의뢰하기
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function RealtimeDashboard() {
  const revenueData = useMemo(() => {
    // 시드 기반 의사 난수 생성 (deterministic)
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
      return x - Math.floor(x) - 0.5;
    };

    const data = [];
    const today = new Date();

    for (let i = 89; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      const baseRevenue = 50 + Math.sin(i / 30) * 20; // 월간 주기
      const weeklyPattern = Math.sin(i / 7) * 10; // 주간 패턴
      const randomVariation = seededRandom(i) * 30; // 결정적 난수
      const growth = i < 30 ? (30 - i) * 2 : 0; // 최근 성장 트렌드

      const revenue = Math.max(
        0,
        baseRevenue + weeklyPattern + randomVariation + growth
      );

      data.push({
        date: date.toISOString().split("T")[0],
        revenue: Math.round(revenue * 100) / 100,
        displayDate: date.getDate(),
      });
    }

    return data;
  }, []);

  const last90 = revenueData.slice(-90);
  const lastIndex = last90.length - 1;

  const maxRevenue = last90.length
    ? Math.max(...last90.map((d) => d.revenue))
    : 0;
  const minRevenue = last90.length
    ? Math.min(...last90.map((d) => d.revenue))
    : 0;
  const total = Math.max(last90.length - 1, 1);

  const xForIndex = (i: number) => (i / total) * 100;
  const yForRevenue = (rev: number) =>
    40 - ((rev - minRevenue) / (maxRevenue - minRevenue || 1)) * 36 - 2;

  const linePoints = last90
    .map((point, i) => `${xForIndex(i)},${yForRevenue(point.revenue)}`)
    .join(" ");
  const fillPoints = `0,40 ${linePoints} 100,40`;

  const today = new Date();
  const dayMs = 24 * 60 * 60 * 1000;

  const daysBeforeTicks = Array.from(
    new Set([0, 30, 60, lastIndex].filter((offset) => offset >= 0))
  ).sort((a, b) => a - b);

  const indexForDaysBefore = (daysBefore: number) =>
    Math.max(lastIndex - daysBefore, 0);

  const averageRevenue =
    last90.length > 0
      ? last90.reduce((sum, d) => sum + d.revenue, 0) / last90.length
      : 0;

  const todayRevenue = last90[lastIndex]?.revenue ?? 0;
  const weeklyRevenue = last90
    .slice(Math.max(last90.length - 7, 0))
    .reduce((sum, d) => sum + d.revenue, 0);
  const monthlyRevenue = last90
    .slice(Math.max(last90.length - 30, 0))
    .reduce((sum, d) => sum + d.revenue, 0);

  const formatCurrency = (value: number) =>
    `$${Math.round(value).toLocaleString("en-US")}`;

  const stats = [
    {
      label: "오늘 예상 정산액",
      value: formatCurrency(todayRevenue),
      helper: "실시간 집계 기준",
    },
    {
      label: "최근 7일 수익",
      value: formatCurrency(weeklyRevenue),
      helper: "조회수 기반 자동 정산",
    },
    {
      label: "최근 30일 수익",
      value: formatCurrency(monthlyRevenue),
      helper: "상승 추세 반영",
    },
  ];

  return (
    <section className="section" aria-label="실시간 수익 대시보드">
      <div className="wrapper">
        <ScrollReveal delay={0.2}>
          <StaggerReveal
            className="mt-6 grid gap-4 md:grid-cols-3"
            staggerDelay={0.12}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card p-5 bg-white/5 border border-white/10"
              >
                <div className="text-sm text-white/50">{stat.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white/90">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/40">{stat.helper}</div>
              </div>
            ))}
          </StaggerReveal>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="card p-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white/80 font-semibold">
                최근 90일 수익 추세
              </div>
              <div className="text-sm text-white/60">
                최고: ${Math.round(maxRevenue)} | 최저: $
                {Math.round(minRevenue)}
              </div>
            </div>
            <motion.div
              className="mt-3 h-64 w-full bg-white/5 rounded-xl overflow-hidden relative p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-1 top-4 bottom-4 flex flex-col justify-between text-xs text-white/40">
                <span>${Math.round(maxRevenue)}</span>
                <span>${Math.round((maxRevenue + minRevenue) / 2)}</span>
                <span>${Math.round(minRevenue)}</span>
              </div>

              <div className="absolute bottom-1 left-6 right-2 flex justify-between text-xs text-white/40">
                {daysBeforeTicks.map((daysBefore) => (
                  <span key={daysBefore}>
                    {new Date(
                      today.getTime() - daysBefore * dayMs
                    ).toLocaleDateString("ko-KR", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                ))}
              </div>

              <div className="ml-6 mr-2 mt-2 mb-6 h-48 relative">
                <svg
                  viewBox="0 0 100 40"
                  className="absolute inset-0 w-full h-full"
                  role="img"
                  aria-label="90일 수익 추세 그래프"
                >
                  <defs>
                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#5b54d4" stopOpacity="0.4" />
                      <stop
                        offset="100%"
                        stopColor="#9c98e5"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g opacity="0.1">
                    <line
                      x1="0"
                      y1="10"
                      x2="100"
                      y2="10"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="0"
                      y1="20"
                      x2="100"
                      y2="20"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="0"
                      y1="30"
                      x2="100"
                      y2="30"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    {daysBeforeTicks.map((daysBefore) => (
                      <line
                        key={daysBefore}
                        x1={xForIndex(indexForDaysBefore(daysBefore))}
                        y1="0"
                        x2={xForIndex(indexForDaysBefore(daysBefore))}
                        y2="40"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    ))}
                  </g>

                  <motion.polygon
                    fill="url(#revenueGradient)"
                    points={fillPoints}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />

                  <motion.polyline
                    fill="none"
                    stroke="#5b54d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={linePoints}
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />

                  {last90.map((point, i) =>
                    i % 5 === 0 ? (
                      <motion.circle
                        key={i}
                        cx={xForIndex(i)}
                        cy={yForRevenue(point.revenue)}
                        r="1.5"
                        fill="#5b54d4"
                        stroke="white"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.8 + (i / 5) * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.5, opacity: 0.8 }}
                      />
                    ) : null
                  )}
                </svg>
              </div>

              <div className="absolute bottom-8 right-4 text-xs text-white/60 space-y-1">
                <div>
                  평균 일수익: $
                  {Math.round(averageRevenue).toLocaleString("en-US")}
                </div>
                <div className="text-emerald-400">↗ 지난 30일 대비 +24%</div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: '"쇼츠 수익까지 챙길 수 있어 만족합니다."',
      name: "크리에이터 A",
      role: "게임 크리에이터",
    },
    {
      quote: '"음원 제작 퀄리티가 방송국급이에요."',
      name: "유튜버 B",
      role: "음악 크리에이터",
    },
    {
      quote: '"콘텐츠 퀄리티도 높이고 수익도 올렸습니다."',
      name: "숏폼 제작자 C",
      role: "브이로그 크리에이터",
    },
  ];
  return (
    <section className="section" aria-label="크리에이터 후기">
      <div className="wrapper">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            크리에이터들의 리얼 후기
          </h2>
        </ScrollReveal>
        <StaggerReveal
          className="mt-10 grid md:grid-cols-3 gap-6"
          staggerDelay={0.2}
        >
          {items.map((t) => (
            <motion.div
              key={t.name}
              className="card p-6"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-4xl opacity-40"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                &ldquo;
              </motion.div>
              <p className="mt-2 text-white/90 leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#5b54d4" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t.name.slice(-1)}
                </motion.div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function HowTo() {
  const steps = [
    {
      n: "1",
      title: "회원가입 & 음원 사용 시작",
      desc: "모든 음원을 무료로 사용",
      gradient: COLORS.gradients.primary,
    },
    {
      n: "2",
      title: "영상 업로드 & 수익 집계",
      desc: "조회수 기반 자동 정산",
      gradient: COLORS.gradients.secondary,
    },
    {
      n: "3",
      title: "주간 자동 정산",
      desc: "정기적으로 수익 수령",
      gradient: COLORS.gradients.violet,
    },
  ];
  return (
    <section id="how" className="section" aria-label="이용 방법">
      <div className="wrapper">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            이용 방법 – 쉬운 3단계
          </h2>
        </ScrollReveal>
        <StaggerReveal
          className="mt-10 grid md:grid-cols-3 gap-6"
          staggerDelay={0.2}
        >
          {steps.map((s, index) => (
            <motion.div
              key={s.n}
              className="card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center font-extrabold`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {s.n}
              </motion.div>
              <div className="mt-4 font-semibold">{s.title}</div>
              <div className="text-sm text-white/70">{s.desc}</div>
            </motion.div>
          ))}
        </StaggerReveal>
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <a href={`${DASH_URL}/signup`} className="button-primary">
              지금 시작하기
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "정산은 어떻게 이뤄지나요?",
      a: "영상 조회 데이터를 기반으로 주간 단위 자동 정산됩니다.",
    },
    {
      q: "상업적 이용 가능한가요?",
      a: "네, SoundRabbit 내 제공 음원은 약관 범위에서 상업적 이용이 가능합니다.",
    },
    {
      q: "저작권 문제는 없나요?",
      a: "콘텐츠 ID 및 배포 파트너십을 통해 안전하게 관리됩니다.",
    },
  ];
  return (
    <section id="faq" className="section" aria-label="자주 묻는 질문">
      <div className="wrapper">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">FAQ</h2>
        </ScrollReveal>
        <StaggerReveal className="mt-8 space-y-3" staggerDelay={0.1}>
          {items.map((it, idx) => (
            <motion.details
              key={idx}
              className="card p-5 group open:shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <summary className="cursor-pointer font-semibold list-none flex items-center justify-between">
                <span>{it.q}</span>
                <motion.span
                  className="text-white/40 group-open:rotate-180 transition"
                  whileHover={{ scale: 1.2 }}
                >
                  ⌄
                </motion.span>
              </summary>
              <motion.p
                className="mt-3 text-white/70 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {it.a}
              </motion.p>
            </motion.details>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section pb-16" aria-label="푸터">
      <div className="wrapper">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
            <motion.a
              href="#about"
              className="hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              서비스 소개
            </motion.a>
            <motion.a
              href="#pricing"
              className="hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              이용약관
            </motion.a>
            <motion.a
              href="#faq"
              className="hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              개인정보처리방침
            </motion.a>
            <motion.a
              href="#faq"
              className="hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              FAQ
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              문의하기
            </motion.a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-8 space-y-1 text-sm text-white/60">
            <div>Email: contact@soundrabbit.com</div>
            <div>Instagram: @soundrabbit.official</div>
            <div>YouTube: SoundRabbit Channel</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/50">
            © {new Date().getFullYear()} SoundRabbit. All rights reserved.
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
