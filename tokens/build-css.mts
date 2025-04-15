import fs from "fs/promises";
import path from "path";

// ✅ 현재 토큰의 타입에 맞춤 (value, type)
type Token = {
  value: string;
  type: string;
};

type Theme = {
  color: Record<string, Token>;
};

// ✅ CSS 변수 이름 규칙: 공백 → 하이픈

// ✅ light/dark에 있는 모든 키 병합
const mergeKeys = (light: Theme, dark: Theme): string[] => {
  const lightKeys = Object.keys(light.color || {});
  const darkKeys = Object.keys(dark.color || {});
  return Array.from(new Set([...lightKeys, ...darkKeys]));
};

// ✅ 실제 CSS 변수 생성
const toCSSVars = (keys: string[], theme: Theme) => {
  return keys
    .map((key) => {
      const token = theme.color[key];
      if (!token || !token.value) {
        console.warn(`⚠️  '${key}' not found in theme.color`);
        return null;
      }
      return `  --${key}: ${token.value};`;
    })
    .filter(Boolean)
    .join("\n");
};

const outputDir = "packages/styles";
await fs.mkdir(outputDir, { recursive: true });

const lightRaw = await fs.readFile("tokens/theme-light.json", "utf-8");
const darkRaw = await fs.readFile("tokens/theme-dark.json", "utf-8");

const lightTheme = JSON.parse(lightRaw) as Theme;
const darkTheme = JSON.parse(darkRaw) as Theme;
const allKeys = mergeKeys(lightTheme, darkTheme);

const lightCSS = `:root {\n${toCSSVars(allKeys, lightTheme)}\n}\n`;
const darkCSS = `[data-theme="dark"] {\n${toCSSVars(allKeys, darkTheme)}\n}\n`;

await fs.writeFile(path.join(outputDir, "theme-light.css"), lightCSS);
await fs.writeFile(path.join(outputDir, "theme-dark.css"), darkCSS);

console.log("✅ CSS 변수 파일 생성 완료 🎉");
