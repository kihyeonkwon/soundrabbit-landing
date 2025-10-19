# 사운드래빗 SEO 설정 가이드

## ✅ 완료된 작업

### 1. 메타데이터 최적화 (src/app/layout.tsx)
- ✅ 페이지 제목: "사운드래빗 | 당신의 콘텐츠가 곧 수익이 되는 곳"
- ✅ 상세 설명 (description) 추가
- ✅ SEO 키워드 16개 추가:
  - 사운드래빗, SoundRabbit
  - 유튜브 쇼츠 음원 수익, 숏폼 음원 수익 사이트
  - 음원 유통 플랫폼, 크리에이터 음원 수익
  - 틱톡 음원 수익, 릴스 음원 등록
  - 짤스튜디오 대체, 뮤직플렉스 대체, 크리워드 대체
  - 유튜브 쇼츠 음악 등록, 음원 수익 정산
  - 크리에이터 수익분배, 음악 유통, 음원 저작권 관리

### 2. Open Graph 메타태그 설정
- ✅ OG 제목, 설명, 이미지 설정
- ✅ 로고 이미지: /soundrabbit.jpeg (1200x630)
- ✅ 한국어 로케일 (ko_KR) 설정

### 3. Twitter Card 설정
- ✅ 트위터 카드 타입: summary_large_image
- ✅ 트위터 전용 메타데이터 추가

### 4. 구조화된 데이터 (JSON-LD Schema.org)
- ✅ Organization 스키마 추가
- ✅ 연락처 정보, 소셜 미디어 링크 포함

### 5. robots.txt 생성
- ✅ 모든 검색엔진 크롤링 허용
- ✅ Googlebot, Yeti(네이버), Bingbot 설정

### 6. sitemap.xml 생성
- ✅ 메인 페이지 및 주요 섹션 URL 포함
- ✅ 우선순위 및 업데이트 빈도 설정

## 📋 추가로 해야 할 작업

### 1. 네이버 서치어드바이저 등록
1. https://searchadvisor.naver.com/ 접속
2. 사이트 등록: www.soundrabbit.com
3. 소유권 확인 (HTML 태그 방식 추천)
4. 확인 코드를 받으면 `src/app/layout.tsx`의 `verification.naver` 주석 해제 후 코드 입력
```typescript
verification: {
  naver: "여기에_네이버_인증코드_입력",
},
```

### 2. 구글 서치 콘솔 등록
1. https://search.google.com/search-console 접속
2. 도메인 또는 URL 접두어로 등록
3. 소유권 확인
4. 확인 코드를 받으면 `src/app/layout.tsx`의 `verification.google` 주석 해제 후 코드 입력

### 3. 사이트맵 제출
- 네이버 서치어드바이저: https://www.soundrabbit.com/sitemap.xml 제출
- 구글 서치 콘솔: https://www.soundrabbit.com/sitemap.xml 제출

### 4. 소셜 미디어 연동 확인
현재 JSON-LD에 포함된 소셜 미디어:
- Instagram: https://www.instagram.com/soundrabbit.official
- YouTube: https://www.youtube.com/@SoundRabbitChannel

실제 계정이 다르다면 `src/app/page.tsx`의 jsonLd 부분 수정 필요

### 5. 추가 권장 사항
- [ ] Google Analytics 설정 (GA4)
- [ ] Google Tag Manager 설정
- [ ] Naver Analytics 설정
- [ ] Facebook Pixel (Meta Pixel) 설정 (광고 운영 시)
- [ ] 웹마스터 도구에서 주요 키워드 모니터링
- [ ] 백링크 구축 (블로그, 뉴스, 파트너십)

## 🎯 SEO 키워드 전략

### 타겟 키워드
1. **메인 키워드**
   - 사운드래빗, SoundRabbit
   - 음원 수익 플랫폼
   - 크리에이터 음원 수익

2. **롱테일 키워드**
   - 유튜브 쇼츠 음원 수익
   - 숏폼 음원 수익 사이트
   - 틱톡 음원 수익

3. **경쟁사 대체 키워드**
   - 짤스튜디오 대체
   - 뮤직플렉스 대체
   - 크리워드 대체

## 📊 모니터링 체크리스트
- [ ] 네이버 검색 노출 확인 (1-2주 소요)
- [ ] 구글 검색 노출 확인 (3-7일 소요)
- [ ] 웹마스터 도구에서 인덱싱 상태 확인
- [ ] 페이지 로딩 속도 최적화 (Lighthouse 점수 90+ 목표)
- [ ] 모바일 최적화 확인
- [ ] Core Web Vitals 점수 확인

## 🔗 유용한 링크
- 네이버 서치어드바이저: https://searchadvisor.naver.com/
- 구글 서치 콘솔: https://search.google.com/search-console
- Lighthouse 검사: Chrome DevTools > Lighthouse
- Schema.org 검증: https://validator.schema.org/

---
작업 완료 날짜: 2025년 10월 20일
