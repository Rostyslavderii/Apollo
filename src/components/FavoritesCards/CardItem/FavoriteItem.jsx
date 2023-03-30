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

export const FavoriteCard = ({ id, name, description, index }) => {
  const dispatch = useDispatch();
  //console.log(id, 'Item');
  const Icons = Images.map(image => image.icon);
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
          onClick={() => dispatch(removeCard(id))}
        >
          Delete
        </button>
      </CardTextContainer>
    </SwiperSlide>
  );
};
