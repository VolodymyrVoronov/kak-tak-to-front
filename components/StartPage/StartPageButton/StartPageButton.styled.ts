import styled from "styled-components";

import { colors } from "../../../styles/colorPalette";

const StartPageButtonŠ”ontainer = styled.div`
  display: block;
`;

const StartPageButtonBox = styled.button`
  display: flex;
  justify-content: center;

  margin-top: 50px;
  padding: 10px 75px;

  font-size: 22px;
  line-height: 26px;
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

export { StartPageButtonŠ”ontainer, StartPageButtonBox };
