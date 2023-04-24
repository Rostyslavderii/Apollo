import { useState } from 'react';
import { useMedia } from 'react-use';
import { NavList } from './NavList/NavList';
import { AccountList } from './AccountList/AccountList';
import { BurgerNavOpenBtn } from '../BurgerNav/BurgerNavOpenBtn';
import { BurgerNav } from '../BurgerNav/BurgerNav';

export const Navigation = () => {
  const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);

  const isDesktop = useMedia('(min-width: 1280px)');
  const isTablet = useMedia('(min-width: 760px)');
  const isMobile = useMedia('(min-width: 520px)');
  const isPad = useMedia('(min-width: 875px)');

  const open = () => {
    setIsBurgerNavOpen(true);
  };

  const close = e => {
    if (e.target.nodeName === 'A' || e.currentTarget.nodeName === 'BUTTON') {
      setIsBurgerNavOpen(false);
    }
  };

  return (
    <>
      {(isDesktop || isTablet || isMobile) && (
        <nav>
          <NavList />
        </nav>
      )}
      {(isDesktop || isPad) && <AccountList />}

      {!isDesktop && !isPad && <BurgerNavOpenBtn onClick={open} />}

      {isBurgerNavOpen && !isDesktop && <BurgerNav close={close} />}
    </>
  );
};
