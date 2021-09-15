import React from "react";
import { useRouter } from "next/router";

import { gql, useMutation, useQuery } from "@apollo/client";

import { HiOutlineReply, HiEmojiSad, HiOutlineTrash } from "react-icons/hi";

import PostsHeader from "../../PostsHeader/PostsHeader";
import ProgressLoader from "./../../../common/ProgressLoader/ProgressLoader";

import { getLetterForAvatar } from "../../../../helpers/getLetterForAvatar";
import { showTimePostWasWritten } from "../../../../helpers/showTimePostWasWritten";

import {
  PostDetailsContainer,
  PostDetailsBody,
  PostDetailsHeader,
  PostDetailsHeaderAvatar,
  PostDetailsHeaderUserLogin,
  PostDetailsCreatedAt,
  PostDetailsText,
  PostDetailsButtons,
  PostDetailsButtonBack,
  PostDetailsButtonLike,
  PostDetailsButtonLikeIcon,
  PostDetailsButtonDelete,
} from "./PostDetails.styled";
import { FETCH_POSTS_QUERY } from "../../../../utils/graphql";

interface PostDetailsProps {
  id?: string;
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

const PostDetails = ({ id }: PostDetailsProps): React.ReactElement => {
  const router = useRouter();

  const [liked, setLiked] = React.useState(false);
  const [likesInfo, setLikesInfo] = React.useState<any>();

  const user = JSON.parse(localStorage.getItem("userInfo") || "{}").userLogin as string;

  const {
    error,
    loading: loadingPost,
    data,
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      id,
    },
  });

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

  if (loadingPost) return <ProgressLoader />;
  if (error) return <p>Error</p>;

  const { userLogin, postText, createdAt, likeCount, commentCount, likes, comments } = data.getPost;

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

  return (
    <PostDetailsContainer>
      <PostsHeader />
      <PostDetailsBody>
        <PostDetailsHeader>
          <PostDetailsHeaderAvatar>{getLetterForAvatar(userLogin)}</PostDetailsHeaderAvatar>
          <PostDetailsHeaderUserLogin>{userLogin}</PostDetailsHeaderUserLogin>
        </PostDetailsHeader>
        <PostDetailsCreatedAt>{showTimePostWasWritten(createdAt)} ago.</PostDetailsCreatedAt>
        <PostDetailsText>{postText}</PostDetailsText>

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
      </PostDetailsBody>
    </PostDetailsContainer>
  );
};

export default PostDetails;
