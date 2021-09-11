import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsContent = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;

  height: 100vh;
`;

const PostsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 1rem;

  padding: 25px;
`;

export { PostsContainer, PostsContent, PostsItems };
