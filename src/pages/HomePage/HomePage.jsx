import { CardsSection } from 'components/CardsSection/CardsSection';
import { HeroBanner } from 'components/HeroBanner/HeroSection';

const HomePage = ({ favorites, setFavorites }) => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <CardsSection
        favorites={favorites}
        setFavorites={setFavorites}
      ></CardsSection>
    </>
  );
};

export default HomePage;
