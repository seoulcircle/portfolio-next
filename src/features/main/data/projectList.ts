import { Project } from "../types/main.types";

export const projects: Project[] = [
  {
    index: 0,
    id: "honglee",
    name: "Hong Lee",
    description:
      "안녕하세요! 저는 <strong>이홍</strong>입니다.</br><p>변화하는 환경 속에서 <strong>본질</strong>에 집중하고, <strong>작은 차이</strong>가 큰 가치를 만든다고 믿습니다.<br/>떠오르는 아이디어는 바로 <strong>실행</strong>에 옮기고 <strong>결과</strong>로 연결합니다.</br>다양한 경험을 바탕으로 조화롭고 효율적인 해결책을 만드려고 노력합니다.</p>",
    thumbnail: "/images/honglee.png",
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
    id: "archive",
    name: "Archive",
    route: "/archive",
    description: "Archive1",
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
    thumbnail: "/images/daypalette.png",
  },
  {
    index: 25,
    id: "timequestion",
    name: "Minute Question",
    route: "/timequestion",
    description:
      "시간 단위 상태 관리, 분별 업데이트, 랜덤 콘텐츠 처리 로직을 포함한 시간 기반 인터랙티브 UI",
    stack: ["React", "TypeScript", "Emotion", "Framer Motion"],
    thumbnail: "/images/timequestion.png",
  },
  {
    index: 35,
    id: "archive2",
    name: "Archive2",
    route: "/archive2",
    description: "Archive2",
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
      "React-dnd",
    ],
    api: ["Papago API"],
    thumbnail: "/images/alphabet.png",
  },
];
