// pages/_app.tsx
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/emotion/createEmotionCache";
import { EmotionCache } from "@emotion/cache";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache?: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}
