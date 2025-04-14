const main = async () => {
  const StyleDictionary = (await import("style-dictionary")).default;

  // @ts-expect-error: 타입 선언 없음
  const { registerTransforms } = await import("@tokens-studio/sd-transforms");

  registerTransforms(StyleDictionary);

  const SD = StyleDictionary.extend({
    source: ["tokens/flattened.json"],
    platforms: {
      css: {
        transformGroup: "tokens-studio",
        buildPath: "packages/styles/tokens/",
        files: [
          {
            destination: "variables.css",
            format: "css/variables",
          },
        ],
      },
    },
  });

  SD.buildAllPlatforms();
  console.log("✅ 빌드 성공! 계산된 CSS 토큰 생성 완료");
};

main();
