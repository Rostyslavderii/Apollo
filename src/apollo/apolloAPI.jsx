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

export const ADD_ROCKET = gql`
  mutation AddRocket($rocketId: ID!) {
    addTodo(id: $rocketId) {
      id
      description
      name
    }
  }
`;
export const ADD_ROCKET2 = gql`
  mutation RocketAdd2($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;
