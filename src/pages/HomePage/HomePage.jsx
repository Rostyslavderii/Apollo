import { CardsSection } from 'components/CardsSection/CardsSection';
import { HeroBanner } from 'components/HeroBanner/HeroSection';

const HomePage = ({ favorites, setFavorites }) => {
  return (
    <>
      <HeroBanner
        favorites={favorites}
        setFavorites={setFavorites}
      ></HeroBanner>
      <CardsSection
        favorites={favorites}
        setFavorites={setFavorites}
      ></CardsSection>
    </>
  );
};

export default HomePage;
