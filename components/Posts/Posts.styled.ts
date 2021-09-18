import styled from "styled-components";

import { device } from "../../consts/breakPoints";
import { colors } from "../../styles/colorPalette";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsContent = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

const PostsNoPostsTitle = styled.p`
  display: flex;
  justify-content: center;

  padding: 25px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 400;
  color: ${colors.primaryBlue};
`;

const PostsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 3rem;

  padding: 25px;

  height: 91.8vh;
  overflow-y: scroll;

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { PostsContainer, PostsContent, PostsNoPostsTitle, PostsItems };
