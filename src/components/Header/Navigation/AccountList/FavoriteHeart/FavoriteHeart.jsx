import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { FavoriteLink } from './FavoriteHeart.styled';
import { cartItemsVar } from 'apollo/cache';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_ROCKET, GET_ROCKET_ITEMS } from 'apollo/apolloAPI';
import { client } from 'apollo/clientAPI';

import { useReactiveVar } from '@apollo/client';

import { useEffect } from 'react';

export const FavoriteHeart = ({ id, description, name }) => {
  const { data, loading, error } = useQuery(GET_ROCKET, {
    variables: { rocketId: id },
  });

  const cartItems = useReactiveVar(cartItemsVar);
  // console.log(data.rocket, 'cartItems');
  // console.log(cartItems, 'cartItemsVar');

  function card(productId) {
    cartItemsVar([...cartItemsVar(), productId]);
    console.log(cartItemsVar());
  }
  const addApollo = () => {};
  //console.log(addApollo);

  //console.log(cartItemsVar, 'favoriteHeart');
  return (
    <>
      {/* {cartItems.map(cardId => {
        const cardById = data.rocket.find(elem => elem.id === cardId);
      })} */}
      <FavoriteLink
        onClick={() => card(id)}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
