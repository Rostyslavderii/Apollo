import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './HeartButtonLink.styled';
import { cartItemsVar } from 'apollo/cache';
import { useLazyQuery } from '@apollo/client';
import { GET_ROCKET } from 'apollo/apolloAPI';

import { useApolloClient } from '@apollo/client';
import { useContext } from 'react';
import { cardContext } from 'apollo/useContext';

import { useNavigation } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

export const HeartButtonLink = ({ id, description, name }) => {
  const { getCard, card } = useContext(cardContext);
  // console.log(card, 'context');

  const client = useApolloClient();
  function cards(rocket) {
    cartItemsVar([...cartItemsVar(), rocket]);
    getCard(rocket);
  }

  // async function addToRocket(rocketId) {
  //   cartItemsVar([...cartItemsVar(), rocketId]);
  //   const { data } = await client.query({
  //     query: GET_ROCKET,
  //     variables: {
  //       rocketId,
  //     },
  //   });
  // }

  const notify = () => {
    toast('You choose your best flight', {
      theme: 'dark',
      icon: '🚀',
    });
  };

  return (
    <>
      <FavoriteLink
        onClick={() => {
          notify();
          cards({ id, description, name });
        }}
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
