import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import About from "./about";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Meowy's Blog</title>
      </Head>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-purple-400">meowykun🍃</h1>
        </Link>
        <Link href="/about">
          <h3 className="text-lg font-medium text-gray-300 hover:text-gray-500 cursor-pointer">
            About
          </h3>
        </Link>
      </nav>
      {Component === About ? <Component /> : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
