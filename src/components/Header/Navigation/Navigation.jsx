import { NavList } from './NavList/NavList';
import { AccountList } from './AccountList/AccountList';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavList />
      </nav>
      <AccountList />
    </>
  );
};
