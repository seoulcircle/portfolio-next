import { S } from "./Zoom.style";
import { ZoomOverlayProps } from "../types/types";

const ZoomOverlay = ({
  isZoomed,
  zoomAnimationDone,
  onClick,
}: ZoomOverlayProps) =>
  isZoomed && zoomAnimationDone ? (
    <S.GlassOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
    />
  ) : null;

export default ZoomOverlay;
