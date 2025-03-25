📁 DayPalette (Next.js 구조 기준)

<pre><code>src/ ├── app/ │ └── daypalette/ │ └── page.tsx # DayPalette 라우트 진입점 │ ├── pages/ │ └── DayPalette/ │ ├── DayPalette.tsx # 메인 컨테이너 컴포넌트 │ ├── DayApi.ts # 날씨 등 외부 API 통신 유틸 │ ├── DayUtils.ts # 시간, 색상 계산 등 공통 유틸 함수 │ ├── styles.ts # 공통 스타일 정의 │ │ │ ├── components/ # UI 컴포넌트 │ │ ├── ColorSlider.tsx # 시간대에 따라 색상 조절 가능한 슬라이더 │ │ ├── ColorSlider.style.ts # 슬라이더 스타일 정의 │ │ ├── Modal.tsx # 컬러 결과 요약 or 안내 모달 │ │ └── Modal.style.ts # 모달 스타일 정의 │ │ │ └── hooks/ # 커스텀 훅 │ ├── useColor.ts # 시간 및 날씨에 따른 컬러 추천 훅 │ ├── useTime.ts # 현재 시간 계산 및 포맷팅 훅 │ └── useWeatherData.ts # 외부 API로 날씨 정보 가져오기 </code></pre>

📁 TimeQuestion (Next.js 구조 기준)

<pre><code>src/ ├── app/ │ └── timequestion/ │ └── page.tsx # TimeQuestion 라우트 진입점 │ ├── pages/ │ └── TimeQuestion/ │ ├── TimeQuestion.tsx # 메인 컨테이너 컴포넌트 │ ├── styles.ts # 공통 스타일 (breakpoints 등) │ │ │ ├── components/ # UI 컴포넌트 │ │ ├── MinuteItem.tsx # 각 분(minute) 카드 │ │ ├── MinuteItem.style.ts # 스타일 정의 │ │ ├── RenderedMinutes.tsx # 분 리스트 렌더링 │ │ ├── RenderedMinutes.style.ts# 스타일 정의 │ │ ├── Modal.tsx # 답변 요약 모달 │ │ └── Modal.style.ts # 모달 스타일 정의 │ │ │ ├── data/ │ │ └── question.json # 시간별 질문 목록 │ │ │ └── hooks/ # 커스텀 훅 │ ├── useClock.ts # 현재 시간 제공 │ ├── useMediaQuery.ts # 반응형 판단 훅 │ ├── useQuestion.ts # 질문 로딩 및 관리 훅 │ └── useUserWrite.ts # 사용자 답변 상태 관리 훅 </code></pre>
