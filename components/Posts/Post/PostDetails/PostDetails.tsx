import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";

import { HiOutlineReply, HiEmojiSad, HiOutlineTrash } from "react-icons/hi";

import PostsHeader from "../../PostsHeader/PostsHeader";
import PostDetailsForm from "./PostDetailsForm/PostDetailsForm";
import PostDetailsComment from "./PostDetailsComment/PostDetailsComment";

import { getLetterForAvatar } from "../../../../helpers/getLetterForAvatar";
import { showTimePostWasWritten } from "../../../../helpers/showTimePostWasWritten";

import { FETCH_POSTS_QUERY } from "../../../../utils/graphql";

import {
  PostDetailsContainer,
  PostDetailsBody,
  PostDetailsHeader,
  PostDetailsHeaderAvatar,
  PostDetailsHeaderUserLogin,
  PostDetailsCreatedAt,
  PostDetailsText,
  PostDetailsButtons,
  PostDetailsButtonsLoaderContainer,
  PostDetailsButtonBack,
  PostDetailsButtonLike,
  PostDetailsButtonLikeIcon,
  PostDetailsButtonDelete,
  PostDetailsComments,
  PostDetailsCommentsAmounut,
} from "./PostDetails.styled";

import { colors } from "../../../../styles/colorPalette";

interface Like {
  id: string;
  userLogin: string;
}

interface PostDetailsProps {
  id?: string;
  postText: string;
  createdAt: string;
  userLogin: string;
  likeCount: number;
  commentCount: number;
  likes: Like[];
  comments: any;
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

const PostDetails = ({
  id,
  userLogin,
  postText,
  createdAt,
  likeCount,
  commentCount,
  likes,
  comments,
}: PostDetailsProps): React.ReactElement => {
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

  const onBackButtonClick = () => {
    router.push("/posts");
  };

  const onDeleteButtonClick = () => {
    deletePost();
    router.push("/posts");
  };

  const onLikeButtonClick = () => {
    likePost();
  };

  let postId = id;

  return (
    <PostDetailsContainer>
      <PostsHeader />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <PostDetailsBody>
          <PostDetailsHeader>
            <PostDetailsHeaderAvatar>{getLetterForAvatar(userLogin)}</PostDetailsHeaderAvatar>
            <PostDetailsHeaderUserLogin>{userLogin}</PostDetailsHeaderUserLogin>
          </PostDetailsHeader>
          <PostDetailsCreatedAt>{showTimePostWasWritten(createdAt)} назад</PostDetailsCreatedAt>
          <PostDetailsText>{postText}</PostDetailsText>

          {loading ? (
            <PostDetailsButtonsLoaderContainer>
              <Loader type="ThreeDots" color={colors.primaryBlue} height={56} width={50} timeout={0} />
            </PostDetailsButtonsLoaderContainer>
          ) : (
            <PostDetailsButtons>
              <PostDetailsButtonBack onClick={onBackButtonClick} type="button">
                <HiOutlineReply />
              </PostDetailsButtonBack>

              <PostDetailsButtonLike onClick={onLikeButtonClick} liked={liked} disabled={!user} type="button">
                <PostDetailsButtonLikeIcon>
                  <HiEmojiSad />
                </PostDetailsButtonLikeIcon>
                {likeCount}
              </PostDetailsButtonLike>

              <PostDetailsButtonDelete onClick={onDeleteButtonClick} disabled={user !== userLogin || !user}>
                <HiOutlineTrash />
              </PostDetailsButtonDelete>
            </PostDetailsButtons>
          )}

          {user && <PostDetailsForm id={id} />}

          <PostDetailsComments>
            <PostDetailsCommentsAmounut>
              {commentCount === 0 ? "Комментариев нет." : <>Количество комментариев: {commentCount}</>}
            </PostDetailsCommentsAmounut>

            {comments.map((comment: { id: string; commentText: string; userLogin: string; createdAt: string }) => {
              const { id, commentText, userLogin, createdAt } = comment;

              return (
                <PostDetailsComment
                  key={id}
                  id={id}
                  commentText={commentText}
                  userLogin={userLogin}
                  createdAt={createdAt}
                  postId={postId}
                />
              );
            })}
          </PostDetailsComments>
        </PostDetailsBody>
      </motion.div>
    </PostDetailsContainer>
  );
};

export default PostDetails;
