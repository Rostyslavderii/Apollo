import Heart from './Heart.svg';
import { FavoriteLink, FavoriteHeartSvg } from './FavoriteHeart.styled';

export const FavoriteHeart = () => {
  return (
    <>
      <FavoriteLink to="/favorite">
        <FavoriteHeartSvg src={Heart} alt="FavoriteHeart" />
      </FavoriteLink>
    </>
  );
};
