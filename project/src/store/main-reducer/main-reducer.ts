import {MainState} from '../../types/store';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ALL_GENRES} from '../../types/genres';
import {fetchFilmsAction, fetchPromoFilm, getFavoriteFilmsAction} from '../api-actions';
import {changeGenre} from '../action';

const initialState: MainState = {
  films: [],
  currentGenre: ALL_GENRES,
  promoFilm: null,
  error: null,
  isDataLoaded: false,
  favoriteFilms: []
};

export const mainReducer = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(changeGenre, (state, action) => {
        state.currentGenre = action.payload;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(getFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
