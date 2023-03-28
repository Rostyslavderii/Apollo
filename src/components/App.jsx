import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { lazy } from 'react';
import { createContext } from 'react';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const App = () => {
  const [favorites, setFavotires] = useState([]);
  //const favorites1 = ['hello world', 'dasdasd', 'World hello'];

  const counterReducer = product => {
    setFavotires(prevState => [...prevState, product]);
  };

  console.log(favorites, 'App');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage counterReducer={counterReducer} />} />

        <Route
          path="favorite"
          element={<FavoritePage favorites={favorites} />}
        />
      </Route>
    </Routes>
  );
};
