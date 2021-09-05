import type { NextPage } from "next";
import Head from "next/head";

import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Регистрация нового аккаунта</title>
      </Head>
      <RegistrationForm />
    </>
  );
};

export default Signin;
