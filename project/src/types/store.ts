import {Film} from './film';
import {store} from '../store';

export type AppState = {
  films: Film[],
  currentGenre: string
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
