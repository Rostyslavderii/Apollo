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

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
