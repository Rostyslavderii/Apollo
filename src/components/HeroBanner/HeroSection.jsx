import { Banner, BannerText, Big, H1 } from './HeroSaction.styled';
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
        <BannerText>
          <H1>
            the space is waitong for<Big>you</Big>
          </H1>
        </BannerText>
      </Banner>
    </>
  );
};
