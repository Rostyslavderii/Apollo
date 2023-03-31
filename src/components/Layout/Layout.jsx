import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

function Spinner() {
  return <h2>🌀 Loading...</h2>;
}

const Layout = ({ favorites, setFavorites }) => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Outlet favorites={favorites} setFavorites={setFavorites} />
      </Suspense>
    </>
  );
};

export default Layout;
