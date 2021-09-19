import React from "react";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";

import PostsHeader from "./PostsHeader/PostsHeader";
import PostsForm from "./PostsForm/PostsForm";
import Post from "./Post/Post";
import NoUserIsLogged from "./../NoUserIsLogged/NoUserIsLogged";
import ProgressLoader from "./../common/ProgressLoader/ProgressLoader";
import Error from "../common/Error/Error";

import { FETCH_POSTS_QUERY } from "../../utils/graphql";

import { PostsContainer, PostsContent, PostsNoPostsTitle, PostsItems } from "./Posts.styled";

interface Like {
  id: string;
  userLogin: string;
}

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

  if (loading) return <ProgressLoader />;
  if (error) return <Error path="/" />;

  const { getPosts } = data;

  return (
    <PostsContainer>
      <PostsHeader />
      <PostsContent>
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
          {isUserLogged ? <PostsForm /> : <NoUserIsLogged />}
        </motion.div>

        {getPosts.length === 0 ? (
          <PostsNoPostsTitle>Сообщений нет.</PostsNoPostsTitle>
        ) : (
          <PostsItems>
            {getPosts.map(
              (post: {
                id: string;
                postText: string;
                createdAt: string;
                userLogin: string;
                likeCount: number;
                commentCount: number;
                likes: Like[];
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
        )}
      </PostsContent>
    </PostsContainer>
  );
};

export { Posts };
