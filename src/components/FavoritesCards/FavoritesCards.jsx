import { FavoriteCard } from '../CardItem/FavoriteCard';
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

//reduxApp
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const FavoritesCards = () => {
  //cards
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter); // map

  //buttons delete
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteTask(task.id));
  // const handleToggle = () => dispatch(toggleCompleted(task.id));

  SwiperCore.use([Navigation]);
  let favorites = [0];
  console.log(favorites, 'FavoritePage');
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
            favorites.map(({ id, name, description }) => {
              return (
                <FavoriteCard
                  key={id}
                  name={name}
                  description={description}
                  id={id}
                  onDelete={onDelete}
                />
              );
            })}
        </Swiper>
      </section>
    </>
  );
};
