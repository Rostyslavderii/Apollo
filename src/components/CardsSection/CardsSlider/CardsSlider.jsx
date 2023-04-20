import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HeartButtonLink } from 'components/HeartButton/HeartButtonLink';
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
import { NetworkStatus } from '@apollo/client';
import Images from '../../../apollo/Images.json';
import * as ReactDOMServer from 'react-dom/server';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import { ToastContainer, toast } from 'react-toastify';

export const CardsSlider = ({ favorites, setFavorites }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_ALL_ROCKETS,
    {
      fetchPolicy: 'network-only',
      // nextFetchPolicy: 'cache-first',
      notifyOnNetworkStatusChange: true,
    }
  );
  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const Icons = Images.map(image => image.icon);

  SwiperCore.use([Pagination, Navigation]);

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
                <CardButton
                  type="button"
                  onClick={() => {
                    setFavorites(favorite => [...favorite, 1]);
                  }}
                >
                  buy
                </CardButton>
                <HeartButtonLink
                  id={id}
                  index={index}
                  name={name}
                  description={description}
                />
              </ButtomList>
            </SwiperSlide>
          ))}
        </Swiper>
        <ToastContainer />
      </CardsContainer>
    </>
  );
};
