import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router';
import { ProviderContext } from '../MyContext/MyContext';

const Layout = () => {
  return (
    <>
      <ProviderContext>
        <Header />
        <Outlet />
      </ProviderContext>
    </>
  );
};

export default Layout;
