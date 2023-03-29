import Images from '../../apollo/Images.json';
import { SwiperSlide } from 'swiper/react';
import 'swiper/less/navigation';
import {
  CardsItemContainer,
  CardImg,
  CardTextContainer,
  CardName,
  CardText,
} from '../../CardsSection/CardsSlider/CardsSlider.styled';
export const FavoriteCard = ({ id, onDelete, name, description }) => {
  console.log(id);
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteTask(task.id));
  // const handleToggle = () => dispatch(toggleCompleted(task.id));

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
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </CardTextContainer>
    </SwiperSlide>
  );
};
