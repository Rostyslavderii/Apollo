import { gql } from '@apollo/client';

export const GET_ALL_ROCKETS = gql`
  query RocketsQuery {
    rockets {
      id
      description
      name
    }
  }
`;
