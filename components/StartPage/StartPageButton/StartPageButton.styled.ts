import styled from "styled-components";

import { colors } from "../../../styles/colorPalette";

const StartPageButtonСontainer = styled.div`
  display: block;
`;

const StartPageButtonBox = styled.button`
  display: flex;
  justify-content: center;

  width: 500px;

  margin-top: 50px;
  padding: 20px 0;

  font-size: 32px;
  line-height: 36px;
  font-weight: 500;

  border: 1px solid ${colors.blackOpacity04};
  border-radius: 50px;

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }
`;

export { StartPageButtonСontainer, StartPageButtonBox };
