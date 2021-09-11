import React from "react";
import { useQuery } from "@apollo/client";

import PostsHeader from "./PostsHeader/PostsHeader";
import PostsForm from "./PostsForm/PostsForm";
import Post from "./Post/Post";
import NoUserIsLogged from "./../NoUserIsLogged/NoUserIsLogged";

import { FETCH_POSTS_QUERY } from "../../utils/graphql";

import { PostsContainer, PostsContent, PostsItems } from "./Posts.styled";

const Posts = (): React.ReactElement => {
  const { loading, data, error } = useQuery(FETCH_POSTS_QUERY);

  const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false);

  React.useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      setIsUserLogged(true);
    }
    if (!userInfo) {
      setIsUserLogged(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  const { getPosts } = data;

  return (
    <PostsContainer>
      <PostsHeader />
      <PostsContent>
        {isUserLogged ? <PostsForm /> : <NoUserIsLogged />}
        <PostsItems>
          {getPosts.map(
            (post: {
              id: string;
              postText: string;
              createdAt: string;
              userLogin: string;
              likeCount: number;
              commentCount: number;
              likes: string[];
            }) => {
              const { id, postText, createdAt, userLogin, likeCount, commentCount, likes } = post;

              return (
                <Post
                  key={id}
                  id={id}
                  postText={postText}
                  createdAt={createdAt}
                  userLogin={userLogin}
                  likeCount={likeCount}
                  commentCount={commentCount}
                  likes={likes}
                />
              );
            }
          )}
        </PostsItems>
      </PostsContent>
    </PostsContainer>
  );
};

export { Posts };
