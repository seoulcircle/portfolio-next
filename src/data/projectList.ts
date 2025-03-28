export interface Project {
  index: number;
  id: string;
  name: string;
  route: string;
  description: string;
  stack?: string[];
  api?: string[];
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    index: 0,
    id: "honglee",
    name: "Hong Lee",
    route: "/projects/honglee",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 색상값으로 표현한 UI 대시보드",
  },
  {
    index: 5,
    id: "developer",
    name: "Frontend Developer",
    route: "/projects/developer",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 색상값으로 표현한 UI 대시보드",
  },
  {
    index: 10,
    id: "archive",
    name: "Archive",
    route: "/projects/archive",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 색상값으로 표현한 UI 대시보드",
  },
  {
    index: 20,
    id: "daypalette",
    name: "Day Palette",
    route: "/projects/daypalette",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 색상값으로 표현한 UI 대시보드",
    stack: ["React", "TypeScript", "Emotion", "Framer Motion"],
    api: ["OpenWeather API", "AirKorea API"],
    thumbnail: "/images/daypalette.png",
  },
  {
    index: 25,
    id: "timequestion",
    name: "Minute Question",
    route: "/projects/timequestion",
    description:
      "24시간을 기반으로 시간대별 인터랙션과 질문이 달라지는 시계형 UI 컴포넌트",
    stack: ["React", "TypeScript", "Emotion", "Framer Motion"],
  },
  {
    index: 35,
    id: "archive2",
    name: "Archive2",
    route: "/projects/archive2",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 색상값으로 표현한 UI 대시보드",
  },
  {
    index: 45,
    id: "alphabet",
    name: "Falling Alphabet",
    route: "/projects/falling",
    description:
      "하루의 날씨와 미세먼지 데이터를 시각화하여 색상값으로 표현한 UI 대시보드",
    stack: ["React", "TypeScript", "Emotion", "Framer Motion"],
  },
];
