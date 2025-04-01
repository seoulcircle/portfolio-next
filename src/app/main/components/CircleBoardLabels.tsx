import { projects } from "../data/projectList";
import { S } from "./CircleBoard.style";
const Labels = ({
  rotation,
  labelRadius,
  isMobile,
  onClick,
}: {
  rotation: number;
  labelRadius: number;
  isMobile: boolean;
  onClick: (index: number) => void;
}) => {
  return (
    <>
      {projects.map(({ index, id, name }) => {
        const angle = (360 / 60) * index;
        const actualAngle = (angle + rotation) % 360;
        const normalizedAngle =
          actualAngle < 0 ? actualAngle + 360 : actualAngle;
        const targetAngle = isMobile ? 30 : 0;
        const isCentered = Math.abs(normalizedAngle - targetAngle) < 6;

        return (
          <S.LabelWrapper
            key={id}
            style={{
              transform: `rotate(${angle}deg) translateY(-${labelRadius}px)`,
            }}
          >
            <S.Label
              onClick={() => onClick(index)}
              style={{
                transform: `translateX(-50%) rotate(${-angle - rotation}deg)`,
                fontWeight: isCentered ? 600 : 400,
                fontSize: isMobile
                  ? isCentered
                    ? "18px"
                    : "16px"
                  : isCentered
                  ? "20px"
                  : "18px",
              }}
            >
              {name}
            </S.Label>
          </S.LabelWrapper>
        );
      })}
    </>
  );
};

export default Labels;
