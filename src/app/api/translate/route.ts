// app/api/translate/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { word } = await req.json();

  const papagoRes = await fetch(
    "https://papago.apigw.ntruss.com/nmt/v1/translation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-ncp-apigw-api-key-id": process.env.NEXT_PUBLIC_NCP_API_KEY_ID!,
        "x-ncp-apigw-api-key": process.env.NEXT_PUBLIC_NCP_API_KEY!,
      },
      body: new URLSearchParams({
        source: "en",
        target: "ko",
        text: word,
      }),
    }
  );

  const data = await papagoRes.json();
  return NextResponse.json({
    translated: data?.message?.result?.translatedText ?? "번역 실패",
  });
}
