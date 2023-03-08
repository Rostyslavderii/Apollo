import { List } from './AccountList.styled';
import { FavoriteHeart } from './FavoriteHeart/FavoriteHeart';
import { SingInButton } from './AccountList.styled';

export const AccountList = () => {
  return (
    <>
      <List>
        <li>
          <FavoriteHeart />
        </li>
        <li>
          <SingInButton to="/">sing in</SingInButton>
        </li>
      </List>
    </>
  );
};
