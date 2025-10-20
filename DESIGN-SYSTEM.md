# 🎨 SoundRabbit Design System

> **브랜드 아이덴티티**: 크리에이터를 위한 차세대 음원 수익 플랫폼  
> **디자인 철학**: 혁신적이고 창의적이며 신뢰할 수 있는

---

## 1. 브랜드 컬러 (Brand Colors)

### Primary Purple (메인 브랜드 컬러)

우리의 핵심 아이덴티티. 창의성, 혁신, 프리미엄을 상징합니다.

| 용도           | 색상 코드 | 사용 예시                | 미리보기                                                           |
| -------------- | --------- | ------------------------ | ------------------------------------------------------------------ |
| Purple 50      | `#f5f5ff` | 배경, 호버 상태 (최연한) | ![#f5f5ff](https://via.placeholder.com/50x30/f5f5ff/000000?text=+) |
| Purple 100     | `#ebebff` | 서브틀 배경              | ![#ebebff](https://via.placeholder.com/50x30/ebebff/000000?text=+) |
| Purple 200     | `#d7d6ff` | 보더, 비활성 상태        | ![#d7d6ff](https://via.placeholder.com/50x30/d7d6ff/000000?text=+) |
| Purple 300     | `#c3c2ff` | 호버 상태 (중간)         | ![#c3c2ff](https://via.placeholder.com/50x30/c3c2ff/000000?text=+) |
| **Purple 400** | `#9c98e5` | **그래프 연한 컬러** ⭐  | ![#9c98e5](https://via.placeholder.com/50x30/9c98e5/000000?text=+) |
| **Purple 500** | `#5b54d4` | **메인 브랜드 컬러** ⭐  | ![#5b54d4](https://via.placeholder.com/50x30/5b54d4/ffffff?text=+) |
| Purple 600     | `#4a44b8` | 눌림 상태                | ![#4a44b8](https://via.placeholder.com/50x30/4a44b8/ffffff?text=+) |
| Purple 700     | `#3a359c` | 텍스트 (밝은 배경에)     | ![#3a359c](https://via.placeholder.com/50x30/3a359c/ffffff?text=+) |
| Purple 800     | `#2a2680` | 강조 텍스트              | ![#2a2680](https://via.placeholder.com/50x30/2a2680/ffffff?text=+) |
| Purple 900     | `#1a1764` | 헤딩, 최고 대비          | ![#1a1764](https://via.placeholder.com/50x30/1a1764/ffffff?text=+) |

---

## 2. 그라디언트 (Gradients)

### Primary CTA Gradient (주요 버튼용)

**지금 시작하기, 자세히 알아보기, 음원 제작 의뢰하기 버튼에 사용**

```css
background: linear-gradient(135deg, #004aad 0%, #cb6ce6 100%);
```

| 시작 색상             | 끝 색상               | 각도 | 미리보기                                                                            |
| --------------------- | --------------------- | ---- | ----------------------------------------------------------------------------------- |
| `#004AAD` (진한 블루) | `#CB6CE6` (밝은 핑크) | 135° | ![gradient](https://via.placeholder.com/300x60/004AAD/CB6CE6?text=Primary+Gradient) |

**사용 위치:**

- 주요 CTA 버튼 (지금 시작하기)
- 액션 버튼 (음원 제작 의뢰하기)
- 중요한 링크

### 보조 그라디언트

```css
/* Purple Gradient - 카드, 배지 */
background: linear-gradient(135deg, #5b54d4 0%, #9c98e5 100%);

/* Success Gradient - 성공/수익 증가 */
background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);

/* Warm Gradient - 경고/주의 */
background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);

/* Cool Gradient - 정보/알림 */
background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
```

---

## 3. 세컨더리 컬러 (Secondary Colors)

상태, 액션, 피드백을 위한 컬러

| 용도      | 색상 이름 | 기본      | 호버      | 사용 예시              |
| --------- | --------- | --------- | --------- | ---------------------- |
| 성공/긍정 | Emerald   | `#10b981` | `#059669` | 수익 증가, 완료 상태   |
| 경고/주의 | Amber     | `#f59e0b` | `#d97706` | 주의 메시지, 대기 상태 |
| 정보      | Blue      | `#3b82f6` | `#2563eb` | 정보 메시지, 링크      |
| 에러/위험 | Red       | `#ef4444` | `#dc2626` | 에러 메시지, 삭제 버튼 |

---

## 4. 다크 테마 컬러 (Dark Theme Colors)

### 배경 컬러

| 레이어               | 색상 코드 | 투명도 | 사용 예시   |
| -------------------- | --------- | ------ | ----------- |
| Primary Background   | `#000000` | 100%   | 메인 배경   |
| Secondary Background | `#0a0a0a` | 100%   | 카드 배경   |
| Tertiary Background  | `#1a1a1a` | 100%   | 상승된 표면 |

### 텍스트 컬러

| 우선순위       | 색상 코드                   | 사용 예시         |
| -------------- | --------------------------- | ----------------- |
| Primary Text   | `rgba(255, 255, 255, 0.95)` | 주요 텍스트, 헤딩 |
| Secondary Text | `rgba(255, 255, 255, 0.80)` | 본문 텍스트       |
| Tertiary Text  | `rgba(255, 255, 255, 0.60)` | 보조 텍스트, 캡션 |
| Disabled Text  | `rgba(255, 255, 255, 0.40)` | 비활성 텍스트     |

### 보더 & 구분선

| 강도           | 색상 코드                   | 사용 예시   |
| -------------- | --------------------------- | ----------- |
| Subtle Border  | `rgba(255, 255, 255, 0.05)` | 미묘한 구분 |
| Default Border | `rgba(255, 255, 255, 0.10)` | 기본 보더   |
| Strong Border  | `rgba(255, 255, 255, 0.20)` | 강조 보더   |

---

## 5. 시맨틱 컬러 (Semantic Colors)

특정 기능/의미를 가진 컬러

### 수익 & 금전 (Revenue)

| 용도      | 색상 코드 | 사용 위치              |
| --------- | --------- | ---------------------- |
| 수익 강조 | `#5b54d4` | 금액 표시, 수익 텍스트 |
| 수익 보조 | `#9c98e5` | 수익 배경, 차트 서브   |

### 차트 & 데이터 시각화

| 요소          | 색상 코드                   | 비고                             |
| ------------- | --------------------------- | -------------------------------- |
| 메인 라인     | `#5b54d4`                   | 주요 데이터 라인                 |
| 영역 채우기   | `#9c98e5`                   | 그래프 하단 채우기 (투명도 조절) |
| 데이터 포인트 | `#5b54d4`                   | 원형 포인트                      |
| 그리드 라인   | `rgba(255, 255, 255, 0.10)` | 배경 그리드                      |

---

## 6. 컴포넌트별 컬러 가이드

### 버튼 (Buttons)

#### Primary Button (주요 액션)

```css
background: linear-gradient(135deg, #004aad 0%, #cb6ce6 100%);
color: #ffffff;
border-radius: 12px;
padding: 12px 24px;

/* Hover */
opacity: 0.9;

/* Active/Pressed */
opacity: 0.8;

/* Disabled */
opacity: 0.4;
cursor: not-allowed;
```

#### Secondary Button (보조 액션)

```css
background: transparent;
border: 1px solid #5b54d4;
color: #5b54d4;

/* Hover */
background: rgba(91, 84, 212, 0.1);
```

#### Ghost Button (최소 액션)

```css
background: transparent;
border: 1px solid rgba(255, 255, 255, 0.2);
color: rgba(255, 255, 255, 0.9);

/* Hover */
background: rgba(255, 255, 255, 0.1);
```

### 카드 (Cards)

```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
backdrop-filter: blur(12px);
```

### 배지 (Badges)

```css
background: rgba(255, 255, 255, 0.1);
color: rgba(255, 255, 255, 0.7);
border-radius: 9999px;
padding: 4px 12px;
font-size: 12px;
```

### 아바타/아이콘 (Avatar/Icon)

```css
background: #5b54d4;
color: #ffffff;
border-radius: 50%;
```

---

## 7. 인터랙션 상태 (Interaction States)

모든 인터랙티브 요소에 적용되는 상태 컬러

| 상태     | 변경 사항                  | 예시             |
| -------- | -------------------------- | ---------------- |
| Default  | 기본 컬러                  | -                |
| Hover    | 밝기 +10% 또는 opacity 0.9 | 마우스 올렸을 때 |
| Active   | 밝기 -10% 또는 opacity 0.8 | 클릭하는 순간    |
| Focus    | 2px 링 컬러 `#5b54d4`      | 키보드 포커스    |
| Disabled | opacity 0.4                | 비활성 상태      |

---

## 8. 타이포그래피 컬러 (Typography Colors)

### 헤딩 (Headings)

```css
h1, h2, h3: rgba(255, 255, 255, 0.95);
font-weight: 700-900;
```

### 본문 (Body)

```css
p, span: rgba(255, 255, 255, 0.80);
font-weight: 400-500;
```

### 캡션/라벨 (Caption)

```css
small, label: rgba(255, 255, 255, 0.60);
font-weight: 400;
```

### 링크 (Links)

```css
a {
  color: #5b54d4;
  text-decoration: underline;
}

a:hover {
  color: #9c98e5;
}
```

---

## 9. 그림자 & 효과 (Shadows & Effects)

### Box Shadow

```css
/* Subtle */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

/* Default */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

/* Strong */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);

/* Glow (for buttons) */
box-shadow: 0 0 20px rgba(91, 84, 212, 0.4);
```

### Backdrop Blur

```css
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.05);
```

---

## 10. 컬러 사용 원칙 (Color Usage Principles)

### ✅ DO (권장)

- ✅ 주요 CTA는 Primary Gradient 사용
- ✅ 데이터 시각화는 Purple 500 + 400 조합
- ✅ 아이콘, 아바타는 Purple 500 배경
- ✅ 수익/금액은 Purple 500으로 강조
- ✅ 성공은 Emerald, 에러는 Red 사용
- ✅ 다크 배경 위에 충분한 대비 확보

### ❌ DON'T (지양)

- ❌ 너무 많은 컬러를 한 화면에 사용
- ❌ Primary Purple을 배경으로 사용 (텍스트 대비 문제)
- ❌ 그라디언트 남발 (특별한 경우에만)
- ❌ 낮은 대비 컬러 조합 (접근성)
- ❌ 순수 흰색(#ffffff) 사용 (눈부심)

---

## 11. 접근성 (Accessibility)

### WCAG 2.1 준수

| 배경      | 텍스트 컬러              | 대비 비율 | 등급   |
| --------- | ------------------------ | --------- | ------ |
| `#000000` | `rgba(255,255,255,0.95)` | 19.5:1    | AAA ✅ |
| `#5b54d4` | `#ffffff`                | 4.8:1     | AA ✅  |
| `#9c98e5` | `#000000`                | 9.2:1     | AAA ✅ |

### 색맹 대응

- ✅ Purple + Emerald: 구분 가능
- ✅ Purple + Red: 구분 가능
- ✅ 색상만으로 정보 전달 지양 (아이콘, 텍스트 병행)

---

## 12. 브랜드 심리학 (Brand Psychology)

### 왜 이 컬러인가?

#### 💜 Purple (#5b54d4)

- **창의성**: 음악, 예술과 연결
- **혁신**: 새로운 플랫폼의 이미지
- **프리미엄**: 고품질 서비스 느낌
- **차별화**: 경쟁사와 구별되는 아이덴티티

#### 🔵 Blue (#004AAD)

- **신뢰**: 금융 플랫폼으로서 신뢰성
- **기술**: 첨단 플랫폼 이미지
- **안정감**: 수익 정산의 안정성

#### 💗 Pink (#CB6CE6)

- **열정**: 크리에이터의 열정
- **에너지**: 젊고 역동적인 이미지
- **현대적**: 트렌디한 플랫폼

#### 🌑 Black (#000000)

- **세련됨**: 프리미엄 감성
- **집중**: 콘텐츠에 집중
- **현대성**: 모던한 디자인

---

## 13. 디자인 파일 정보

### Figma 컬러 변수명 (추천)

```
Brand/Purple/50
Brand/Purple/100
...
Brand/Purple/900

Secondary/Emerald/500
Secondary/Amber/500
Secondary/Blue/500
Secondary/Red/500

Gradient/Primary-CTA
Gradient/Purple
Gradient/Success
Gradient/Warm
Gradient/Cool

Dark/Background/Primary
Dark/Background/Secondary
Dark/Text/Primary
Dark/Text/Secondary
Dark/Border/Default
```

### Export 정보

- 로고: `/public/soundrabbit.jpeg`
- 브랜드 컬러: `#5b54d4` (Primary), `#9c98e5` (Secondary)
- 폰트: Noto Sans KR, Inter

---

## 14. 예시 적용 (Example Usage)

### 대시보드 카드

```css
.revenue-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}

.revenue-amount {
  color: #5b54d4; /* Purple 500 */
  font-size: 32px;
  font-weight: 700;
}
```

### 차트 스타일

```css
.chart-line {
  stroke: #5b54d4; /* Purple 500 */
  stroke-width: 2px;
}

.chart-area {
  fill: url(#gradient);
}

#gradient {
  stop-color: #5b54d4; /* top */
  stop-color: #9c98e5; /* bottom */
}
```

### CTA 버튼

```css
.cta-button {
  background: linear-gradient(135deg, #004aad 0%, #cb6ce6 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: opacity 0.2s;
}

.cta-button:hover {
  opacity: 0.9;
}
```

---

## 15. 참고 자료 (References)

- **WCAG 2.1 가이드라인**: https://www.w3.org/WAI/WCAG21/quickref/
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Material Design Color Tool**: https://material.io/resources/color/

---

**작성일**: 2025년 10월 20일  
**버전**: 1.0  
**담당**: SoundRabbit Design Team

---

© 2025 SoundRabbit. All rights reserved.
