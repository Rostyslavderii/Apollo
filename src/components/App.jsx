import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import { lazy } from 'react';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const App = () => {
  const [favorites, setFavorites] = useState([0]);
  console.log(favorites, 'app');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePage favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="favorite"
          element={
            <FavoritePage favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Route>
    </Routes>
  );
};
