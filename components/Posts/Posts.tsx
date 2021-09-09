import React from "react";

import PostsHeader from "./PostsHeader/PostsHeader";

import { PostsContainer } from "./Posts.styled";

const Posts = (): React.ReactElement => {
  return (
    <PostsContainer>
      <PostsHeader />
    </PostsContainer>
  );
};

export { Posts };
