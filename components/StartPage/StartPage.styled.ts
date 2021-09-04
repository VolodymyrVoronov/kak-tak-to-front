import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

const StartPageContainer = styled.div`
  display: grid;
  grid-auto-columns: 50%;
  grid-auto-flow: column;

  height: 100vh;
`;

const StartPageLeftSide = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  background-color: ${colors.primaryRed};
`;

const StartPageLeftSideSmile = styled.span`
  display: block;

  font-size: 450px;
  line-height: 0;

  color: ${colors.white};
`;

const StartPageRightSide = styled.div`
  display: grid;
  align-content: center;

  padding: 0 0 0 50px;
`;

const StartPageRightSideSmallSmile = styled.span`
  display: block;

  font-size: 60px;
  line-height: 60px;

  color: ${colors.primaryRed};
`;

const StartPageRightSideTitle = styled.h1`
  display: block;

  margin-top: 75px;

  font-size: 44px;
  line-height: 48px;
  font-weight: 700;
`;

const StartPageRightSideJoinText = styled.p`
  display: block;

  margin-top: 30px;

  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`;

const StartPageRightSideLoginBox = styled.div`
  display: flex;

  margin-top: 90px;
`;

const StartPageRightSideLoginText = styled.p`
  display: flex;

  margin-right: 5px;

  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
`;

const StartPageRightSideLoginLink = styled.span`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-weight: 500;

  a {
    color: ${colors.primaryBlue};

    list-style: none;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export {
  StartPageContainer,
  StartPageLeftSide,
  StartPageLeftSideSmile,
  StartPageRightSide,
  StartPageRightSideSmallSmile,
  StartPageRightSideTitle,
  StartPageRightSideJoinText,
  StartPageRightSideLoginBox,
  StartPageRightSideLoginText,
  StartPageRightSideLoginLink,
};
