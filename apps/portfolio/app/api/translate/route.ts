import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { word } = await req.json();

  try {
    // MyMemory Translation API (무료, 하루 5000 requests)
    const myMemoryRes = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        word
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

    return NextResponse.json({
      translated: isMeaningless ? "번역할 수 없는 입력이에요." : translated,
    });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      {
        translated: "번역 서비스에 일시적인 문제가 발생했어요.",
      },
      { status: 500 }
    );
  }
}
