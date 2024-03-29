import {
  ArrowButton,
  ArrowImg,
  ArrowDiv,
  Text,
  ArrowLink,
} from '../HeroSaction.styled';

import arrowImg from '../../../images/icons/ArrowDown.svg';

export const ArrowToursItem = () => {
  return (
    <>
      <ArrowDiv>
        <ArrowLink smooth to="/#hero2">
          <ArrowButton>
            <Text>explore tours</Text> <ArrowImg src={arrowImg} alt="" />
          </ArrowButton>
        </ArrowLink>
      </ArrowDiv>
    </>
  );
};
