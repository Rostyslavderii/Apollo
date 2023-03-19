import { Banner } from './HeroSaction.styled';
import { SliderContent } from './SliderContent/SliderContent';
import { ArrowToursItem } from './SliderContent/ArrowTours';
// const HandleCheckBox = event => {
//   console.log(event.target.value);
// };

export const HeroBanner = () => {
  return (
    <>
      <Banner>
        <SliderContent />
        <ArrowToursItem />
      </Banner>
    </>
  );
};
