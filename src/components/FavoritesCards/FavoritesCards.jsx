import { FavoriteCard } from './CardItem/FavoriteItem';
import { TrashCanButton } from 'components/FavoritesCards/CardItem/TrashCanButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ReactDOMServer from 'react-dom/server';
import { ClearButton } from 'components/FavoritesCards/CardItem/ClearButton';
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
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import Images from 'apollo/Images.json';
//import { useLazyQuery } from '@apollo/client';
import { useApolloClient, useQuery } from '@apollo/client';
import { cartItemsVar } from 'apollo/cache';
import { GET_ROCKET_ITEMS } from 'apollo/apolloAPI';
import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const FavoritesCards = ({ favorites, setFavorites }) => {
  const client = useApolloClient();
  const notify = () => toast('Wow so easy !');

  const { data, loading, error } = useQuery(GET_ROCKET_ITEMS);

  // const rocketId = '5e9d0d95eda69955f709d1eb';

  // const { data, loading, error } = useQuery(GET_ROCKET, {
  //   variables: { rocketId: rocketId },
  // });

  const cartItems = useReactiveVar(cartItemsVar);

  useEffect(() => {
    //   // async function addToRocket(rocketId) {
    //   //   const { data } = await client.readQuery({
    //   //     query: GET_ROCKET,
    //   //     variables: {
    //   //       rocketId,
    //   //     },
    //   //   });
    //   //   console.log(data, 'data');
    //   // }
    //   // addToRocket(rocketId);
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
          <CardsTopic
            style={{
              'margin-top': '64px',
            }}
          >
            <CardsArrows>
              <ArrowButton className="swiper-button-prev">
                <IoIosArrowBack />
              </ArrowButton>
              <ArrowButton className="swiper-button-next">
                <IoIosArrowForward />
              </ArrowButton>
            </CardsArrows>
            <ClearButton />
          </CardsTopic>
          <Swiper
            style={{
              'padding-bottom': '60px',
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              720: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              1280: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
            }}
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
            {data?.cartItems.map(({ id, name, description }, index) => {
              // return (
              //   <FavoriteCard
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
                      //onClick={notify}
                      onClick={() => {
                        notify();
                        setFavorites(favorite => [...favorite, 1]);
                      }}
                    >
                      buy
                    </CardButton>

                    <TrashCanButton
                      id={id}
                      index={index}
                      name={name}
                      description={description}
                      data={data}
                    />
                  </ButtomList>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CardsContainer>
        <ToastContainer />
      </section>
    </>
  );
};
