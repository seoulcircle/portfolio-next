"use client";

import { Global } from "@emotion/react";
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
      <Global styles={globalStyles} />
      {children}
    </QueryClientProvider>
  );
}
