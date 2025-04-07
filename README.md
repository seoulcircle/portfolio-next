# https://honglee.vercel.app/

```
│
├── src/                          # 소스 코드
│   ├── app/                      # Next.js App Router 라우팅
│   ├── features/                 # 기능별 모듈 (비즈니스 로직 및 UI)
│   │   ├── daypalette/           # DayPalette - 날씨, 미세먼지 데이터 기반 그라디언트 모달
│   │   ├── timequestion/         # TimeQuestion - 시간 기반 실시간 질문
│   │   ├── alphabet/             # 물리, dndkit 기반 알파벳 인터렉션과 단어 번역
│   │   └── main/                 # 초점으로 조절하는 메인 페이지 기능
│   ├── assets/                   # 이미지 및 리소스 파일
│   ├── components/               # 공통 컴포넌트
│   ├── emotion/                  # 이모션 테마 설정
│   ├── hooks/                    # 공통 훅
│   └── styles/                   # 글로벌 스타일
│
├── public/                       # 정적 파일 디렉토리
├── .next/                        # Next.js 빌드 결과물
├── node_modules/                 # 의존성 패키지
├── package.json                  # 프로젝트 설정 및 의존성 정보
├── next.config.js                # Next.js 설정
├── tsconfig.json                 # TypeScript 설정
└── .env.local                    # 환경 변수
```

> `src/app/` 폴더는 Next.js의 App Router 라우팅을 담당하며,  
> 실제 비즈니스 로직과 UI는 `src/features/*` 아래에 기능별로 정리되어 있습니다.
