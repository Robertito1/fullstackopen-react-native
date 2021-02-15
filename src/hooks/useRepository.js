import {GET_REPOSITORY} from '../graphql/queries';
import { useQuery } from "@apollo/client";

const useRepository = ({id}) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {id}
  });
  return { repository: data?.repository,loading};
};


export default useRepository;