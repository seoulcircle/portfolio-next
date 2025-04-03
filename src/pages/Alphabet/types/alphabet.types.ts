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
  width: number;
  height: number;
  sceneRef: React.MutableRefObject<HTMLDivElement>;
  wallsRef: React.MutableRefObject<{
    floor: Matter.Body;
    leftWall: Matter.Body;
    rightWall: Matter.Body;
  } | null>;
  engineRef: React.MutableRefObject<Matter.Engine>;
}

export interface CharBody {
  body: Matter.Body;
  char: string;
  bgColor?: string;
  textColor?: string;
}

export type DraggableProps = {
  id: string;
  char: string;
  x: number;
  y: number;
  bgColor?: string;
  textColor?: string;
  isActive?: boolean;
};

export type DropZoneProps = {
  selectedChars: string[];
  bgColor?: string;
};

export type RecycleCharProps = {
  engineRef: React.MutableRefObject<Matter.Engine>;
  setCharBodies: React.Dispatch<React.SetStateAction<CharBody[]>>;
  width: number;
};
