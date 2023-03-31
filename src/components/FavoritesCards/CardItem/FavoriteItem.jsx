import Images from 'apollo/Images.json';
import { SwiperSlide } from 'swiper/react';
import 'swiper/less/navigation';
import {
  CardsItemContainer,
  CardImg,
  CardTextContainer,
  CardName,
  CardText,
} from '../../CardsSection/CardsSlider/CardsSlider.styled';

import { useDispatch } from 'react-redux';
import { removeCard } from 'redux/reducer';

export const FavoriteCard = ({
  id,
  name,
  description,
  index,
  favorites,
  setFavorites,
}) => {
  const dispatch = useDispatch();
  //console.log(id, 'Item');
  const Icons = Images.map(image => image.icon);
  console.log(favorites, 'FavoriteItem');
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
        <button
          className="delete-contact-btn"
          type="button"
          onClick={() => setFavorites(favorite => [...favorite, 2])}
        >
          Delete
        </button>
      </CardTextContainer>
    </SwiperSlide>
  );
};
