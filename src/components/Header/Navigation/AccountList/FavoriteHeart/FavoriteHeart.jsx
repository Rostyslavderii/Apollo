import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { FavoriteLink } from './FavoriteHeart.styled';
import { cartItemsVar } from 'apollo/cache';

import { useEffect } from 'react';
export const FavoriteHeart = ({ id, description, name }) => {
  const addFavorite = () =>
    cartItemsVar([...cartItemsVar(), { id, description, name }]);

  return (
    <>
      <FavoriteLink
        onClick={() => addFavorite}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
