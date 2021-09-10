import React from "react";

import { MAX_AMOUNT_OF_POST_LETTER } from "../../../consts/consts";

import { chgeckIfLimitReached } from "../../../helpers/chgeckIfLimitReached";
import { countAmountOfLetters } from "../../../helpers/countAmountOfLetters";

import {
  PostsFormContainer,
  PostsFormTitle,
  PostsFormBody,
  PostsFormBodyPostInput,
  PostsFormBodyProgressBox,
  PostsFormBodyProgress,
  PostsFormBodyPostLength,
} from "./PostsForm.styled";

interface FormData {
  postText: string;
}

const initialFormState = {
  postText: "",
};

const PostsForm = (): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);

  const onFormInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const postLetterLimit = countAmountOfLetters(formData.postText);

  const isLimitReached = chgeckIfLimitReached(formData.postText);

  const postLength = formData.postText.length;

  return (
    <PostsFormContainer>
      <PostsFormTitle>Написать сообщение:</PostsFormTitle>
      <PostsFormBody>
        <PostsFormBodyPostInput
          onChange={onFormInputChange}
          value={formData.postText}
          name="postText"
          rows={10}
          placeholder="Текст сообщения..."
        />
        <PostsFormBodyProgressBox>
          <PostsFormBodyProgress progress={postLetterLimit} limit={isLimitReached} />
          <PostsFormBodyPostLength limit={isLimitReached}>
            {MAX_AMOUNT_OF_POST_LETTER} / {postLength}
          </PostsFormBodyPostLength>
        </PostsFormBodyProgressBox>
      </PostsFormBody>
    </PostsFormContainer>
  );
};

export default PostsForm;
