import { gql } from '@apollo/clients';

export const GET_ALL_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;
