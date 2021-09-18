import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Posts as PostsComponent } from "../../components/Posts/Posts";

const Posts: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Как так-то...? - Сообщения</title>
      </Head>
      <PostsComponent />
    </React.Fragment>
  );
};

export default Posts;
