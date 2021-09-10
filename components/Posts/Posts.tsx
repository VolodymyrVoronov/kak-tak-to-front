import React from "react";

import PostsHeader from "./PostsHeader/PostsHeader";
import PostsForm from "./PostsForm/PostsForm";

import { PostsContainer, PostsContent } from "./Posts.styled";

const Posts = (): React.ReactElement => {
  return (
    <PostsContainer>
      <PostsHeader />
      <PostsContent>
        <PostsForm />
        <div>2</div>
      </PostsContent>
    </PostsContainer>
  );
};

export { Posts };
