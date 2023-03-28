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
import { useContext } from 'react';
import { MyContext } from '../../pages/FavoritePage/FavoritePage';

export const FavoritesCards = () => {
  //const addTask = createAction('tasks/AddTask');
  //  const value = useSelector(state => state.some.value);
  const Icons = Images.map(image => image.icon);

  SwiperCore.use([Navigation]);

  const data = useContext(MyContext);
  console.log(data, 'FavoritePage');
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
          {data.map(({ id, name, description }, index) => (
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
