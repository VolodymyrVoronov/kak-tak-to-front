import React from "react";
import { useQuery } from "@apollo/client";

import PostsHeader from "./PostsHeader/PostsHeader";
import PostsForm from "./PostsForm/PostsForm";

import { FETCH_POSTS_QUERY } from "../../utils/graphql";

import { PostsContainer, PostsContent } from "./Posts.styled";

const Posts = (): React.ReactElement => {
  const { loading, data, error } = useQuery(FETCH_POSTS_QUERY);
  if (loading) return <p>Loading...</p>;

  const { getPosts } = data;

  console.log(getPosts);

  return (
    <PostsContainer>
      <PostsHeader />
      <PostsContent>
        <PostsForm />
        <div>Posts</div>
      </PostsContent>
    </PostsContainer>
  );
};

export { Posts };
