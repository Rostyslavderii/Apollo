import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './FavoriteHeart.styled';
import { useNavigate } from 'react-router';

export const FavoriteHeart = () => {
  const navigate = useNavigate();

  return (
    <>
      <FavoriteLink
        to="favorite"
        // onClick={() => navigate('favorite')}
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
