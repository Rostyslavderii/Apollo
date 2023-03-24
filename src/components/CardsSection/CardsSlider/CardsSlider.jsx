import { Sp, LabelsCtrl, RadioButtonsDiv } from './CardsSlider.styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FavoriteHeart } from 'components/Header/Navigation/AccountList/FavoriteHeart/FavoriteHeart';
import {
  CardList,
  CardsItemContainer,
  CardItem,
  CardImg,
  CardsContainer,
  CardTextContainer,
  CardName,
  CardText,
  CardsTopic,
  CardsH1,
  CardsArrows,
  ArrowButton,
  ButtomList,
  CardButton,
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
    console.log(2);
    if (slideIndex !== Images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    console.log(1);
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
            <ArrowButton onClick={() => prevSlide()}>
              <IoIosArrowBack />
            </ArrowButton>
            <ArrowButton>
              <IoIosArrowForward onClick={() => nextSlide()} />
            </ArrowButton>
          </CardsArrows>
        </CardsTopic>
        <CardList>
          {data.rockets.map(({ id, name, description }, index) => (
            <CardItem
              key={id}
              className={slideIndex === index + 1 ? 'slide' : ''}
            >
              <CardsItemContainer>
                <CardImg
                  src={process.env.PUBLIC_URL + Icons[index]}
                  alt={description}
                />
              </CardsItemContainer>
              <CardTextContainer>
                <CardName>{name}</CardName>
                <CardText>{description}</CardText>
              </CardTextContainer>
              <ButtomList>
                <CardButton to="/">buy</CardButton>
                <FavoriteHeart />
              </ButtomList>
            </CardItem>
          ))}
        </CardList>
        <RadioButtonsDiv>
          <LabelsCtrl>
            {Array.from({ length: 3 }).map((item, index) => (
              <Sp key={index} onClick={() => moveInput(index + 3)}></Sp>
            ))}
          </LabelsCtrl>
        </RadioButtonsDiv>
      </CardsContainer>
    </>
  );
};
