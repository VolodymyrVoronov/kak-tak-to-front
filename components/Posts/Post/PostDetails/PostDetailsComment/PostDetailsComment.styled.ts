import styled from "styled-components";

import { colors } from "../../../../../styles/colorPalette";

const PostDetailsCommentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;

  background-color: #f1f1f1;

  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.35);
`;

const PostDetailsCommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostDetailsCommentAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;

  margin-right: 15px;

  font-size: 28px;
  line-height: 28px;
  font-weight: 700;
  color: ${colors.primaryBlue};

  background-color: ${colors.blackOpacity01};

  border-radius: 50%;
`;

const PostDetailsCommentLogin = styled.p`
  display: flex;

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};
`;

const PostDetailsCommentText = styled.p`
  display: flex;
  flex-grow: 1;

  min-height: 100px;

  padding: 10px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostDetailsCommentFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

const PostDetailsCommentCreatedAt = styled.p`
  display: flex;

  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: ${colors.primaryLightBlack};
`;

const PostDetailsCommentDeleteButton = styled.button`
  display: flex;

  font-size: 30px;
  line-height: 30px;
  font-weight: 400;
  color: ${colors.primaryLightBlack};

  transition: 250ms ease;

  border: none;
  background-color: none;

  &:hover {
    cursor: pointer;

    color: ${colors.primaryRed};

    transition: 250ms ease;
  }

  &:disabled {
    cursor: default;

    color: ${colors.blackOpacity02};

    background-color: transparent;
  }
`;

export {
  PostDetailsCommentContainer,
  PostDetailsCommentHeader,
  PostDetailsCommentAvatar,
  PostDetailsCommentLogin,
  PostDetailsCommentText,
  PostDetailsCommentFooter,
  PostDetailsCommentCreatedAt,
  PostDetailsCommentDeleteButton,
};
