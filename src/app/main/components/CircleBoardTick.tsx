import { S } from "./CircleBoard.style";
import { TickMarksProps } from "../types/main.types";
const TickMarks = ({ tickRadius }: TickMarksProps) => {
  return (
    <>
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (360 / 60) * i;
        const isMajorTick = [0, 5, 10, 20, 25, 35, 45].includes(i);
        const tickHeight = isMajorTick ? 24 : 10;
        return (
          <S.Tick
            key={i}
            style={{
              transform: `rotate(${angle}deg) translateY(-${
                tickRadius + tickHeight
              }px)`,
              transformOrigin: "top center",
              backgroundColor: isMajorTick ? "#c61a1a" : "#545454",
              height: `${tickHeight}px`,
            }}
          />
        );
      })}
    </>
  );
};

export default TickMarks;
