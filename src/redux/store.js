import { configureStore } from '@reduxjs/toolkit';

import { favoritesReducer } from './reducer';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

//const store = configureStore({ reducer: rootReducer });
