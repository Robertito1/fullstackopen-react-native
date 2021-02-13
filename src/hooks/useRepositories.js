
import {GET_REPOSITORIES} from '../graphql/queries'
import { useQuery } from "@apollo/client";
import { useDebounce } from 'use-debounce';


const useRepositories = ({ order,searchInput, first }) => {
  const [value] = useDebounce(searchInput, 500);
  const arrangeOrder = (order) => {
    switch (order) {
      case 'latestCreated': {
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      }
      case 'highestRated': {
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      }
      case 'lowestRated': {
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      }
      default: {
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      }
    }
  };

  const variables = { ...arrangeOrder(order), searchInput: value, first};
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };
  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
  };
}
export default useRepositories;