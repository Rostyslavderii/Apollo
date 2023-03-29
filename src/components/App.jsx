import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
