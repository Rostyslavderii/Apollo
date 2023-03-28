import { FavoriteBanner } from 'components/FavoriteBanner/FavoriteBanner';
import { FavoritesCards } from 'components/FavoritesCards/FavoritesCards';
import { createContext } from 'react';

const FavoritePage = ({ favorites1 }) => {
  const MyContext = createContext([1, 2, 3, 4]);
  return (
    <>
      <MyContext.Provider value={favorites1}>
        <FavoriteBanner />
        <FavoritesCards />
      </MyContext.Provider>
    </>
  );
};

export default FavoritePage;
