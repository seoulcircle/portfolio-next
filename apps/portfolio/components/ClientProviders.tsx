"use client";

import { CacheProvider, Global } from "@emotion/react";
import createEmotionCache from "../emotion/createEmotionCache";
import { globalStyles } from "@styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const emotionCache = createEmotionCache();
const queryClient = new QueryClient();

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        {children}
      </QueryClientProvider>
    </CacheProvider>
  );
}
