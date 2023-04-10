import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './HeartButtonLink.styled';
import { cartItemsVar } from 'apollo/cache';
import { useLazyQuery } from '@apollo/client';
import { GET_ROCKET, GET_ROCKET_ITEMS } from 'apollo/apolloAPI';

import { useReactiveVar, useApolloClient } from '@apollo/client';
import { useContext } from 'react';
import { cardContext } from 'apollo/useContext';

import { useNavigation } from 'react-router';

export const HeartButtonLink = ({ id, description, name }) => {
  const client = useApolloClient();
  const navigation = useNavigation();

  const [GetRocket, { data, loading, error }] = useLazyQuery(GET_ROCKET, {
    variables: { rocketId: id },
  });
  const { getCard, card } = useContext(cardContext);
  // console.log(card, 'context');

  function cards(productId) {
    cartItemsVar([...cartItemsVar(), productId]);
    //console.log(cartItemsVar(), 'what');
  }

  async function addToRocket(rocketId) {
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
      <FavoriteLink onClick={() => getCard(id)}>
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
