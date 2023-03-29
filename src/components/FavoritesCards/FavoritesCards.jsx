import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
//import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CardsItemContainer,
  CardImg,
  CardTextContainer,
  CardName,
  CardText,
  CardsTopic,
  CardsArrows,
  ArrowButton,
} from '../CardsSection/CardsSlider/CardsSlider.styled';

import 'swiper/css';
import 'swiper/less/navigation';
//import { createAction } from '@reduxjs/toolkit';

import Images from '../../apollo/Images.json';
import { useMyContext } from '../MyContext/MyContext';

export const FavoritesCards = () => {
  //const addTask = createAction('tasks/AddTask');
  //  const value = useSelector(state => state.some.value);
  const Icons = Images.map(image => image.icon);

  SwiperCore.use([Navigation]);

  const { favorites1 } = useMyContext();

  console.log(favorites1, 'FavoritePage');
  return (
    <>
      <section>
        <CardsTopic>
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
          style={{}}
          slidesPerView={3}
          spaceBetween={24}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {favorites1.map(({ id, name, description }, index) => (
            <SwiperSlide
              key={id}
              style={{
                border: '1px solid #d3eaff',
                'max-width': '411px',
              }}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
