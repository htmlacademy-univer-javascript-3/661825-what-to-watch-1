import {AppState} from '../types/store';
import {ALL_GENRES} from '../types/genres';
import {films as mockFilms} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, fillFilmsList} from './action';

const initialState: AppState = {
  films: mockFilms,
  currentGenre: ALL_GENRES
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.currentGenre = genre;
    })
    .addCase(fillFilmsList, (state, action) => {
      const { films } = action.payload;
      state.films = films;
    });
});
