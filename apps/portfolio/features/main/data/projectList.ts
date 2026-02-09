// src/data/projects.ts
import { Project } from "../types/main.types";
import hongleeThumb from "@assets/images/honglee.png";
import daypaletteThumb from "@assets/images/daypalette.png";
import timequestionThumb from "@assets/images/timequestion.png";
import alphabetThumb from "@assets/images/alphabet.png";
import storybookThumb from "@assets/images/storybook.png";

export const projects: Project[] = [
  {
    index: 0,
    id: "honglee",
    name: "Hong Lee",
    description:
      "안녕하세요! 저는 3년차 프론트엔드 개발자 이홍입니다.</br><p>검색 플랫폼에서 정보 정확도, UI 일관성, 탐색 흐름 최적화 중심의 개발을 해왔습니다.<br/><p>긍정적인 사용자 경험을 구현하고, 이를 비즈니스 가치로 연결하는 것을 고민합니다.</p><p>떠오르는 생각은 즉시 실행에 옮겨 결과로 만들어내려고 노력합니다.</p>",
    thumbnail: hongleeThumb,
  },
  {
    index: 5,
    id: "developer",
    name: "Frontend Developer",
    route: "/developer",
    description: "",
  },
  {
    index: 10,
    id: "design",
    name: "Design System",
    route: "https://portfolio-next-storybook.vercel.app",
    description:
      "Figma 디자인 토큰을 CSS 변수로 자동 변환해 테마 대응 및 스타일 기준을 통일한 디자인 시스템 구축. Storybook으로 컴포넌트 구조를 문서화하고, 모노레포 환경에서 GitHub Actions 기반 정적/동적 서비스 분리 배포 자동화 구현.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Emotion",
      "Framer Motion",
      "Storybook",
      "Figma",
      "GitHub Actions",
      "Vercel",
      "pnpm",
    ],
    thumbnail: storybookThumb,
    git: "https://github.com/seoulcircle/portfolio-next/tree/master/tokens",
    velog:
      "https://velog.io/@solarine064/프론트엔드의-디자인-시스템-자동화1-Figma-GitHub-Storybook",
  },
  {
    index: 20,
    id: "daypalette",
    name: "Day Palette",
    route: "/daypalette",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 그라디언트 색상값으로 표현한 UI 대시보드",
    stack: ["React", "TypeScript", "Emotion", "Framer Motion"],
    api: ["OpenWeather API", "AirKorea API"],
    thumbnail: daypaletteThumb,
    git: "https://github.com/seoulcircle/portfolio-next/tree/master/apps/portfolio/features/daypalette",
  },
  {
    index: 25,
    id: "timequestion",
    name: "Minute Question",
    route: "/timequestion",
    description:
      "시간 단위 상태 관리, 분별 업데이트, 랜덤 콘텐츠 처리 로직을 포함한 시간 기반 인터랙티브 UI",
    stack: ["React", "TypeScript", "Emotion", "Framer Motion"],
    thumbnail: timequestionThumb,
    git: "https://github.com/seoulcircle/portfolio-next/tree/master/apps/portfolio/features/timequestion",
  },
  {
    index: 35,
    id: "dots",
    name: "Connecting the Dots",
    description: "",
  },
  {
    index: 45,
    id: "alphabet",
    name: "Balling Alphabet",
    route: "/alphabet",
    description:
      "드래그 앤 드롭, 중력 물리 인터랙션과 실시간 번역 기능이 결합된 단어 조합 웹 인터페이스",
    stack: [
      "React",
      "TypeScript",
      "Emotion",
      "Framer Motion",
      "Matter.js",
      "DND Kit",
    ],
    api: ["Papago API"],
    thumbnail: alphabetThumb,
    git: "https://github.com/seoulcircle/portfolio-next/tree/master/apps/portfolio/features/alphabet",
  },
];
