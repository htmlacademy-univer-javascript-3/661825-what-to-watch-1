import {Film} from './film';
import {store} from '../store';
import {AuthorizationStatus} from './auth-status';
import {ReviewType} from './review';

export type AppState = {
  films: Film[],
  reviews: ReviewType[],
  currentFilm: Film | null,
  promoFilm: Film | null,
  similarFilms: Film[],
  currentGenre: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string | null
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
