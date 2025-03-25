import Header from "@/components/Header";
import ClientProviders from "@/components/ClientProviders";

export const metadata = {
  title: "홍이의 포트폴리오",
  description: "Next.js로 이관한 인터랙티브 프로젝트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ClientProviders>
          <Header />
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
