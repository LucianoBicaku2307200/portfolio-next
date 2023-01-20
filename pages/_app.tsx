import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luciano Bicaku Portfolio</title>
        <meta
          name="description"
          content="Full-Stack Web Developer, BigCommerce Developer, Web3 Enthusiast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
