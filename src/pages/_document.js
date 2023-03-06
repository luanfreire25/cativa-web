import { Html, Head, Main, NextScript } from "next/document";
import global_colors from "@/styles/global_colors";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/64061cd731ebfa0fe7f10006/1gqru1af5';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                  })();
                `,
          }}
        />
      </Head>
      <body style={{ background: `${global_colors.BACKGROUND_HTML}` }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
