// pages/_document.tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "@/emotion/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { AppType } from "next/app";

type EnhancedApp = AppType & { emotionCache?: EmotionCache };

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: EnhancedApp) => (props) =>
          <App {...props} emotionCache={cache} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);

    const styleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [
        ...(Array.isArray(initialProps.styles)
          ? initialProps.styles
          : [initialProps.styles]),
        ...styleTags,
      ],
    };
  }

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
