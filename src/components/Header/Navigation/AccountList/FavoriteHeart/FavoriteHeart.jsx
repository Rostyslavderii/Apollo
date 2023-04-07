import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { FavoriteLink } from './FavoriteHeart.styled';
import { cartItemsVar } from 'apollo/cache';
import { useLazyQuery } from '@apollo/client';
import { GET_ROCKET, GET_ROCKET_ITEMS } from 'apollo/apolloAPI';

import { useReactiveVar, useApolloClient } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { cardContext } from 'apollo/useContext';
import { ADD_ROCKET } from 'apollo/apolloAPI';
import { useMutation } from '@apollo/client';
import { useNavigation } from 'react-router';
export const FavoriteHeart = ({ id, description, name }) => {
  const client = useApolloClient();
  const navigation = useNavigation();
  const [GetRocket, { data, loading, error }] = useLazyQuery(GET_ROCKET, {
    variables: { $rocketId: id },
  });
  const { getCard } = useContext(cardContext);

  function card(productId) {
    cartItemsVar([...cartItemsVar(), productId]);
    //console.log(cartItemsVar());
  }

  async function addToRocket(rocketId) {
    // await GetRocket({ variables: { rocketId: rocketId } });
    cartItemsVar([...cartItemsVar(), rocketId]);
    const { data } = await client.query({
      query: GET_ROCKET,
      variables: {
        rocketId,
      },
    });
    console.log(data);
    console.log(cartItemsVar());
  }

  return (
    <>
      <FavoriteLink
        onClick={() => addToRocket(id)}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
