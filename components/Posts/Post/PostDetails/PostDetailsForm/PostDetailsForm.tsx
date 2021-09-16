import React from "react";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { MAX_AMOUNT_OF_COMMET_LETTERS } from "../../../../../consts/consts";

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

const initialFormState = {
  commentText: "",
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const PostDetailsForm = (): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);
  const [showForm, setShowForm] = React.useState(false);

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
    setFormData(initialFormState);
  };

  const commentLetterLimit = countAmountOfLetters(formData.commentText, MAX_AMOUNT_OF_COMMET_LETTERS);

  const isLimitReached = checkIfLimitReached(formData.commentText, MAX_AMOUNT_OF_COMMET_LETTERS);

  const commentLength = formData.commentText.length;

  const loading = false;

  return (
    <PostDetailsFormContainer>
      <PostDetailsFormTitle onClick={() => onShowFormClick()}>
        Написать комментарий {showForm ? <HiChevronUp /> : <HiChevronDown />}
      </PostDetailsFormTitle>

      {showForm && (
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <PostDetailsFormBody>
            <PostDetailsFormBodyInput
              onChange={onFormInputChange}
              value={formData.commentText}
              name="commentText"
              rows={5}
              placeholder="Текст комментария..."
            />
          </PostDetailsFormBody>
          <PostDetailsFormBodyProgressBox>
            <PostDetailsFormBodyProgress progress={commentLetterLimit} limit={isLimitReached} />
            <PostDetailsFormBodyPostLength limit={isLimitReached}>
              {MAX_AMOUNT_OF_COMMET_LETTERS} / {commentLength}
            </PostDetailsFormBodyPostLength>
          </PostDetailsFormBodyProgressBox>

          <PostDetailsFormButtons>
            <PostDetailsFormButtonClear
              onClick={onClearButtonClick}
              type="button"
              disabled={commentLength <= 0 || loading}
            >
              Очистить
            </PostDetailsFormButtonClear>
            <PostDetailsFormButtonSend
              onClick={onSendButtonClick}
              type="button"
              disabled={isLimitReached || commentLength <= 0 || loading}
            >
              {loading ? (
                <Loader type="ThreeDots" color={colors.primaryBlue} height={10} width={50} timeout={0} />
              ) : (
                "Отправить"
              )}
            </PostDetailsFormButtonSend>
          </PostDetailsFormButtons>
        </motion.div>
      )}
    </PostDetailsFormContainer>
  );
};

export default PostDetailsForm;
