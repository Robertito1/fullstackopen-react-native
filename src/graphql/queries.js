import { gql } from 'apollo-boost';
import { REPOSITORY_NODE_DETAILS, PAGE_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    )  {
      pageInfo {
        ...PageInfo
      }
      edges {
        node {
          ...RepositoryNodeDetails
        }
        cursor
      }
    }
  }
  ${PAGE_INFO}
  ${REPOSITORY_NODE_DETAILS}
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