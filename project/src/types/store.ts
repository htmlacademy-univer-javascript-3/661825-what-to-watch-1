import {Film} from './film';
import {store} from '../store';
import {AuthorizationStatus} from './auth-status';

export type AppState = {
  films: Film[],
  currentGenre: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
