import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

import PostDetails from "./../../../components/Posts/Post/PostDetails/PostDetails";
import ProgressLoader from "../../../components/common/ProgressLoader/ProgressLoader";

const FETCH_POST_QUERY = gql`
  query ($id: ID!) {
    getPost(id: $id) {
      id
      postText
      createdAt
      userLogin
      likeCount
      likes {
        userLogin
      }
      commentCount
      comments {
        id
        userLogin
        createdAt
        commentText
      }
    }
  }
`;

const Post: NextPage = () => {
  const router = useRouter();

  const postId = !router.query.id ? "" : (router.query.id as string);

  const { error, loading, data } = useQuery(FETCH_POST_QUERY, {
    variables: {
      id: postId,
    },
  });

  if (loading) return <ProgressLoader />;
  if (error) return <p>Error</p>;

  const { userLogin, postText, createdAt, likeCount, commentCount, likes, comments } = data.getPost;

  return (
    <PostDetails
      id={postId}
      userLogin={userLogin}
      postText={postText}
      createdAt={createdAt}
      likeCount={likeCount}
      commentCount={commentCount}
      likes={likes}
      comments={comments}
    />
  );
};

export default Post;
