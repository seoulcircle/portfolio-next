// scripts/transformTokens.ts
import { readFileSync, writeFileSync } from "fs";

const raw = JSON.parse(readFileSync("tokens/tokens.json", "utf-8"));
const core = raw.core;

if (!core) {
  console.error("❌ 'core' 토큰셋이 존재하지 않습니다.");
  process.exit(1);
}

writeFileSync("tokens/flattened.json", JSON.stringify(core, null, 2));
console.log("✅ tokens/flattened.json 생성 완료!");
