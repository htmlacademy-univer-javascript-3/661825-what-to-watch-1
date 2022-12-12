import {AppState} from '../types/store';
import {ALL_GENRES} from '../types/genres';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, fillFilmsList, setIsDataLoaded} from './action';

const initialState: AppState = {
  films: [],
  currentGenre: ALL_GENRES,
  isDataLoaded: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(fillFilmsList, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
