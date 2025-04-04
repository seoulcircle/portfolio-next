import { projects } from "@/features/main/data/projectList";
import { S } from "@/features/main/styles/CircleBoard.style";
import { LabelsProps } from "@/features/main/types/main.types";
const Labels = ({ rotation, labelRadius, isMobile, onClick }: LabelsProps) => {
  return (
    <>
      {projects.map(({ index, id, name }) => {
        const angle = (360 / 60) * index;
        const actualAngle = (angle + rotation) % 360;
        const normalizedAngle =
          actualAngle < 0 ? actualAngle + 360 : actualAngle;
        const targetAngle = isMobile ? 45 : 0;
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
                fontSize: isCentered ? "23px" : "21px",
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
