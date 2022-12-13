import {AppState} from '../types/store';
import {ALL_GENRES} from '../types/genres';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, fillFilmsList, requireAuthorization, setIsDataLoaded} from './action';
import {AuthorizationStatus} from '../types/auth-status';

const initialState: AppState = {
  films: [],
  currentGenre: ALL_GENRES,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
