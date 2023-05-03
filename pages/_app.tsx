import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Meowy's Blog</title>
      </Head>
      <nav>
        <Link href="/">
          <h1 className="text-3xl font-bold">meowykun🍃</h1>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
