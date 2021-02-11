import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges{
         node{
           id
           ownerAvatarUrl
           reviewCount
           ratingAverage
           stargazersCount
           forksCount
           language
           fullName
           description
         }
        }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;
export const GET_REPOSITORY = gql`
query getRepository($id: ID!){
  repository(id: $id){
    id
    ownerAvatarUrl
    reviewCount
    ratingAverage
    stargazersCount
    forksCount
    language
    fullName
    description
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`