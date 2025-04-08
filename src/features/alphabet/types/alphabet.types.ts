import { HTMLAttributes } from "react";
export interface ResizeWallsProps {
  engineRef: React.MutableRefObject<Matter.Engine>;
  wallsRef: React.MutableRefObject<{
    floor: Matter.Body;
    leftWall: Matter.Body;
    rightWall: Matter.Body;
  } | null>;
  width: number;
  height: number;
  charBodies: { body: Matter.Body }[];
}

export interface UseAlphabetMatterProps {
  engineRef: React.MutableRefObject<Matter.Engine>;
  sceneRef: React.RefObject<HTMLDivElement | null>;
  width: number;
  height: number;
  walls: {
    floor: Matter.Body;
    leftWall: Matter.Body;
    rightWall: Matter.Body;
  };
}

export interface CharBody {
  body: Matter.Body;
  char: string;
  bgColor?: string;
  textColor?: string;
}

export interface DraggableProps {
  id: string;
  char: string;
  x: number;
  y: number;
  bgColor?: string;
  textColor?: string;
  isActive?: boolean;
  isVisible?: boolean;
}

export interface DropZoneProps {
  selectedChars: string[];
  bgColor?: string;
  onDelete?: (char: string) => void;
}

export interface RecycleCharProps {
  engineRef: React.MutableRefObject<Matter.Engine>;
  setCharBodies: React.Dispatch<React.SetStateAction<CharBody[]>>;
  width: number;
}

export interface IWordTranslation {
  translated: string;
}

export interface DropZoneProps extends HTMLAttributes<HTMLDivElement> {
  $isOver: boolean;
}
