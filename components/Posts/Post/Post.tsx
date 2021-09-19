import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";

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
  PostButtonsLoaderContainer,
  PostButtons,
  PostButtonLike,
  PostButtonLikeIcon,
  PostButtonComments,
  PostButtonCommentsIcon,
  PostButtonDelete,
} from "./Post.styled";

import { colors } from "../../../styles/colorPalette";

interface Like {
  id: string;
  userLogin: string;
}

interface PostProps {
  id: string;
  postText: string;
  createdAt: string;
  userLogin: string;
  likeCount: number;
  commentCount: number;
  likes: Like[];
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
    filter: (id: any | string) => boolean;
  };
}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

const LIKE_POST_MUTATION = gql`
  mutation likePost($id: ID!) {
    likePost(id: $id) {
      id
      likes {
        id
        userLogin
      }
      likeCount
    }
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

  const [liked, setLiked] = React.useState(false);

  const user = JSON.parse(localStorage.getItem("userInfo") || "{}").userLogin as string;

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    update(proxy) {
      const data = proxy.readQuery<DeletePostMutation>({
        query: FETCH_POSTS_QUERY,
      });

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

  const [likePost, { loading }] = useMutation(LIKE_POST_MUTATION, {
    variables: {
      id,
    },
  });

  React.useEffect(() => {
    if (user && likes.find((like) => like.userLogin === user)) {
      setLiked(true);
    } else setLiked(false);
  }, [likes, user, userLogin]);

  const onLikeButtonClick = () => {
    likePost();
  };

  const onCommentsButtonClick = () => {
    router.push(`/posts/post/${id}`);
  };

  const onDeleteButtonClick = () => {
    deletePost();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PostContainer>
        <PostHeader>
          <PostHeaderAvatar>{getLetterForAvatar(userLogin)}</PostHeaderAvatar>
          <PostHeaderUserLogin>{userLogin}</PostHeaderUserLogin>
        </PostHeader>
        <PostCreatedAt>{showTimePostWasWritten(createdAt)} назад</PostCreatedAt>
        <PostBody>{postText}</PostBody>
        {loading ? (
          <PostButtonsLoaderContainer>
            <Loader type="ThreeDots" color={colors.primaryBlue} height={42} width={50} timeout={0} />
          </PostButtonsLoaderContainer>
        ) : (
          <PostButtons>
            <PostButtonLike onClick={onLikeButtonClick} liked={liked} disabled={!user} type="button">
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
        )}
      </PostContainer>
    </motion.div>
  );
};

export default React.memo(Post);
