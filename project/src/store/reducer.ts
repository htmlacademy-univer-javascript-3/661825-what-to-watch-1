import {AppState} from '../types/store';
import {ALL_GENRES} from '../types/genres';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  fillFilmsList,
  loadComments,
  loadFilm,
  loadPromoFilm, loadSimilarFilms,
  requireAuthorization,
  setIsDataLoaded
} from './action';
import {AuthorizationStatus} from '../types/auth-status';

const initialState: AppState = {
  films: [],
  reviews: [],
  similarFilms: [],
  promoFilm: null,
  currentFilm: null,
  currentGenre: ALL_GENRES,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
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
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    });
});
