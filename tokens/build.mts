import fs from "fs/promises";

type Token = {
  $type: string;
  $value: string | object;
};

interface TokenMap {
  [key: string]: Token | TokenMap;
}

const raw = await fs.readFile("tokens/tokens.json", "utf-8"); // tokens.json 파일을 string으로 읽음
const parsed = JSON.parse(raw); // json 객체로
const main = parsed["Main"]; // Main 키 아래에 있는 내용만 추출

// 중첩 토큰 구조 평탄화
const flattenTokens = (tokens: TokenMap, prefix = ""): [string, Token][] => {
  const entries: [string, Token][] = [];

  for (const [key, value] of Object.entries(tokens)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (
      typeof value === "object" &&
      "$value" in value &&
      "$type" in value &&
      typeof value.$type === "string"
    ) {
      entries.push([fullKey, value as Token]);
    } else if (typeof value === "object") {
      entries.push(...flattenTokens(value as TokenMap, fullKey));
    }
  }

  return entries;
};

const flatTokens = flattenTokens(main);

// 저장소 초기화
const light: Record<string, Token> = {};
const dark: Record<string, Token> = {};

const fontSize: Record<string, Token> = {};
const fontFamily: Record<string, Token> = {};
const fontWeight: Record<string, Token> = {};
const lineHeight: Record<string, Token> = {};
const letterSpacing: Record<string, Token> = {};
const paragraphSpacing: Record<string, Token> = {};
const textCase: Record<string, Token> = {};
const textDecoration: Record<string, Token> = {};
const paragraphIndent: Record<string, Token> = {};
const spacing: Record<string, Token> = {};
const typography: Record<string, Token> = {};

// alias + 정규화
const aliasMap: Record<string, string> = {
  grayscale: "gray",
  "blue light": "blue",
  "blue dark": "blue",
  "red light": "red",
  "red dark": "red",
  "green light": "green",
  "green dark": "green",
};

const isLight = (key: string) => /light/.test(key.toLowerCase());
const isDark = (key: string) => /dark/.test(key.toLowerCase());

const normalizeKey = (key: string) => {
  let result = key.toLowerCase().trim();
  for (const [pattern, replacement] of Object.entries(aliasMap)) {
    if (result.startsWith(pattern)) {
      result = result.replace(pattern, replacement);
    }
  }
  return result.replace(/(light|dark)\s*/g, "").replace(/\s+/g, "-");
};

// 분기 처리
for (const [rawKey, token] of flatTokens) {
  const normKey = normalizeKey(rawKey);

  switch (token.$type) {
    case "color":
      if (isLight(rawKey)) {
        light[normKey] = token;
      } else if (isDark(rawKey)) {
        dark[normKey] = token;
      } else {
        light[normKey] = token;
        dark[normKey] = token;
      }
      break;
    case "fontSize":
    case "fontSizes":
      fontSize[normKey] = token;
      break;
    case "fontFamily":
    case "fontFamilies":
      fontFamily[normKey] = token;
      break;
    case "fontWeight":
    case "fontWeights":
      fontWeight[normKey] = token;
      break;
    case "lineHeight":
    case "lineHeights":
      lineHeight[normKey] = token;
      break;
    case "letterSpacing":
      letterSpacing[normKey] = token;
      break;
    case "paragraphSpacing":
      paragraphSpacing[normKey] = token;
      break;
    case "textCase":
      textCase[normKey] = token;
      break;
    case "textDecoration":
      textDecoration[normKey] = token;
      break;
    case "paragraphIndent":
      paragraphIndent[normKey] = token;
      break;
    case "spacing":
      spacing[normKey] = token;
      break;
    case "typography":
      typography[normKey] = token;
      break;
  }
}

// 저장
await fs.writeFile(
  "tokens/theme-light.json",
  JSON.stringify({ color: light }, null, 2)
);
await fs.writeFile(
  "tokens/theme-dark.json",
  JSON.stringify({ color: dark }, null, 2)
);
await fs.writeFile(
  "tokens/fontSize.json",
  JSON.stringify({ fontSize }, null, 2)
);
await fs.writeFile(
  "tokens/fontFamily.json",
  JSON.stringify({ fontFamily }, null, 2)
);
await fs.writeFile(
  "tokens/fontWeight.json",
  JSON.stringify({ fontWeight }, null, 2)
);
await fs.writeFile(
  "tokens/lineHeight.json",
  JSON.stringify({ lineHeight }, null, 2)
);
await fs.writeFile(
  "tokens/letterSpacing.json",
  JSON.stringify({ letterSpacing }, null, 2)
);
await fs.writeFile(
  "tokens/paragraphSpacing.json",
  JSON.stringify({ paragraphSpacing }, null, 2)
);
await fs.writeFile(
  "tokens/paragraphIndent.json",
  JSON.stringify({ paragraphIndent }, null, 2)
);
await fs.writeFile(
  "tokens/textCase.json",
  JSON.stringify({ textCase }, null, 2)
);
await fs.writeFile(
  "tokens/textDecoration.json",
  JSON.stringify({ textDecoration }, null, 2)
);
await fs.writeFile("tokens/spacing.json", JSON.stringify({ spacing }, null, 2));
await fs.writeFile(
  "tokens/typography.json",
  JSON.stringify({ typography }, null, 2)
);

console.log("전체 디자인 토큰 JSON 파일 생성 완료!");
