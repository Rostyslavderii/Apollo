import { CardsSection } from 'components/CardsSection/CardsSection';
import { HeroBanner } from 'components/HeroBanner/HeroSection';

const HomePage = ({ id, name, description, counterReducer }) => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <CardsSection counterReducer={counterReducer}></CardsSection>
    </>
  );
};

export default HomePage;
