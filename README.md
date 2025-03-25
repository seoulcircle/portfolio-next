# 🌤️ DayPalette & ⏳ TimeQuestion – Interactive Next.js Portfolio

```
src/
├── app/
│   ├── daypalette/
│   │   └── page.tsx              # DayPalette 라우트 진입점
│   └── timequestion/
│       └── page.tsx              # TimeQuestion 라우트 진입점
│
├── pages/
│   ├── DayPalette/
│   │   ├── DayPalette.tsx        # 메인 컨테이너
│   │   ├── DayApi.ts             # 외부 API 통신 유틸
│   │   ├── DayUtils.ts           # 시간, 색상 계산 등 유틸 함수
│   │   ├── styles.ts             # 공통 스타일 정의
│   │   │
│   │   ├── components/
│   │   │   ├── ColorSlider.tsx         # 시간대에 따라 색상 조절 슬라이더
│   │   │   ├── ColorSlider.style.ts    # 슬라이더 스타일 정의
│   │   │   ├── Modal.tsx               # 컬러 결과 요약 or 안내용 모달
│   │   │   └── Modal.style.ts          # 모달 스타일 정의
│   │   │
│   │   └── hooks/
│   │       ├── useColor.ts             # 시간/날씨 기반 컬러 추천 훅
│   │       ├── useTime.ts              # 현재 시간 계산 훅
│   │       └── useWeatherData.ts       # 외부 날씨 API 데이터 가져오기
│
│   └── TimeQuestion/
│       ├── TimeQuestion.tsx            # 메인 컨테이너
│       ├── styles.ts                   # 공통 스타일 정의
│       │
│       ├── components/
│       │   ├── MinuteItem.tsx              # 각 분(minute) 카드 컴포넌트
│       │   ├── MinuteItem.style.ts         # 스타일 정의
│       │   ├── RenderedMinutes.tsx         # 분 리스트 렌더링 컴포넌트
│       │   ├── RenderedMinutes.style.ts    # 스타일 정의
│       │   ├── Modal.tsx                   # 질문 응답 결과 모달
│       │   └── Modal.style.ts              # 모달 스타일 정의
│       │
│       ├── data/
│       │   └── question.json               # 시간대별 감성 질문 데이터
│       │
│       └── hooks/
│           ├── useClock.ts                # 현재 시각 제공 훅
│           ├── useMediaQuery.ts           # 반응형 판단 훅
│           ├── useQuestion.ts             # 질문 목록 로딩 및 상태 관리
│           └── useUserWrite.ts            # 사용자 응답 상태 관리
```

> `src/app/` 폴더는 Next.js의 App Router 라우팅을 담당하며,  
> 실제 비즈니스 로직과 UI는 `src/pages/*` 아래에 기능별로 정리되어 있습니다.
