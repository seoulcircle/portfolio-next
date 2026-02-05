"use client";

import { CacheProvider, Global } from "@emotion/react";
import createEmotionCache from "../emotion/createEmotionCache";
import { globalStyles } from "@styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  // Create cache and client on first render (client-side only)
  const [emotionCache] = useState(() => createEmotionCache());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        {children}
      </QueryClientProvider>
    </CacheProvider>
  );
}
