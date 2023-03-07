import { Logo } from 'components/Logo/Logo';
import { DivHeader, SingInButton, } from './Header.styled';

export const Header = () => {
  return (
    <>
      <DivHeader>
        <Logo />
        <Navigator />
        <FavoriteHeart/>
        <SingInButton
          type="button"
          onClick={() => {
            alert('Need logout fetch');
          }}
        ></SingInButton>

      </DivHeader>
    </>
  );
};
