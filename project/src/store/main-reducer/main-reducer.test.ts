import {mainReducer} from './main-reducer';
import {fetchFilmsAction, fetchPromoFilm, getFavoriteFilmsAction} from '../api-actions';
import {Film} from '../../types/film';
import {MainState} from '../../types/store';
import {ALL_GENRES, Genres} from '../../types/genres';
import {createMockFilms} from '../../components/app/app.test';
import {changeGenre} from '../action';

describe('Main Reducer Tests', () => {
  it('should not change state when unknown action', () => {
    const expectedState: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(expectedState);
  });

  it('should get promoFilm', () => {
    const film = createMockFilms(1)[0];
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: film,
      films: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: fetchPromoFilm.fulfilled, payload: film}))
      .toEqual(expectedState);
  });

  it('should not get promoFilm when rejected', () => {
    const film = createMockFilms(1)[0];
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: fetchPromoFilm.rejected, payload: film}))
      .toEqual(state);
  });

  it('should get favorite films', () => {
    const films = createMockFilms(3);
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: films,
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: getFavoriteFilmsAction.fulfilled, payload: films}))
      .toEqual(expectedState);
  });

  it('should change genre when changeGenreAction', () => {
    const genre = Genres[0];
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: genre,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: changeGenre, payload: genre}))
      .toEqual(expectedState);
  });

  it('should not change state when pending status', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };
    expect(mainReducer.reducer(state, {type: fetchFilmsAction.pending}))
      .toEqual(expectedState);
  });

  it('should get films and change status', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const film = {id: 2, name: 'Aviator', isFavorite: true} as Film;
    const film2 = {id: 3, name: 'Avatar', isFavorite: true} as Film;
    const expectedState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [film, film2],
      isDataLoaded: true
    };
    expect(mainReducer.reducer(state, {type: fetchFilmsAction.fulfilled, payload: [film, film2]}))
      .toEqual(expectedState);
  });

  it('should update favorite films', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const film = {id: 2, name: 'Avatar', isFavorite: true} as Film;
    const film2 = {id: 3, name: 'Avatar 2', isFavorite: true} as Film;
    const expectedState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [film, film2],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };
    expect(mainReducer.reducer(state, {type: getFavoriteFilmsAction.fulfilled, payload: [film, film2]}))
      .toEqual(expectedState);
  });

  it('should not update favorite films when rejected', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      films: [],
      isDataLoaded: false
    };

    const film = {id: 2, name: 'Avatar', isFavorite: true} as Film;
    const film2 = {id: 3, name: 'Avatar 2', isFavorite: true} as Film;
    expect(mainReducer.reducer(state, {type: getFavoriteFilmsAction.rejected, payload: [film, film2]}))
      .toEqual(state);
  });
});
