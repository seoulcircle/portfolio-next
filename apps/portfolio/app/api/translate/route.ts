import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { word } = await req.json();

  try {
    // 소문자로 변환하여 더 정확한 번역 (HI → hi)
    const normalizedWord = word.toLowerCase();

    // MyMemory Translation API (무료, 하루 5000 requests)
    const myMemoryRes = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        normalizedWord
      )}&langpair=en|ko`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!myMemoryRes.ok) {
      throw new Error("Translation API request failed");
    }

    const data = await myMemoryRes.json();
    const translated = data?.responseData?.translatedText;

    // 예외처리
    const isMeaningless =
      !translated ||
      translated.toLowerCase() === word.toLowerCase() ||
      translated === word ||
      data.responseStatus !== 200;

    if (isMeaningless) {
      return NextResponse.json({ translated: null, code: "invalid_input" });
    }

    return NextResponse.json({ translated });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { translated: null, code: "service_error" },
      { status: 500 }
    );
  }
}
