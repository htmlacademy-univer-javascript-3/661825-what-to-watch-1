import {FilmState} from '../../types/store';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchFilmById, fetchPromoFilm, fetchReviewsById, fetchSimilarById, setFavoriteFilmAction} from '../api-actions';


const initialState: FilmState = {
  film: null,
  similarFilms: [],
  reviews: []
};

export const filmReducer = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchSimilarById.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchReviewsById.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(setFavoriteFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});
