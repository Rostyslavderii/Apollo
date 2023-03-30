import { configureStore } from '@reduxjs/toolkit';
import {cardSlice} from './reducer'


export const store = configureStore({
  reducer: {
    favoriteCard: cardSlice.reducer,
  },
})

