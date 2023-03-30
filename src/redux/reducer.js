import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    counterReducer(state, action) {
      //let newState = { ...state }
       //console.log(state)
      console.log(action)
    //  state.favorites.push(action.payload)

      state.favorites.push(
        {
          id: action.payload.id,
          description: action.payload.description,
          name: action.payload.name,
        }
      )
    },
    removeCard(state, action) {
      state.favorites.filter(obj => obj.id !== action.payload.id)
    },
  }
});

export const { counterReducer, removeCard } = cardSlice.actions;




//export default cardSlice.reducer;




      // state.favorites.push(
      //   {
      //     id: action.payload.id,
      //     description: action.payload.description,
      //     name: action.payload.name,
      //   }
      // )


// const initialState = {
//   favorites: [],
// };

// export const favoritesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_FAVORITES':
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload],
//       };
//     default:
//       return state;
//   }
// };


// export const tasksReducer = (state = tasksInitialState, action) => {
//   // Reducer code
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   // Reducer code
// };
