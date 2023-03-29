import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './FavoriteHeart.styled';

export const FavoriteHeart = ({ id, description, name, counterReducer }) => {
  return (
    <>
      <FavoriteLink
        onClick={() => counterReducer({ id, description, name })}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
