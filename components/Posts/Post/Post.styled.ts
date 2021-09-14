import styled, { css } from "styled-components";

import { colors } from "../../../styles/colorPalette";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 450px;

  /* border-bottom: 2px solid ${colors.primaryBlue}; */

  background-color: #f1f1f1;

  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.35);
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostHeaderAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  margin-right: 15px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  color: ${colors.primaryBlue};

  background-color: ${colors.blackOpacity01};

  border-radius: 50%;
`;

const PostHeaderUserLogin = styled.p`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};
`;

const PostCreatedAt = styled.p`
  display: flex;

  padding: 5px 10px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;
const PostBody = styled.p`
  display: flex;
  flex-grow: 1;

  min-height: 200px;

  padding: 5px 10px;

  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostButtonsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PostButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr auto;

  grid-template-areas: "a a b b c c";

  /* margin-top: 25px; */
  /* padding: 10px 0; */
`;

interface PostButtonLikeProps {
  liked: boolean;
}

const PostButtonLike = styled.button<PostButtonLikeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: a;

  padding: 5px 0;

  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: ${colors.primaryBlue};

  border: none;
  border-right: 1px solid ${colors.primaryBlue};

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }

  &:disabled {
    cursor: default;

    color: ${colors.blackOpacity02};

    background-color: transparent;
  }

  ${(props) =>
    props.liked &&
    css`
      color: ${colors.primaryRed};
    `}
`;

const PostButtonLikeIcon = styled.span`
  display: flex;

  font-size: 35px;
  line-height: 35px;

  margin-right: 10px;
`;

const PostButtonComments = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: b;

  padding: 5px 0;

  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: ${colors.primaryBlue};

  border: none;
  border-right: 1px solid ${colors.primaryBlue};

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }
`;

const PostButtonCommentsIcon = styled.span`
  display: flex;

  font-size: 35px;
  line-height: 35px;

  margin-right: 10px;
`;

const PostButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: c;

  padding: 5px 0;

  font-size: 35px;
  line-height: 35px;
  font-weight: 500;
  color: ${colors.primaryBlue};

  border: none;

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }

  &:disabled {
    cursor: default;

    color: ${colors.blackOpacity02};

    background-color: transparent;
  }
`;

export {
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
};
