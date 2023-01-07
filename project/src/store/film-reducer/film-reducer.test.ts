import {filmReducer} from './film-reducer';
import {Film} from '../../types/film';
import {
  fetchFilmById,
  fetchReviewsById,
  fetchSimilarById
} from '../api-actions';
import {FilmState} from '../../types/store';
import {ReviewType} from '../../types/review';

describe('Film Reducer Tests', () => {
  it('should not change state when unknown action', () => {
    const expectedState: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };

    expect(filmReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(expectedState);
  });

  it('should get film info', () => {
    const film = {id: 2, name: 'Avatar', isFavorite: true} as Film;
    const state: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };
    const expectedState: FilmState = {
      film: film,
      reviews: [],
      similarFilms: []
    };

    expect(filmReducer.reducer(state, {type: fetchFilmById.fulfilled, payload: film}))
      .toEqual(expectedState);
  });

  it('should not get film info when rejected', () => {
    const film = {id: 2, name: 'Avatar', isFavorite: true} as Film;
    const state: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };

    expect(filmReducer.reducer(state, {type: fetchFilmById.rejected, payload: film}))
      .toEqual(state);
  });

  it('should get comments', () => {
    const comment = {id: 1, comment: 'top film', rating: 5} as ReviewType;
    const state: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };
    const expectedState: FilmState = {
      film: null,
      reviews: [comment],
      similarFilms: []
    };

    expect(filmReducer.reducer(state, {type: fetchReviewsById.fulfilled, payload: [comment]}))
      .toEqual(expectedState);
  });

  it('should not update comments when rejected', () => {
    const comment = {id: 1, comment: 'top film', rating: 5} as ReviewType;
    const state: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };

    expect(filmReducer.reducer(state, {type: fetchReviewsById.rejected, payload: [comment]}))
      .toEqual(state);
  });

  it('should update similar films', () => {
    const film = {id: 2, name: 'Avatar', isFavorite: true} as Film;
    const state: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };
    const expectedState: FilmState = {
      film: null,
      reviews: [],
      similarFilms: [film]
    };

    expect(filmReducer.reducer(state, {type: fetchSimilarById.fulfilled, payload: [film]}))
      .toEqual(expectedState);
  });

  it('should not update similar films when rejected', () => {
    const film = {id: 2, name: 'Avatar', isFavorite: true} as Film;
    const state: FilmState = {
      film: null,
      reviews: [],
      similarFilms: []
    };

    expect(filmReducer.reducer(state, {type: fetchSimilarById.rejected, payload: [film]}))
      .toEqual(state);
  });
});
