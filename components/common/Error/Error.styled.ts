import styled from "styled-components";

import { colors } from "../../../styles/colorPalette";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(229, 107, 111, 0.4962359943977591) 100%); ;
`;

const ErrorTitle = styled.h2`
  display: flex;

  font-size: 32px;
  line-height: 36px;
  font-weight: 400;
  color: ${colors.primaryLightBlack};
`;

const ErrorBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  margin-top: 35px;

  font-size: 50px;
  line-height: 50px;
  font-weight: 300;
  color: ${colors.primaryLightBlack};

  border: 2px solid ${colors.blackOpacity04};
  border-radius: 50px;

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }
`;

export { ErrorContainer, ErrorTitle, ErrorBackButton };
