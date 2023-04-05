import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { useState } from 'react';
import { lazy } from 'react';

import Layout from './Layout/Layout';
import { MyContext } from 'apollo/useContext';

import HomePage from 'pages/HomePage/HomePage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';
// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const blogLoader = async ({ request, params }) => {
  return console.log({ request, params });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <HomePage favorites={'favorites'} setFavorites={'setFavorites'} />
        }
      />
      <Route
        path="favorite"
        element={
          <FavoritePage favorites={'favorites'} setFavorites={'setFavorites'} />
        }
        loader={blogLoader}
      />
    </Route>
  )
);

export const App = () => {
  return (
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  );
};
