import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

import { HiEmojiSad, HiOutlineAnnotation, HiOutlineTrash } from "react-icons/hi";

import { showTimePostWasWritten } from "../../../helpers/showTimePostWasWritten";

import { getLetterForAvatar } from "../../../helpers/getLetterForAvatar";

import { FETCH_POSTS_QUERY } from "../../../utils/graphql";

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

interface DeletePostMutation {
  getPosts: {
    id: string;
    postText: string;
    createdAt: string;
    userLogin: string;
    likeCount: number;
    likes: {
      userLogin: string;
    };
    commentCount: number;
    comments: {
      id: string;
      userLogin: string;
      createdAt: string;
      commentText: string;
    };
    filter: any;
  };
}

const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

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

  const [deletePost] = useMutation(DELETE_POST, {
    update(proxy) {
      const data = proxy.readQuery<DeletePostMutation>({
        query: FETCH_POSTS_QUERY,
      });

      console.log(data);

      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          getPosts: data?.getPosts.filter((post: { id: string }) => post.id !== id),
        },
      });
    },
    variables: {
      id,
    },
  });

  const onLikeButtonClick = () => {};

  const onCommentsButtonClick = () => {
    router.push(`/posts/post/${id}`);
  };

  const onDeleteButtonClick = () => {
    deletePost();
  };

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

        <PostButtonDelete onClick={onDeleteButtonClick} disabled={user !== userLogin || !user} type="button">
          <HiOutlineTrash />
        </PostButtonDelete>
      </PostButtons>
    </PostContainer>
  );
};

export default Post;
