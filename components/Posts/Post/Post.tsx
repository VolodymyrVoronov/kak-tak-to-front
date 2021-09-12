import React from "react";
import { useRouter } from "next/router";

import { HiEmojiSad, HiOutlineAnnotation, HiOutlineTrash } from "react-icons/hi";

import { showTimePostWasWritten } from "../../../helpers/showTimePostWasWritten";

import { getLetterForAvatar } from "../../../helpers/getLetterForAvatar";

import {
  PostContainer,
  PostHeader,
  PostHeaderAvatar,
  PostHeaderUserLogin,
  PostCreatedAt,
  PostBody,
  PostButtons,
  PostButtonLike,
  PostButtonLikeIcon,
  PostButtonComments,
  PostButtonCommentsIcon,
  PostButtonDelete,
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
  const router = useRouter();

  const user = JSON.parse(localStorage.getItem("userInfo") || "{}").userLogin as string;

  console.log(user);

  const onLikeButtonClick = () => {};

  const onCommentsButtonClick = () => {
    router.push(`/posts/post/${id}`);
  };

  const onDeleteButtonClick = () => {};

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderAvatar>{getLetterForAvatar(userLogin)}</PostHeaderAvatar>
        <PostHeaderUserLogin>{userLogin}</PostHeaderUserLogin>
      </PostHeader>
      <PostCreatedAt>{showTimePostWasWritten(createdAt)} ago.</PostCreatedAt>
      <PostBody>{postText}</PostBody>
      <PostButtons>
        <PostButtonLike disabled={!user} type="button">
          <PostButtonLikeIcon>
            <HiEmojiSad />
          </PostButtonLikeIcon>
          {likeCount}
        </PostButtonLike>

        <PostButtonComments onClick={onCommentsButtonClick} type="button">
          <PostButtonCommentsIcon>
            <HiOutlineAnnotation />
          </PostButtonCommentsIcon>
          {commentCount}
        </PostButtonComments>

        <PostButtonDelete disabled={user !== userLogin || !user} type="button">
          <HiOutlineTrash />
        </PostButtonDelete>
      </PostButtons>
    </PostContainer>
  );
};

export default Post;
