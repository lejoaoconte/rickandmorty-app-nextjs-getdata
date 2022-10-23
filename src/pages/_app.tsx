import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "react-redux";

import { Default } from "src/layouts/Default";

import store from "../redux";

import { GlobalStyle } from "src/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Default>
        <Head>
          <title>Rick and Morty | Character List</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Default>
    </Provider>
  );
}

export default MyApp;
