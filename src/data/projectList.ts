export interface Project {
  index: number;
  id: string;
  name: string;
  route: string;
}

export const projects: Project[] = [
  {
    index: 0,
    id: "honglee",
    name: "Hong Lee",
    route: "/honglee",
  },
  {
    index: 5,
    id: "developer",
    name: "Frontend Developer",
    route: "/developer",
  },
  {
    index: 10,
    id: "archive",
    name: "Archive",
    route: "/archive",
  },
  {
    index: 20,
    id: "daypalette",
    name: "Day Palette",
    route: "/daypalette",
  },
  {
    index: 25,
    id: "timequestion",
    name: "Minute Question",
    route: "/timequestion",
  },
  {
    index: 35,
    id: "archive2",
    name: "Archive2",
    route: "/archive2",
  },
  {
    index: 45,
    id: "alphabet",
    name: "Falling Alphabet",
    route: "/falling",
  },
];
