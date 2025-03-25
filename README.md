DayPalette/
├── components/ # UI 컴포넌트
│ ├── ColorSlider.tsx # 시간대에 따라 색상 조절 가능한 슬라이더
│ ├── ColorSlider.style.ts # 슬라이더 스타일 정의
│ ├── Modal.tsx # 컬러 결과 요약 or 선택 안내 모달
│ └── Modal.style.ts # 모달 스타일 정의
│
├── hooks/ # 커스텀 훅
│ ├── useColor.ts # 시간 및 날씨에 따른 컬러 추천 훅
│ ├── useTime.ts # 현재 시간 계산 및 포맷팅 훅
│ └── useWeatherData.ts # 외부 API를 통한 날씨 정보 가져오기
│
├── DayApi.ts # 날씨 등 외부 API 통신 유틸
├── DayPalette.tsx # 메인 컨테이너 컴포넌트
├── DayUtils.ts # 시간, 색상 계산 등 공통 유틸 함수
├── styles.ts # 공통 스타일 정의

TimeQuestion/
├── components/ # UI 컴포넌트들
│ ├── MinuteItem.tsx # 각 분(minute)을 표현하는 카드 컴포넌트
│ ├── MinuteItem.style.ts # MinuteItem 스타일 정의
│ ├── RenderedMinutes.tsx # 분 단위 리스트 렌더링 (중앙 정렬 등 분기 처리)
│ ├── RenderedMinutes.style.ts # RenderedMinutes 스타일 정의
│ ├── Modal.tsx # 저장된 답변을 보여주는 모달 컴포넌트
│ └── Modal.style.ts # Modal 스타일 정의
│
├── data/
│ └── question.json # 시간별 질문 목록 (랜덤 또는 정적 질문)
│
├── hooks/ # 커스텀 훅
│ ├── useClock.ts # 현재 시간(hour, minute) 제공
│ ├── useMediaQuery.ts # 반응형 판단 훅 (isMobile 등)
│ ├── useQuestion.ts # 질문 목록 로딩 및 관리 훅
│ ├── useUserWrite.ts # 사용자 작성 데이터 상태 관리 훅
│ └── styles.ts # 공통 스타일 (breakpoints 등)
│
├── TimeQuestion.tsx # 메인 컨테이너 컴포넌트
