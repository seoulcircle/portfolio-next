import Header from "../components/Header";
import ClientProviders from "../components/ClientProviders";

export const metadata = {
  title: "홍이의 포트폴리오",
  description: "프론트엔드 인터랙티브 포트폴리오",
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
