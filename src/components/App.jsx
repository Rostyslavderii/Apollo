import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';
import Layout, { Spinner } from './Layout/Layout';
import { MyContext } from 'apollo/useContext';
import { json } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const blogLoader = async ({ request, params }) => {
  const data = { some: params };
  console.log(params, 'loader');
  return json(data, { status: 200 });
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
        path="/favorite"
        loader={blogLoader}
        element={
          <FavoritePage favorites={'favorites'} setFavorites={'setFavorites'} />
        }
      />
    </Route>
  ),
  {
    basename: '/Apollo/',
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

export const App = () => {
  return (
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  );
};
