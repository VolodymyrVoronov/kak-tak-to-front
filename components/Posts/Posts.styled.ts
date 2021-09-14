import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsContent = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

const PostsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 3rem;

  padding: 25px;

  height: 91.8vh;
  overflow-y: scroll;
`;

export { PostsContainer, PostsContent, PostsItems };
