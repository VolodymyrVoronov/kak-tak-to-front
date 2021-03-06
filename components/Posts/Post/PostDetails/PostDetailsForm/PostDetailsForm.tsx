import React from "react";
import { gql, useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { MAX_AMOUNT_OF_COMMENT_LETTERS } from "../../../../../consts/consts";

import { checkIfLimitReached } from "../../../../../helpers/checkIfLimitReached";
import { countAmountOfLetters } from "../../../../../helpers/countAmountOfLetters";

import {
  PostDetailsFormContainer,
  PostDetailsFormTitle,
  PostDetailsFormBody,
  PostDetailsFormBodyInput,
  PostDetailsFormBodyProgressBox,
  PostDetailsFormBodyProgress,
  PostDetailsFormBodyPostLength,
  PostDetailsFormButtons,
  PostDetailsFormButtonClear,
  PostDetailsFormButtonSend,
} from "./PostDetailsForm.styled";

import { colors } from "../../../../../styles/colorPalette";

interface FormData {
  commentText: string;
}

interface PostDetailsFormProps {
  id?: string;
}

const initialFormState = {
  commentText: "",
};

const WRITE_COMMENT_MUTATION = gql`
  mutation ($id: String!, $commentText: String!) {
    writeComment(id: $id, commentText: $commentText) {
      id
      comments {
        id
        commentText
        createdAt
        userLogin
      }
      commentCount
    }
  }
`;

const PostDetailsForm = ({ id }: PostDetailsFormProps): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);
  const [showForm, setShowForm] = React.useState(false);

  const [writeComment, { loading }] = useMutation(WRITE_COMMENT_MUTATION, {
    update() {
      setFormData(initialFormState);
    },
    variables: {
      id,
      commentText: formData.commentText,
    },
  });

  const onFormInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onShowFormClick = () => {
    setShowForm((showForm) => !showForm);
  };

  const onClearButtonClick = () => {
    setFormData(initialFormState);
  };

  const onSendButtonClick = () => {
    writeComment();
  };

  const commentLetterLimit = countAmountOfLetters(formData.commentText, MAX_AMOUNT_OF_COMMENT_LETTERS);

  const isLimitReached = checkIfLimitReached(formData.commentText, MAX_AMOUNT_OF_COMMENT_LETTERS);

  const commentLength = formData.commentText.length;

  return (
    <PostDetailsFormContainer>
      <PostDetailsFormTitle onClick={() => onShowFormClick()}>
        ???????????????? ?????????????????????? {showForm ? <HiChevronUp /> : <HiChevronDown />}
      </PostDetailsFormTitle>

      {showForm && (
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <PostDetailsFormBody>
            <PostDetailsFormBodyInput
              onChange={onFormInputChange}
              value={formData.commentText}
              name="commentText"
              rows={5}
              placeholder="?????????? ??????????????????????..."
            />
          </PostDetailsFormBody>
          <PostDetailsFormBodyProgressBox>
            <PostDetailsFormBodyProgress progress={commentLetterLimit} limit={isLimitReached} />
            <PostDetailsFormBodyPostLength limit={isLimitReached}>
              {MAX_AMOUNT_OF_COMMENT_LETTERS} / {commentLength}
            </PostDetailsFormBodyPostLength>
          </PostDetailsFormBodyProgressBox>

          <PostDetailsFormButtons>
            <PostDetailsFormButtonClear
              onClick={onClearButtonClick}
              type="button"
              disabled={commentLength <= 0 || loading}
            >
              ????????????????
            </PostDetailsFormButtonClear>
            <PostDetailsFormButtonSend
              onClick={onSendButtonClick}
              type="button"
              disabled={isLimitReached || commentLength <= 0 || loading}
            >
              {loading ? (
                <Loader type="ThreeDots" color={colors.primaryBlue} height={10} width={50} timeout={0} />
              ) : (
                "??????????????????"
              )}
            </PostDetailsFormButtonSend>
          </PostDetailsFormButtons>
        </motion.div>
      )}
    </PostDetailsFormContainer>
  );
};

export default React.memo(PostDetailsForm);
