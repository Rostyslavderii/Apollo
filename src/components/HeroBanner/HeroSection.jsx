import { Banner, BannerText, Big, H1 } from './HeroSaction.styled';
import { ArrowToursItem } from './SliderContent/ArrowTours';
import { SliderContent } from './SliderContent/SliderContent';

export const HeroBanner = ({ setFavorites }) => {
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
