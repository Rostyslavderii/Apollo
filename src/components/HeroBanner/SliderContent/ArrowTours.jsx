import {
  ArrowButton,
  ArrowImg,
  ArrowDiv,
  Text,
  ArrowContainer,
} from '../HeroSaction.styled';
import arrowImg from '../../../images/icons/ArrowDown.svg';

export const ArrowToursItem = () => {
  return (
    <>
      <ArrowDiv>
        <ArrowContainer>
          <ArrowButton>
            <Text>explore tours</Text> <ArrowImg src={arrowImg} alt="" />
          </ArrowButton>
        </ArrowContainer>
      </ArrowDiv>
    </>
  );
};
