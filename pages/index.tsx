import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import StartPage from "../components/StartPage/StartPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Как так-то...?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StartPage />
    </>
  );
};

export default Home;
