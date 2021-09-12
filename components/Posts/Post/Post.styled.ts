import styled from "styled-components";

import { colors } from "../../../styles/colorPalette";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 350px;

  border-bottom: 2px solid ${colors.primaryBlue};
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-bottom: 10px;

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

  padding: 5px 0;

  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;
const PostBody = styled.p`
  display: flex;
  flex-grow: 1;

  padding: 5px 0;

  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: ${colors.primaryLightBlack};

  border-bottom: 1px solid ${colors.primaryBlue};
`;

const PostButtons = styled.div`
  display: flex;

  padding: 10px 0;
`;

export { PostContainer, PostHeader, PostHeaderAvatar, PostHeaderUserLogin, PostCreatedAt, PostBody, PostButtons };
