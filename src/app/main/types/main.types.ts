import { Dispatch, SetStateAction } from "react";

export interface Project {
  index: number;
  id: string;
  name: string;
  route?: string;
  description: string;
  stack?: string[];
  api?: string[];
  thumbnail?: string;
}

export interface ZoomContentProps {
  project: {
    name: string;
    id: string;
    description: string;
    stack?: string[];
    api?: string[];
    thumbnail?: string;
    route?: string;
  };
}

export interface ZoomOverlayProps {
  isZoomed: boolean;
  zoomAnimationDone: boolean;
  onClick: () => void;
}

export interface UseZoomRotationProps {
  targetRotation: number | null;
  rotation: number;
  setRotation: Dispatch<SetStateAction<number>>;
  setTargetRotation: Dispatch<SetStateAction<number | null>>;
  setIsZoomed: Dispatch<SetStateAction<boolean>>;
  setZoomId: Dispatch<SetStateAction<string | null>>;
  isZoomed: boolean;
}

export interface LabelsProps {
  rotation: number;
  labelRadius: number;
  isMobile: boolean;
  onClick: (index: number) => void;
}

export interface ResponsiveRadiusOptions {
  min: number;
  max: number;
}

export interface TickMarksProps {
  tickRadius: number;
}
