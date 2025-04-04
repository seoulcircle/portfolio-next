import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { word } = await req.json();

  const papagoRes = await fetch(
    "https://papago.apigw.ntruss.com/nmt/v1/translation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-ncp-apigw-api-key-id": process.env.NCP_API_KEY_ID!,
        "x-ncp-apigw-api-key": process.env.NCP_API_KEY!,
      },
      body: new URLSearchParams({
        source: "en",
        target: "ko",
        text: word,
      }),
    }
  );

  const data = await papagoRes.json();
  const result = data?.message?.result;
  const translated = result?.translatedText;
  const detectedLang = result?.srcLangType;

  // 예외처리
  const isMeaningless =
    !translated ||
    translated.toLowerCase() === word.toLowerCase() ||
    detectedLang === "ko"; // 이미 한국어거나, 번역이 무의미한 경우

  return NextResponse.json({
    translated: isMeaningless ? "번역할 수 없는 입력이에요." : translated,
  });
}
