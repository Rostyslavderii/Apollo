import { FavoriteBanner } from 'components/FavoriteBanner/FavoriteBanner';
import { FavoritesCards } from 'components/FavoritesCards/FavoritesCards';

const FavoritePage = ({ favorites, setFavorites }) => {
  return (
    <>
      <FavoriteBanner />
      <FavoritesCards favorites={favorites} setFavorites={setFavorites} />
    </>
  );
};

export default FavoritePage;
