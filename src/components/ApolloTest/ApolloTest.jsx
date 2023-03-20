import { useQuery } from '@apollo/client';
import { GET_ALL_ROCKETS } from '../apollo/todos';

export const ApolloTest = () => {
  const { data } = useQuery(GET_ALL_ROCKETS);

  return <></>;
};
