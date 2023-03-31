import { FavoriteCard } from './CardItem/FavoriteItem';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CardsTopic,
  CardsArrows,
  ArrowButton,
} from '../CardsSection/CardsSlider/CardsSlider.styled';

import 'swiper/css';
import 'swiper/less/navigation';

export const FavoritesCards = ({ favorites, setFavorites }) => {
  const favoritesCard = useSelector(state => state.favoriteCard.favorites);
  // console.log(favoritesCard, 'favorites');

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
          {favorites.length > 0 &&
            favorites.map(({ id, name, description }, index) => {
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
