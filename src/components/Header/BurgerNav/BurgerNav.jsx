import { useMedia } from 'react-use';
import { BurgerNavCloseBtn } from './BurgerNavCloseBtn';
import { Logo } from 'components/Logo/Logo';
import { NavList } from '../Navigation/NavList/NavList';
import {
  BurgerNavMenu,
  Container,
  LogoMenu,
  UserAuthMenu,
} from './BurgerNav.styled';
import { useEffect } from 'react';

export const BurgerNav = ({ close }) => {
  const isDesktop = useMedia('(min-width: 1280px)');
  const isTablet = useMedia('(min-width: 760px)');
  const isMobile = useMedia('(min-width: 480px)');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <BurgerNavMenu onClick={close}>
      <Container>
        <LogoMenu>
          <BurgerNavCloseBtn onClick={close} />
        </LogoMenu>
        <UserAuthMenu>
          <NavList />
        </UserAuthMenu>
      </Container>
    </BurgerNavMenu>
  );
};
