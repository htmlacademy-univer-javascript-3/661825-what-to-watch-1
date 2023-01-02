import {Film} from './film';
import {store} from '../store';
import {AuthorizationStatus} from './auth-status';
import {ReviewType} from './review';
import {User} from './user';

export type FilmState = {
  film: Film | null,
  reviews: ReviewType[],
  similarFilms: Film[]
}

export type MainState = {
  films: Film[],
  promoFilm: Film|null,
  currentGenre: string,
  isDataLoaded: boolean,
  favoriteFilms: Film[],
  error: string | null
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  user: User | null
}


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
