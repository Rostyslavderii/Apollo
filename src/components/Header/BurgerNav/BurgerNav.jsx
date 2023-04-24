import { useMedia } from 'react-use';

import { BurgerNavMenu, LogoMenu } from './BurgerNav.styled';
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
      {/* <Container>
        <LogoMenu>
          <Logo />
          <BurgerNavCloseBtn onClick={close} />
        </LogoMenu>
        <UserAuthMenu>
          {isMobile && isAuth && <UserNav />}
        </UserAuthMenu>
        <Nav />
      </Container> */}
    </BurgerNavMenu>
  );
};
