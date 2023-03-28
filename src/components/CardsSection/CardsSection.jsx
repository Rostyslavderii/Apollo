import { CardsSctn } from './CardsSection.styled';
import { CardsSlider } from './CardsSlider/CardsSlider';

export const CardsSection = ({ id, name, description, counterReducer }) => {
  return (
    <>
      <CardsSctn id="hero2">
        <CardsSlider counterReducer={counterReducer} />
      </CardsSctn>
    </>
  );
};
