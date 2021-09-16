import styled, { css } from "styled-components";

import { colors } from "../../../../styles/colorPalette";

const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostDetailsBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 800px;

  margin: 0 auto;
  padding: 0 25px;
`;

const PostDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 0;

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostDetailsHeaderAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 65px;
  height: 65px;

  margin-right: 15px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  color: ${colors.primaryBlue};

  background-color: ${colors.blackOpacity01};

  border-radius: 50%;
`;

const PostDetailsHeaderUserLogin = styled.p`
  display: flex;

  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};
`;

const PostDetailsCreatedAt = styled.p`
  display: flex;

  padding: 10px 0;

  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostDetailsText = styled.p`
  display: flex;
  flex-grow: 1;

  min-height: 200px;

  padding: 10px 0;

  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostDetailsButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr auto;

  grid-template-areas: "a b c";

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostDetailsButtonsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 56px;

  border: 1px solid ${colors.primaryBlue};
  border-top: none;
`;

const PostDetailsButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: a;

  padding: 10px 0;

  font-size: 35px;
  line-height: 35px;
  font-weight: 500;
  color: ${colors.primaryBlue};

  border: none;
  border-left: 1px solid ${colors.primaryBlue};
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
`;

interface PostDetailsButtonLike {
  liked?: boolean;
}

const PostDetailsButtonLike = styled.button<PostDetailsButtonLike>`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: b;

  padding: 10px 0;

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

const PostDetailsButtonLikeIcon = styled.span`
  display: flex;

  font-size: 35px;
  line-height: 35px;

  margin-right: 10px;
`;

const PostDetailsButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: c;

  padding: 10px 0;

  font-size: 35px;
  line-height: 35px;
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
`;

export {
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
};
