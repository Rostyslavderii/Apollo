// import { useState } from 'react';
// import { configureStore } from '@reduxjs/toolkit';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FavoriteHeart } from 'components/Header/Navigation/AccountList/FavoriteHeart/FavoriteHeart';
import {
  CardsItemContainer,
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
//ApolloApi
import { GET_ALL_ROCKETS } from '../../../apollo/apolloAPI';
import { useQuery } from '@apollo/client';
import Images from '../../../apollo/Images.json';
import * as ReactDOMServer from 'react-dom/server';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

//export const store = configureStore({reducer:counterReducer});

export const CardsSlider = ({ counterReducer }) => {
  // const [favorites, setFavotires] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const Icons = Images.map(image => image.icon);

  SwiperCore.use([Pagination, Navigation]);

  // const counterReducer = ({ id, description, name }) => {
  //   const data = {
  //     id: id,
  //     description: description,
  //     name: name,
  //   };
  //   setFavotires(prevState => [...prevState, data]);
  //   console.log(favorites);
  // };
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
          // favorites={this.state.favorites}
          style={{
            'padding-bottom': '60px',
          }}
          slidesPerView={3}
          spaceBetween={24}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return ReactDOMServer.renderToStaticMarkup(
                <span className={className}></span>
              );
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.rockets.map(({ id, name, description }, index) => (
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
              <ButtomList>
                <CardButton to="/">buy</CardButton>
                <FavoriteHeart
                  id={id}
                  index={index}
                  name={name}
                  description={description}
                  counterReducer={counterReducer}
                />
              </ButtomList>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsContainer>
    </>
  );
};
