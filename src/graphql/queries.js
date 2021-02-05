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