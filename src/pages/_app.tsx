import Footer from "@/layout/footer";
import Header from "@/layout/header";
import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App);
