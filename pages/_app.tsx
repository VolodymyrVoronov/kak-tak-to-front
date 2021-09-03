import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

import "./../styles/fonts.css";
import "./../styles/nprogress.css";
import GlobalStyles from "../styles/globalStyles";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
