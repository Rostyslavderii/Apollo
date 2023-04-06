import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

export function Spinner() {
  return <h2>🌀 Loading...</h2>;
}

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
