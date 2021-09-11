import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

const NoUserIsLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px;
`;

const NoUserIsLoggedTitle = styled.p`
  display: block;

  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  text-align: center;
`;

const NoUserIsLoggedSmile = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  font-size: 350px;
  line-height: 0;

  color: ${colors.primaryBlue};
`;

export { NoUserIsLoggedContainer, NoUserIsLoggedTitle, NoUserIsLoggedSmile };
