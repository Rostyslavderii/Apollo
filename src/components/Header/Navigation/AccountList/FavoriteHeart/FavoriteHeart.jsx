import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { FavoriteLink } from './FavoriteHeart.styled';
import { cartItemsVar } from 'apollo/cache';
import { useLazyQuery, useApolloClient } from '@apollo/client';
import { GET_ROCKET, GET_ROCKET_ITEMS } from 'apollo/apolloAPI';
import { client } from 'apollo/clientAPI';

import { useReactiveVar } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { cardContext } from 'apollo/useContext';
import { ADD_ROCKET } from 'apollo/apolloAPI';
import { useMutation } from '@apollo/client';
export const FavoriteHeart = ({ id, description, name }) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const [GetRocket, { data, loading, error }] = useLazyQuery(GET_ROCKET, {
    variables: { id: id },
  });
  const { getCard } = useContext(cardContext);
  function card(productId) {
    cartItemsVar([...cartItemsVar(), productId]);
    //console.log(cartItemsVar());
  }
  function localCard(product) {
    localStorage.setItem('apollo-cache-persist', product);
    console.log(localStorage.getItem('apollo-cache-persist'));
  }

  function addToRocket({ id, description, name }) {
    console.log(id);
    GetRocket({ variables: { $rocketId: id } });
    GetRocket({ variables: { id: id } });
    console.log(
      GetRocket({ variables: { id: id } }),
      GetRocket({ variables: { $rocketId: id } })
    );
  }

  // function refeaching({ id, description, name }) {
  //   refetch({ $rocketId: id });
  // }
  return (
    <>
      <FavoriteLink
        onClick={() => addToRocket({ id, description, name })}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
