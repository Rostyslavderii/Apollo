import { FavoriteCard } from './CardItem/FavoriteItem';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useQuery } from '@apollo/client';
import { cartItemsVar } from 'apollo/cache';
import { GET_ROCKET } from 'apollo/apolloAPI';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CardsTopic,
  CardsArrows,
  ArrowButton,
} from '../CardsSection/CardsSlider/CardsSlider.styled';

import 'swiper/css';
import 'swiper/less/navigation';
import { useReactiveVar } from '@apollo/client';
import { gql } from '@apollo/client';
import { useEffect } from 'react';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
export const GET_ROCKET_ITEMS = gql`
  query LocalRocket {
    cartItems @client
  }
`;

export const FavoritesCards = ({ favorites, setFavorites }) => {
  // const { data, loading, error } = useQuery(GET_ROCKET, {
  //   variables: { rocketId: '5e9d0d95eda69955f709d1eb' },
  // });
  const { data, loading, error } = useQuery(GET_ROCKET_ITEMS);
  const cartItems = useReactiveVar(cartItemsVar);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItemsVar]);

  if (loading) return <p>...Loading</p>;

  if (error) return <p>ERROR: {error.message}</p>;

  SwiperCore.use([Navigation]);
  // let favorites = [2];

  return (
    <>
      {/* {cartItems.map(cardId => {
        const cardById = data.rocket.find(elem => elem.id === cardId);
      })} */}
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
          {data.length > 0 &&
            data.cartItems.map(({ id, name, description }, index) => {
              return (
                <FavoriteCard
                  favorites={favorites}
                  setFavorites={setFavorites}
                  key={id}
                  name={name}
                  description={description}
                  id={id}
                  index={index}
                />
              );
            })}
        </Swiper>
      </section>
    </>
  );
};
