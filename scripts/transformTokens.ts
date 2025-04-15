import fs from "fs";

type TokenValue = {
  $type: string;
  $value: string;
};

type StyleDictionaryToken = {
  value: string;
  type: string;
};

const raw = JSON.parse(fs.readFileSync("tokens/tokens.json", "utf-8"));
const main = raw["Main"];

const light: { color: Record<string, StyleDictionaryToken> } = { color: {} };
const dark: { color: Record<string, StyleDictionaryToken> } = { color: {} };

const transformValue = ({
  $value,
  $type,
}: TokenValue): StyleDictionaryToken => ({
  value: $value,
  type: $type,
});

for (const [key, value] of Object.entries(main) as [string, TokenValue][]) {
  const name = key.toLowerCase();
  const [base, shade] = name
    .replace(/(light|dark)\s/, "")
    .split(" ")
    .filter(Boolean); // "blue 10"

  if (!base || !shade) continue;

  const tokenName = `${base}-${shade}`; // ✅ color-blue-10 → blue-10

  if (name.includes("light")) {
    light.color[tokenName] = transformValue(value);
  } else if (name.includes("dark")) {
    dark.color[tokenName] = transformValue(value);
  }
}

fs.writeFileSync("tokens/theme-light.json", JSON.stringify(light, null, 2));
fs.writeFileSync("tokens/theme-dark.json", JSON.stringify(dark, null, 2));

console.log("✅ theme-light.json / theme-dark.json 생성 완료");
