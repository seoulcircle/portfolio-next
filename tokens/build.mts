import fs from "fs/promises";

type Token = {
  $type: string;
  $value: string;
};

const raw = await fs.readFile("tokens/tokens.json", "utf-8");
const parsed = JSON.parse(raw);
const main = parsed["Main"] as Record<string, Token>;

const light: Record<string, Token> = {};
const dark: Record<string, Token> = {};

// ✅ alias map 추가 (key prefix 변환)
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

// ✅ alias 적용 + normalize
const normalizeKey = (key: string) => {
  let result = key.toLowerCase().trim();

  for (const [pattern, replacement] of Object.entries(aliasMap)) {
    if (result.startsWith(pattern)) {
      result = result.replace(pattern, replacement);
    }
  }

  return result.replace(/(light|dark)\s*/g, "").replace(/\s+/g, "-");
};

for (const [rawKey, token] of Object.entries(main)) {
  if (token.$type !== "color") continue;

  const normKey = normalizeKey(rawKey);

  if (isLight(rawKey)) {
    light[normKey] = token;
  } else if (isDark(rawKey)) {
    dark[normKey] = token;
  } else {
    // 공통은 양쪽 모두에 복사
    light[normKey] = token;
    dark[normKey] = token;
  }
}

await fs.writeFile(
  "tokens/theme-light.json",
  JSON.stringify({ color: light }, null, 2)
);
await fs.writeFile(
  "tokens/theme-dark.json",
  JSON.stringify({ color: dark }, null, 2)
);

console.log(
  "✅ theme-light.json / theme-dark.json 생성 완료 (정규화된 키로 저장)"
);
