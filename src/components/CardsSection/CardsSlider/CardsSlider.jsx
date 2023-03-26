import { Sp, LabelsCtrl, RadioButtonsDiv } from './CardsSlider.styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import { FavoriteHeart } from 'components/Header/Navigation/AccountList/FavoriteHeart/FavoriteHeart';
import {
  theme,
  sp1,
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
import * as ReactDOMServer from 'react-dom/server';

import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

export const CardsSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const nextSlide = () => {
    if (slideIndex !== data.rockets.length) {
      setSlideIndex(slideIndex + 1);
      console.log(1, setSlideIndex(slideIndex + 1));
    } else if (slideIndex === data.rockets.length) {
      setSlideIndex(1);
      console.log(2, setSlideIndex(1));
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      console.log(1, setSlideIndex(slideIndex - 1));
    } else if (slideIndex === 1) {
      setSlideIndex(data.rockets.length);
      console.log(2, setSlideIndex(data.rockets.length));
    }
  };

  const moveInput = index => {
    setSlideIndex(index);
  };
  const Icons = Images.map(image => image.icon);

  SwiperCore.use([Pagination, Navigation]);

  return (
    <>
      <CardsContainer>
        <CardsTopic>
          <CardsH1>popular tours</CardsH1>
          <CardsArrows>
            <ArrowButton className="swiper-button-prev">
              <IoIosArrowBack />
            </ArrowButton>
            <ArrowButton className="swiper-button-next">
              <IoIosArrowForward />
            </ArrowButton>
          </CardsArrows>
        </CardsTopic>
        <Swiper
          style={
            {
              // '--swiper-pagination-color': '#000',
              // '--swiper-pagination-bullet-inactive-color': '#999999',
              // '--swiper-pagination-bullet-inactive-opacity': '1',
              // '--swiper-pagination-bullet-size': '12px',
              // '--swiper-pagination-bullet-horizontal-gap': '6px',
            }
          }
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            //el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className, theme) {
              return ReactDOMServer.renderToStaticMarkup(
                <span className={className} theme={theme}></span>
              );
            },
          }}
          navigation={
            // true
            {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          }
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.rockets.map(({ id, name, description }, index) => (
            <SwiperSlide
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
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <RadioButtonsDiv>
          <LabelsCtrl>
            {Array.from({ length: 3 }).map((item, index) => (
              <Sp
                className=""
                key={index}
                // onClick={() => moveInput(index + 3)}
              ></Sp>
            ))}
          </LabelsCtrl>
        </RadioButtonsDiv> */}
      </CardsContainer>
    </>
  );
};
