import { S } from "./Zoom.style";

const ZoomOverlay = ({
  isZoomed,
  zoomAnimationDone,
  onClick,
}: {
  isZoomed: boolean;
  zoomAnimationDone: boolean;
  onClick: () => void;
}) =>
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
