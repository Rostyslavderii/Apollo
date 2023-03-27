import { BiHeart } from 'react-icons/bi';
import { FavoriteLink } from './FavoriteHeart.styled';

export const FavoriteHeart = (index, id) => {
  const addFavorites = () => {
    console.log(index);
    //console.log(data.rockets[index]);
    console.log(id);
  };

  return (
    <>
      <FavoriteLink
        onClick={addFavorites}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
