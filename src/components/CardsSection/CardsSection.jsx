import { useContext } from 'react';
import { CardsSctn } from './CardsSection.styled';
import { CardsSlider } from './CardsSlider/CardsSlider';
import { cardContext } from 'apollo/useContext';

export const CardsSection = ({ favorites, setFavorites }) => {
  return (
    <>
      <CardsSctn id="hero2">
        <CardsSlider favorites={favorites} setFavorites={setFavorites} />
      </CardsSctn>
    </>
  );
};
