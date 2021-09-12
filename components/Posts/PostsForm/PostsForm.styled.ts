import styled, { css } from "styled-components";

import { Button } from "../../../styles/Button/Button.styled";

import { colors } from "../../../styles/colorPalette";

const PostsFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px;
`;

const PostsFormTitle = styled.p`
  display: flex;

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primaryLightBlack};
`;

const PostsFormBody = styled.form`
  display: flex;
  flex-direction: column;
`;

const PostsFormBodyPostInput = styled.textarea`
  display: block;

  margin-top: 15px;
  padding: 10px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};

  border: none;
  border-bottom: 1px solid ${colors.primaryLightBlack};

  outline: none;

  transition: 250ms ease;

  background-color: rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }

  &:focus {
    background-color: ${colors.blackOpacity01};
  }
`;

const PostsFormBodyProgressBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
`;

interface PostsFormBodyProgressProps {
  progress?: number;
  limit?: boolean;
}

const PostsFormBodyProgress = styled.div<PostsFormBodyProgressProps>`
  position: relative;
  display: flex;
  flex-grow: 1;

  height: 7px;

  margin-right: 15px;

  background-color: ${colors.blackOpacity02};

  &::before {
    position: absolute;
    content: "";
    display: flex;

    top: 0;
    left: 0;

    width: ${(props) => props.progress}%;
    height: 7px;

    transition: 500ms ease;

    background-color: ${(props) =>
      props.limit
        ? css`
            ${colors.primaryRed}
          `
        : css`
            ${colors.primaryBlue}
          `};
  }
`;

interface PostsFormBodyPostLengthProps {
  limit?: boolean;
}

const PostsFormBodyPostLength = styled.p<PostsFormBodyPostLengthProps>`
  display: flex;

  width: 85px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  color: ${(props) =>
    props.limit
      ? css`
          ${colors.primaryRed}
        `
      : css`
          ${colors.primaryLightBlack}
        `};

  transition: 500ms ease;
`;

const PostsFormButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;

  grid-template-areas: "a a b b";

  margin-top: 25px;
`;

const PostsFormButtonClear = styled(Button)`
  grid-area: a;
`;

const PostsFormButtonSend = styled(Button)`
  grid-area: b;
`;

export {
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
};
