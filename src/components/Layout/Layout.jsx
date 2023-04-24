import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { useContext, useEffect } from 'react';
import { cardContext } from 'apollo/useContext';

export function Spinner() {
  return <h2>🌀 Loading...</h2>;
}

const Layout = () => {
  const { card } = useContext(cardContext);
  useEffect(() => {
    console.log(card, 'layout');
  }, [card]);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
