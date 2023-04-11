import { CgTrashEmpty } from 'react-icons/cg';
import { TrashLink } from './TrashCanButton.styled';
import { cartItemsVar } from 'apollo/cache';
import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';

export const TrashCanButton = ({ id, description, name, index }) => {
  const cartItems = useReactiveVar(cartItemsVar);

  // function deletedCard({ id, description, name }) {
  //   cartItems.filter(elem => {
  //     elem.id === id;
  //     return;
  //   });
  // }
  useEffect(() => {}, [cartItems]);

  function clearLine(index) {
    // cartItems.splice(index, 1);
    const Cards = cartItems;
    Cards.splice(index, 1);
    //Cards.filter(elem => elem.id !== id);
    console.log(Cards, index, 'function');
  }

  return (
    <>
      <TrashLink onClick={() => clearLine(index)}>
        <CgTrashEmpty alt="FavoriteHeart" />
      </TrashLink>
    </>
  );
};
