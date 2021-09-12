import type { NextPage } from "next";
import Head from "next/head";

import { Posts as PostsComponent } from "../../components/Posts/Posts";

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Как так-то...? - Посты</title>
      </Head>
      <PostsComponent />
    </>
  );
};

export default Posts;
