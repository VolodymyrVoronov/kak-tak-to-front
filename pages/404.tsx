import type { NextPage } from "next";
import Head from "next/head";

import { FourOhFour as FourOhFourPage } from "../components/FourOhFour/FourOhFour";

const FourOhFour: NextPage = () => {
  return (
    <>
      <Head>
        <title>Такой страницы не существует.</title>
      </Head>
      <FourOhFourPage />
    </>
  );
};

export default FourOhFour;
