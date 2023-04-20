import { CgTrashEmpty } from 'react-icons/cg';
import { TrashLink } from './TrashCanButton.styled';
import { cartItemsVar } from 'apollo/cache';
import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { GET_ROCKET_ITEMS } from 'apollo/apolloAPI';
import { toast } from 'react-toastify';

export const TrashCanButton = ({ id, description, name, index, data }) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const client = useApolloClient();

  const notify = () => {
    toast.success('Your flight have been deleted', {
      theme: 'dark',
      icon: '🚀',
    });
  };

  useEffect(() => {}, [cartItems]);

  // const handleDelete = id => {
  //   const newCartItems = data.cartItems.filter(item => item.id !== id);
  //   console.log(newCartItems, 'new');
  //   client.writeQuery({
  //     query: GET_ROCKET_ITEMS,
  //     data: { cartItems: newCartItems },
  //   });
  // };

  function clearLine({ index }) {
    const Cards = cartItems;
    const newCartItems = Cards.splice(index, 1);
    client.writeQuery({
      query: GET_ROCKET_ITEMS,
      data: { cartItems: newCartItems },
    });
  }

  return (
    <>
      <TrashLink
        onClick={() => {
          notify();
          clearLine({ index });
        }}
      >
        <CgTrashEmpty alt="TrashCanButton" />
      </TrashLink>
    </>
  );
};
