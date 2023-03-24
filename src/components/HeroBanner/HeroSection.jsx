import { Banner, BannerText, Big, H1 } from './HeroSaction.styled';
import { ArrowToursItem } from './SliderContent/ArrowTours';
import { SliderContent } from './SliderContent/SliderContent';
// const HandleCheckBox = event => {
//   console.log(event.target.value);
// };

export const HeroBanner = () => {
  return (
    <>
      <Banner>
        <SliderContent />
        <BannerText>
          <H1>
            the space is waiting for<Big>you</Big>
          </H1>
        </BannerText>
        <ArrowToursItem />
      </Banner>
    </>
  );
};
