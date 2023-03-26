import {
  Banner,
  H1,
  BannerText,
} from 'components/HeroBanner/HeroSaction.styled';
import { FavoriteContainer } from './FavoriteBanner.styled';

export const FavoriteBanner = () => {
  return (
    <>
      <Banner>
        <FavoriteContainer />
        <BannerText>
          <H1>Favorites</H1>
        </BannerText>
      </Banner>
    </>
  );
};
