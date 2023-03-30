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

export const FavoritesCards = () => {
  const favoritesCard = useSelector(state => state.favoriteCard.favorites);
  console.log(favoritesCard, 'favorites');

  //button delete
  const removeCard = () => {
    //console.log('removed');
    //setFavotires(favorites.filter(favorite => favorite.id !== favoritesId));
  };

  SwiperCore.use([Navigation]);
  let favorites = [0];
  //console.log(favorites, 'FavoritePage');
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
          {favoritesCard.length > 0 &&
            favoritesCard.map(({ id, name, description }, index) => {
              return (
                <FavoriteCard
                  key={id}
                  name={name}
                  description={description}
                  id={id}
                  index={index}
                  removeCard={removeCard}
                />
              );
            })}
        </Swiper>
      </section>
    </>
  );
};
