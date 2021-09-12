import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

const Button = styled.button`
  display: flex;
  justify-content: center;

  padding: 10px 0;

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

  &:disabled {
    cursor: default;

    border: 1px solid ${colors.blackOpacity03};

    background-color: transparent;
  }
`;

export { Button };
