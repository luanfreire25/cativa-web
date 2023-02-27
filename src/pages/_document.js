import { Html, Head, Main, NextScript } from "next/document";
import global_colors from "@/styles/global_colors";

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ background: `${global_colors.BACKGROUND_HTML}` }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
