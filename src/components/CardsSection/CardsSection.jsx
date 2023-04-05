import { useContext } from 'react';
import { CardsSctn } from './CardsSection.styled';
import { CardsSlider } from './CardsSlider/CardsSlider';
import { cardContext } from 'apollo/useContext';

export const CardsSection = ({ favorites, setFavorites }) => {
  const { card } = useContext(cardContext);
  console.log(card, 'card');
  return (
    <>
      <CardsSctn id="hero2">
        <CardsSlider favorites={favorites} setFavorites={setFavorites} />
      </CardsSctn>
    </>
  );
};
