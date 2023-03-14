import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './FavoriteHeart.styled';

export const FavoriteHeart = () => {
  return (
    <>
      <FavoriteLink to="/favorite">
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
