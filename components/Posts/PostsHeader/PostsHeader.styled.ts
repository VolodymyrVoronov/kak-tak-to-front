import styled, { css } from "styled-components";

import { colors } from "../../../styles/colorPalette";

const PostsHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  padding: 15px 25px;

  background-color: ${colors.primaryBlue};
`;

const PostsHeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

const PostsHeaderUserAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  margin-right: 15px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  color: ${colors.whiteOpacity09};

  background-color: ${colors.whiteOpacity03};

  border-radius: 50%;
`;

const PostsHeaderUserName = styled.p`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${colors.white};
`;

const PostsHeaderButtonBox = styled.div`
  display: flex;

  margin-left: auto;
`;

interface PostsHeaderButtonPorps {
  isUser: boolean;
}

const PostsHeaderButton = styled.button<PostsHeaderButtonPorps>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? css`flex-end` : css`center`)};
  align-items: center;

  width: 50px;
  height: 50px;

  font-size: 30px;
  line-height: 30px;
  font-weight: 300;
  color: ${colors.white};

  border: 1px solid ${colors.whiteOpacity04};
  border-radius: 50px;

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.whiteOpacity01};

    transition: 250ms ease;
  }
`;

export {
  PostsHeaderContainer,
  PostsHeaderUser,
  PostsHeaderUserAvatar,
  PostsHeaderUserName,
  PostsHeaderButtonBox,
  PostsHeaderButton,
};
