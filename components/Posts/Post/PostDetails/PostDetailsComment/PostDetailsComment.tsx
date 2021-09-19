import React from "react";
import { gql, useMutation } from "@apollo/client";
import { motion } from "framer-motion";

import { HiTrash } from "react-icons/hi";

import { getLetterForAvatar } from "../../../../../helpers/getLetterForAvatar";
import { showTimePostWasWritten } from "../../../../../helpers/showTimePostWasWritten";

import {
  PostDetailsCommentContainer,
  PostDetailsCommentHeader,
  PostDetailsCommentAvatar,
  PostDetailsCommentLogin,
  PostDetailsCommentText,
  PostDetailsCommentFooter,
  PostDetailsCommentCreatedAt,
  PostDetailsCommentDeleteButton,
} from "./PostDetailsComment.styled";

interface PostDetailsCommentProps {
  id: string;
  commentText: string;
  userLogin: string;
  createdAt: string;
  postId?: string;
}

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $id: ID!) {
    deleteComment(postId: $postId, id: $id) {
      id
      comments {
        id
        userLogin
        createdAt
        commentText
      }
      commentCount
    }
  }
`;

const PostDetailsComment = ({
  id,
  commentText,
  userLogin,
  createdAt,
  postId,
}: PostDetailsCommentProps): React.ReactElement => {
  const user = JSON.parse(localStorage.getItem("userInfo") || "{}").userLogin as string;

  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      postId,
      id,
    },
  });

  const onDeleteButtonClick = () => {
    deleteComment();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PostDetailsCommentContainer>
        <PostDetailsCommentHeader>
          <PostDetailsCommentAvatar>{getLetterForAvatar(userLogin)}</PostDetailsCommentAvatar>
          <PostDetailsCommentLogin>{userLogin}</PostDetailsCommentLogin>
        </PostDetailsCommentHeader>
        <PostDetailsCommentText>{commentText}</PostDetailsCommentText>
        <PostDetailsCommentFooter>
          <PostDetailsCommentCreatedAt>{showTimePostWasWritten(createdAt)} назад.</PostDetailsCommentCreatedAt>

          {user === userLogin && (
            <PostDetailsCommentDeleteButton onClick={() => onDeleteButtonClick()} disabled={loading}>
              <HiTrash />
            </PostDetailsCommentDeleteButton>
          )}
        </PostDetailsCommentFooter>
      </PostDetailsCommentContainer>
    </motion.div>
  );
};

export default React.memo(PostDetailsComment);
