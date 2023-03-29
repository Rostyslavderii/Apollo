import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './FavoriteHeart.styled';
import { useMyContext } from 'components/MyContext/MyContext';

export const FavoriteHeart = ({ id, description, name }) => {
  const { counterReducer } = useMyContext();

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
