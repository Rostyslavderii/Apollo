import { GET_ALL_ROCKETS } from '../../apollo/apolloAPI';
import { useQuery } from '@apollo/client';

export const ApolloTest = () => {
  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data.rockets.map(({ id, name, description }) => (
        <div key={id}>
          <h3>{name}</h3>
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};
