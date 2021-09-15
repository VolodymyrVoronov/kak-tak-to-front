import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import PostDetails from "./../../../components/Posts/Post/PostDetails/PostDetails";
import ProgressLoader from "../../../components/common/ProgressLoader/ProgressLoader";

const Post: NextPage = () => {
  const router = useRouter();

  const postId = router.query.id as string;

  if (!postId) return <ProgressLoader />;

  return <PostDetails id={postId} />;
};

export default Post;
