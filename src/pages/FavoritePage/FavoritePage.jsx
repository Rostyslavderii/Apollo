import { FavoriteBanner } from 'components/FavoriteBanner/FavoriteBanner';
import { FavoritesCards } from 'components/FavoritesCards/FavoritesCards';
import { useContext, useEffect } from 'react';
import { cardContext } from 'apollo/useContext';

const FavoritePage = ({ favorites, setFavorites }) => {
  const { card } = useContext(cardContext);
  useEffect(() => {
    console.log(card, 'FaviretePage2');
  }, [card]);
  console.log(card, 'FaviretePage2');
  return (
    <>
      <FavoriteBanner />
      <FavoritesCards favorites={favorites} setFavorites={setFavorites} />
    </>
  );
};

export default FavoritePage;
