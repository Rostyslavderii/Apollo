import { ClearAll, Text } from './ClearButton.styled';
import { cartItemsVar } from 'apollo/cache';
import { useReactiveVar } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { GET_ROCKET_ITEMS } from 'apollo/apolloAPI';

export const ClearButton = () => {
  const cartItems = useReactiveVar(cartItemsVar);
  const client = useApolloClient();

  function clearLine() {
    const Cards = cartItems;
    const newCartItems = Cards.splice(0, cartItems.length);
    client.writeQuery({
      query: GET_ROCKET_ITEMS,
      data: { cartItems: newCartItems },
    });
  }

  return (
    <>
      <ClearAll onClick={() => clearLine()}>
        <Text>clear all</Text>
      </ClearAll>
    </>
  );
};
