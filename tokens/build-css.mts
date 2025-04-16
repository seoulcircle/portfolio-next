import fs from "fs/promises";
import path from "path";

type Token = {
  $value: string | Record<string, string>;
  $type: string;
};

type FlatTokenGroup = Record<string, Token>;
type Theme = {
  color: FlatTokenGroup;
};

// ✅ group 이름 → CSS prefix 매핑
const groupAlias: Record<string, string> = {
  fontSize: "font-size",
  fontWeight: "font-weight",
  fontFamily: "font-family",
  lineHeight: "line-height",
  letterSpacing: "letter-spacing",
  paragraphSpacing: "paragraph-spacing",
  paragraphIndent: "paragraph-indent",
  textCase: "text-case",
  textDecoration: "text-decoration",
};

// ✅ CSS 변수명 정규화
const normalizeVarName = (group: string, key: string) => {
  const cleanKey = key
    .replace(new RegExp(`^${group}\\.?`, "i"), "")
    .replace(/\./g, "-");
  const prefix = groupAlias[group] ?? group;
  return `--${prefix}-${cleanKey}`;
};

// ✅ 값 정규화: 숫자면 px 붙이기
const normalizeValue = (group: string, value: string): string => {
  const needsPx = [
    "fontSize",
    "spacing",
    "lineHeight",
    "paragraphSpacing",
    "paragraphIndent",
  ];

  // ✅ 토큰 참조일 경우 → var()로 변환
  if (value.startsWith("{") && value.endsWith("}")) {
    const refKey = value.slice(1, -1); // remove {}
    const [refGroup, ...refParts] = refKey.split(".");
    const prefix = groupAlias[refGroup] ?? refGroup;
    return `var(--${[prefix, ...refParts].join("-").toLowerCase()})`;
  }

  // ✅ px 붙이기
  if (needsPx.includes(group) && /^\d+$/.test(value)) {
    return `${value}px`;
  }

  return value;
};

// 🧩 기본 토큰 → base.css
const extractBaseCSS = async (
  tokenFilePaths: { path: string; group: string }[]
) => {
  const lines: string[] = [];

  for (const { path: filePath, group } of tokenFilePaths) {
    const raw = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(raw);
    const tokens: FlatTokenGroup = json[group];

    if (group === "typography") {
      for (const [styleName, token] of Object.entries(tokens)) {
        if (typeof token.$value !== "object" || token.$value === null) continue;
        const styleObj = token.$value as Record<string, string>;
        for (const [prop, rawVal] of Object.entries(styleObj)) {
          const cssVarName = `--typography-${styleName}-${prop.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}`;

          const refKey = rawVal.replace(/[{}]/g, "");
          const [refGroup, ...refParts] = refKey.split(".");
          const resolvedPrefix = groupAlias[refGroup] ?? refGroup;
          const resolvedName = [resolvedPrefix, ...refParts]
            .join("-")
            .toLowerCase();

          const cssVarValue = `var(--${resolvedName})`;

          lines.push(`  ${cssVarName}: ${cssVarValue};`);
        }
      }
      continue;
    }

    for (const [key, token] of Object.entries(tokens)) {
      if (!token?.$value) continue;
      const varName = normalizeVarName(group, key);
      const val = normalizeValue(group, token.$value as string);
      lines.push(`  ${varName}: ${val};`);
    }
  }

  return `:root {\n${lines.join("\n")}\n}\n`;
};

// 🧩 테마 토큰 → theme.css
const extractThemeCSS = async (lightPath: string, darkPath: string) => {
  const lightRaw = await fs.readFile(lightPath, "utf-8");
  const darkRaw = await fs.readFile(darkPath, "utf-8");

  const light = JSON.parse(lightRaw) as Theme;
  const dark = JSON.parse(darkRaw) as Theme;

  const allKeys = Array.from(
    new Set([...Object.keys(light.color), ...Object.keys(dark.color)])
  );

  const buildVars = (theme: Theme) =>
    allKeys
      .map((key) => {
        const token = theme.color[key];
        return token?.$value ? `  --${key}: ${token.$value};` : null;
      })
      .filter(Boolean)
      .join("\n");

  return (
    `:root {\n${buildVars(light)}\n}\n` +
    `[data-theme="dark"] {\n${buildVars(dark)}\n}\n`
  );
};

// 🛠 실행
const outputDir = "packages/styles";
await fs.mkdir(outputDir, { recursive: true });

const baseCSS = await extractBaseCSS([
  { path: "tokens/fontSize.json", group: "fontSize" },
  { path: "tokens/fontFamily.json", group: "fontFamily" },
  { path: "tokens/fontWeight.json", group: "fontWeight" },
  { path: "tokens/lineHeight.json", group: "lineHeight" },
  { path: "tokens/letterSpacing.json", group: "letterSpacing" },
  { path: "tokens/paragraphSpacing.json", group: "paragraphSpacing" },
  { path: "tokens/paragraphIndent.json", group: "paragraphIndent" },
  { path: "tokens/spacing.json", group: "spacing" },
  { path: "tokens/textCase.json", group: "textCase" },
  { path: "tokens/textDecoration.json", group: "textDecoration" },
  { path: "tokens/typography.json", group: "typography" },
]);

const themeCSS = await extractThemeCSS(
  "tokens/theme-light.json",
  "tokens/theme-dark.json"
);

await fs.writeFile(path.join(outputDir, "base.css"), baseCSS);
await fs.writeFile(path.join(outputDir, "theme.css"), themeCSS);

console.log("✅ base.css, theme.css 생성 완료!");
