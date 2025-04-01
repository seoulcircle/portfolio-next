export const getCenteredLabelIndex = (rotation: number, total: number) => {
  const anglePerTick = 360 / total;
  const normalized = ((rotation % 360) + 360) % 360;
  const index = Math.round(-normalized / anglePerTick);
  return (index + total) % total;
};
