import { Sp, LabelsCtrl, RadioButtonsDiv } from './CardsSlider.styled';
import {
  CardList,
  CardItem,
  CardImg,
  CardsContainer,
} from './CardsSlider.styled';
import { useState } from 'react';

export const CardsSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== Images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Images.length);
    }
  };

  const moveInput = index => {
    setSlideIndex(index);
  };

  return (
    <>
      <CardsContainer>
        {/* <CardsTopic>
          <CardsH1></CardsH1>
          <CardsArrows>
            <ArrLeft></ArrLeft>
            <ArrRight></ArrRight>
          </CardsArrows>
        </CardsTopic> */}
        <CardList>
          {/* {Images.map((image, index) => (
            <CardItem
              key={image.id}
              //className={slideIndex === index + 1 ? 'slide' : ''}
              slide={slideIndex === index + 1}
            >
              {(console.log('id', image.id), console.log('slide'))}
              <CardImg
               src={process.env.PUBLIC_URL + image.icon}
               alt={image.description}
              />
            </CardItem>
          ))} */}
        </CardList>
        <RadioButtonsDiv>
          <LabelsCtrl>
            {Array.from({ length: 3 }).map((item, index) => (
              <Sp key={index} onClick={() => moveInput(index + 1)}></Sp>
            ))}
          </LabelsCtrl>
        </RadioButtonsDiv>
      </CardsContainer>
    </>
  );
};
