import { Sp, LabelsCtrl, RadioButtonsDiv } from './CardsSlider.styled';
import {
  CardList,
  CardItem,
  CardImg,
  CardsContainer,
  CardsTopic,
  CardsH1,
  CardsArrows,
  ArrLeft,
  ArrRight,
} from './CardsSlider.styled';
import { useState } from 'react';
import { GET_ALL_ROCKETS } from '../../../apollo/apolloAPI';
import { useQuery } from '@apollo/client';
import Images from '../../../apollo/Images.json';

export const CardsSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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
  const Icons = Images.map(image => image.icon);

  return (
    <>
      <CardsContainer>
        <CardsTopic>
          <CardsH1>popular tours</CardsH1>
          <CardsArrows>
            <ArrLeft>L</ArrLeft>
            <ArrRight>R</ArrRight>
          </CardsArrows>
        </CardsTopic>
        <CardList>
          {data.rockets.map(({ id, name, description }, index) => (
            <CardItem
              key={id}
              className={slideIndex === index + 1 ? 'slide' : ''}
            >
              <CardImg
                src={process.env.PUBLIC_URL + Icons[index]}
                alt={description}
              />
              <h3>{name}</h3>
              <p>{description}</p>
            </CardItem>
          ))}
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
