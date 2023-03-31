import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FavoriteLink } from './FavoriteHeart.styled';
import { counterReducer } from 'redux/reducer';
export const FavoriteHeart = ({ id, description, name }) => {
  const dispatch = useDispatch();

  const addFavorite = () => dispatch(counterReducer({ id, description, name }));
  //console.log(dispatch(counterReducer({ id, description, name })));

  return (
    <>
      <FavoriteLink
        onClick={() => addFavorite}
        // to="/favorite"
      >
        <BiHeart alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
