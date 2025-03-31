"use client";

import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "@/styles/theme";
import { globalStyles } from "@/styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
