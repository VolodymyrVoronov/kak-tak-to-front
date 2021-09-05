import type { NextPage } from "next";
import Head from "next/head";

import LoginForm from "../components/LoginForm/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Войти в аккаунт</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
