import { FavoriteCard } from './CardItem/FavoriteItem';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useQuery } from '@apollo/client';
import { GET_CART_ITEMS } from 'apollo/apolloAPI';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CardsTopic,
  CardsArrows,
  ArrowButton,
} from '../CardsSection/CardsSlider/CardsSlider.styled';

import 'swiper/css';
import 'swiper/less/navigation';

export const FavoritesCards = ({ favorites, setFavorites }) => {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);

  if (loading) return <p>...Loading</p>;

  if (error) return <p>ERROR: {error.message}</p>;
  //button delete

  SwiperCore.use([Navigation]);
  // let favorites = [2];

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
          {data.length > 0 &&
            data.map(({ id, name, description }, index) => {
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
