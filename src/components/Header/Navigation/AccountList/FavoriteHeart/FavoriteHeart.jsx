import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { FavoriteLink } from './FavoriteHeart.styled';
import { cartItemsVar } from 'apollo/cache';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_ROCKET, GET_ROCKET_ITEMS } from 'apollo/apolloAPI';
import { client } from 'apollo/clientAPI';

import { useReactiveVar } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { cardContext } from 'apollo/useContext';

export const FavoriteHeart = ({ id, description, name }) => {
  const cartItems = useReactiveVar(cartItemsVar);

  const { getCard } = useContext(cardContext);
  function card(productId) {
    cartItemsVar([...cartItemsVar(), productId]);
    //console.log(cartItemsVar());
  }

  return (
    <>
      <FavoriteLink
        onClick={() => getCard(id)}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
