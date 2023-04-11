import { FavoriteCard } from './CardItem/FavoriteItem';
import { TrashCanButton } from 'components/FavoritesCards/CardItem/TrashCanButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useApolloClient, useQuery } from '@apollo/client';
import { cartItemsVar } from 'apollo/cache';
import * as ReactDOMServer from 'react-dom/server';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CardsTopic,
  CardsArrows,
  ArrowButton,
  CardsContainer,
  CardsItemContainer,
  CardImg,
  CardTextContainer,
  CardName,
  CardText,
  ButtomList,
  CardButton,
} from '../CardsSection/CardsSlider/CardsSlider.styled';

import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import Images from 'apollo/Images.json';
import { useReactiveVar } from '@apollo/client';
import { gql } from '@apollo/client';
import { useContext, useEffect } from 'react';
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

  // const rocketId = '5e9d0d95eda69955f709d1eb';

  // const { data, loading, error } = useQuery(GET_ROCKET, {
  //   variables: { rocketId: rocketId },
  // });

  const cartItems = useReactiveVar(cartItemsVar);

  useEffect(() => {
    // async function addToRocket(rocketId) {
    //   const { data } = await client.readQuery({
    //     query: GET_ROCKET,
    //     variables: {
    //       rocketId,
    //     },
    //   });
    //   console.log(data, 'data');
    // }
    // addToRocket(rocketId);
    console.log(cartItems, 'makeVar');
  }, [cartItems]);

  // const { card } = useContext(cardContext);
  // useEffect(() => {
  //   console.log(card, 'FavoritePage');
  // }, [card]);

  //const local = localStorage.getItem('');

  const Icons = Images.map(image => image.icon);
  SwiperCore.use([Navigation, Pagination]);

  return (
    <>
      {/* {cartItems.map(cardId => {
        const cardById = data.rocket.find(elem => elem.id === cardId); // filter
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
            style={{
              'padding-bottom': '60px',
            }}
            slidesPerView={3}
            spaceBetween={24}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return ReactDOMServer.renderToStaticMarkup(
                  <span className={className}></span>
                );
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {cartItems.map(({ id, name, description }, index) => {
              // return (
              //   <FavoriteCard //!
              //     id={id}
              //     name={name}
              //     description={description}
              //     index={index}
              //   />
              // );
              return (
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
                    <CardButton
                      type="button"
                      onClick={() => setFavorites(favorite => [...favorite, 1])}
                    >
                      buy
                    </CardButton>
                    <TrashCanButton
                      id={id}
                      index={index}
                      name={name}
                      description={description}
                    />
                  </ButtomList>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CardsContainer>
      </section>
    </>
  );
};
