export type ColorTheme =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple";

export const COLOR_HUES: Record<ColorTheme, number> = {
  red: 350,
  orange: 20,
  yellow: 55,
  green: 100,
  blue: 210,
  purple: 270,
};

// 👉 하나의 테마에 따라 밝기만 다양하게 랜덤 색상 생성
export const getRandomColorByHue = (hue: number): string => {
  const saturation = 70;
  const lightness = 30 + Math.random() * 65; // 밝기 30~90%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// 텍스트 대비용 (흰 글자 or 검정 글자)
export const getContrastingTextColor = (bg: string) => {
  const match = bg.match(/hsl\(\d+,\s*\d+%,\s*(\d+)%\)/);
  if (match) {
    const lightness = parseInt(match[1], 10);
    return lightness > 55 ? "black" : "white";
  }
  return "black";
};
