import React from "react";
import Link from "next/link";

import { showTimePostWasWritten } from "../../../helpers/showTimePostWasWritten";

import { getLetterForAvatar } from "../../../helpers/getLetterForAvatar";

import {
  PostContainer,
  PostHeader,
  PostHeaderAvatar,
  PostHeaderUserLogin,
  PostCreatedAt,
  PostBody,
  PostButtons
} from "./Post.styled";

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
  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderAvatar>{getLetterForAvatar(userLogin)}</PostHeaderAvatar>
        <PostHeaderUserLogin>{userLogin}</PostHeaderUserLogin>
      </PostHeader>
      <PostCreatedAt>{showTimePostWasWritten(createdAt)} ago.</PostCreatedAt>
      <PostBody>{postText}</PostBody>
      <PostButtons>1</PostButtons>
    </PostContainer>
  );
};

export default Post;


{/* <p>
<Link href={`posts/post/${id}`}>Больше</Link>
</p> */}