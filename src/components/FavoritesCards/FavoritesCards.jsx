import { FavoriteCard } from './CardItem/FavoriteItem';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useApolloClient, useQuery } from '@apollo/client';
import { cartItemsVar } from 'apollo/cache';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CardsTopic,
  CardsArrows,
  ArrowButton,
  CardsContainer,
} from '../CardsSection/CardsSlider/CardsSlider.styled';

import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import { useReactiveVar } from '@apollo/client';
import { gql } from '@apollo/client';
import { useContext, useEffect } from 'react';
//import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { cardContext } from 'apollo/useContext';
//import { useLazyQuery } from '@apollo/client';
import { GET_ALL_ROCKETS, GET_ROCKET } from 'apollo/apolloAPI';
export const GET_ROCKET_ITEMS = gql`
  query LocalRocket {
    cartItems @client
  }
`;

export const FavoritesCards = ({ favorites, setFavorites }) => {
  const client = useApolloClient();
  // console.log(client.cache.data, 'kash'); // kash est s perou stranitsy

  const rocketId = '5e9d0d95eda69955f709d1eb';

  const { data, loading, error } = useQuery(GET_ROCKET, {
    variables: { rocketId: rocketId },
  });

  const cartItems = useReactiveVar(cartItemsVar);

  useEffect(
    rocketId => {
      async function addToRocket(rocketId) {
        const { data } = await client.readQuery({
          query: GET_ROCKET,
          variables: {
            rocketId,
          },
        });
        console.log(data, 'data');
      }
      addToRocket(rocketId);
      console.log(cartItems, 'makeVar');
    },
    [cartItems]
  );

  const { card } = useContext(cardContext);
  useEffect(() => {
    console.log(card, 'FavoritePage');
  }, [card]);

  //const local = localStorage.getItem('');

  SwiperCore.use([Navigation]);

  return (
    <>
      {/* {cartItems.map(cardId => {
        const cardById = data.rocket.find(elem => elem.id === cardId);
      })} */}
      <section>
        <CardsContainer>
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
            {cartItems?.length > 0 &&
              cartItems.map(({ id, name, description }, index) => {
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
        </CardsContainer>
      </section>
    </>
  );
};
