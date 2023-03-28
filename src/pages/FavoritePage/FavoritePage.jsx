import { FavoriteBanner } from 'components/FavoriteBanner/FavoriteBanner';
import { FavoritesCards } from 'components/FavoritesCards/FavoritesCards';
import { createContext } from 'react';

export const MyContext = createContext([1, 2, 3, 4]);

const FavoritePage = ({ favorites }) => {
  return (
    <>
      <MyContext.Provider value={favorites}>
        <FavoriteBanner />
        <FavoritesCards />
      </MyContext.Provider>
    </>
  );
};

export default FavoritePage;
