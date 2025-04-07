import { Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";

export interface Project {
  index: number;
  id: string;
  name: string;
  route?: string;
  description: string;
  stack?: string[];
  api?: string[];
  thumbnail?: StaticImageData;
}

export interface ZoomContentProps {
  project: {
    name: string;
    id: string;
    description: string;
    stack?: string[];
    api?: string[];
    thumbnail?: StaticImageData;
    route?: string;
  };
  onClose: () => void;
}

export interface ZoomOverlayProps {
  isZoomed: boolean;
  zoomAnimationDone: boolean;
  onClose: () => void;
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

export interface UseCloseZoomContentProps {
  overlayRef: React.RefObject<HTMLElement | null>;
  closeButtonRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
}

export interface UseScrollRotationProps {
  rotation: number;
  setRotation: Dispatch<SetStateAction<number>>;
  setTargetRotation: Dispatch<SetStateAction<number | null>>;
  isZoomed: boolean;
}
export interface UseZoomRotationParams {
  targetRotation: number | null;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  setTargetRotation: React.Dispatch<React.SetStateAction<number | null>>;
  setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>;
  setZoomId: React.Dispatch<React.SetStateAction<string | null>>;
  isZoomed: boolean;
}
