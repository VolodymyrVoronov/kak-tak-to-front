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

export { PostsContainer, PostsContent };
