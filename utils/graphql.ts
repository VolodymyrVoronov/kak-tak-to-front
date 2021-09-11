import { gql } from "@apollo/client";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      postText
      createdAt
      userLogin
      likeCount
      likes {
        userLogin
      }
      commentCount
      comments {
        id
        userLogin
        createdAt
        commentText
      }
    }
  }
`;
