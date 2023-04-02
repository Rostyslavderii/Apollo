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

export const GET_ROCKET = gql`
  query GetRocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      description
      name
    }
  }
`;

export const GET_ROCKET_ITEMS = gql`
  query LocalRocket {
    cartItems @client
  }
`;
