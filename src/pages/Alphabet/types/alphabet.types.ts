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

export interface CharBody {
  body: Matter.Body;
  char: string;
}

export type DraggableProps = {
  char: string;
  x: number;
  y: number;
};
