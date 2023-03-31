import { CardsSctn } from './CardsSection.styled';
import { CardsSlider } from './CardsSlider/CardsSlider';

export const CardsSection = ({ favorites, setFavorites }) => {
  return (
    <>
      <CardsSctn id="hero2">
        <CardsSlider favorites={favorites} setFavorites={setFavorites} />
      </CardsSctn>
    </>
  );
};
