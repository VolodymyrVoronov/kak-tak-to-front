import React from "react";
import { gql, useMutation } from "@apollo/client";
import Loader from "react-loader-spinner";

import { MAX_AMOUNT_OF_POST_LETTER } from "../../../consts/consts";

import { checkIfLimitReached } from "../../../helpers/checkIfLimitReached";
import { countAmountOfLetters } from "../../../helpers/countAmountOfLetters";

import { FETCH_POSTS_QUERY } from "../../../utils/graphql";

import {
  PostsFormContainer,
  PostsFormTitle,
  PostsFormBody,
  PostsFormBodyPostInput,
  PostsFormBodyProgressBox,
  PostsFormBodyProgress,
  PostsFormBodyPostLength,
  PostsFormButtons,
  PostsFormButtonSend,
  PostsFormButtonClear,
} from "./PostsForm.styled";

import { colors } from "../../../styles/colorPalette";

interface FormData {
  postText: string;
}

const initialFormState = {
  postText: "",
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($postText: String!) {
    createPost(postText: $postText) {
      id
      postText
      createdAt
      userLogin
      likes {
        id
        userLogin
        createdAt
      }
      likeCount
      comments {
        id
        commentText
        userLogin
        createdAt
      }
      commentCount
    }
  }
`;

const PostsForm = (): React.ReactElement => {
  const [formData, setFormData] = React.useState<FormData>(initialFormState);

  const [createPost, { loading }] = useMutation(CREATE_POST_MUTATION, {
    update(proxy, result) {
      const data = proxy.readQuery<any | null>({
        query: FETCH_POSTS_QUERY,
      });

      const newPost = result.data.createPost;

      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: { getPosts: [newPost, ...data.getPosts] },
      });

      formData.postText = "";
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    },
    variables: formData,
  });

  const onFormInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onClearButtonClick = () => {
    setFormData(initialFormState);
  };

  const onSendButtonClick = () => {
    setFormData(initialFormState);
    createPost();
  };

  const postLetterLimit = countAmountOfLetters(formData.postText);

  const isLimitReached = checkIfLimitReached(formData.postText);

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
      <PostsFormButtons>
        <PostsFormButtonClear onClick={onClearButtonClick} type="button" disabled={postLength <= 0 || loading}>
          Очистить
        </PostsFormButtonClear>
        <PostsFormButtonSend
          onClick={onSendButtonClick}
          type="button"
          disabled={isLimitReached || postLength <= 0 || loading}
        >
          {loading ? (
            <Loader type="ThreeDots" color={colors.primaryBlue} height={10} width={50} timeout={0} />
          ) : (
            "Отправить"
          )}
        </PostsFormButtonSend>
      </PostsFormButtons>
    </PostsFormContainer>
  );
};

export default React.memo(PostsForm);
