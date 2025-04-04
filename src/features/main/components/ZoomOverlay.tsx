import { S } from "../styles/Zoom.style";
import { ZoomOverlayProps } from "../types/main.types";

const ZoomOverlay = ({
  isZoomed,
  zoomAnimationDone,
  onClose,
}: ZoomOverlayProps) =>
  isZoomed && zoomAnimationDone ? (
    <S.GlassOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClose}
    />
  ) : null;

export default ZoomOverlay;
