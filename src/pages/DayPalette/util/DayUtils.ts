import { RGBAInput, GradientInput } from "@/types/weather";

export const getRGBA = ({ temp, humidity, hour, pm }: RGBAInput) => {
  const minTemp = -10;
  const maxTemp = 25;
  const R = Math.min(
    255,
    Math.max(0, ((temp - minTemp) / (maxTemp - minTemp)) * 255)
  );
  const G = Math.min(255, Math.max(0, (humidity / 100) * 255));
  const B = Math.abs(255 - (hour / 24) * 255);
  const A = Math.min(1, (pm < 100 ? 100 - pm : 150 - pm) / 100).toFixed(2);

  return `rgba(${Math.round(R)}, ${Math.round(G)}, ${Math.round(B)}, ${A})`;
};

export const getLinearGradient = ({
  angle,
  startColor,
  endColor,
}: GradientInput): string => {
  return `linear-gradient(${angle}deg, ${startColor}, ${endColor})`;
};
