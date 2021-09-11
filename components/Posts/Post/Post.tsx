import React from "react";

import { PostContainer } from "./Post.styled";

interface PostProps {
  id: string;
  postText: string;
  createdAt: string;
  userLogin: string;
  likeCount: number;
  commentCount: number;
  likes: string[];
}

const Post = ({
  id,
  postText,
  createdAt,
  userLogin,
  likeCount,
  commentCount,
  likes,
}: PostProps): React.ReactElement => {
  return <PostContainer>Post</PostContainer>;
};

export default Post;
