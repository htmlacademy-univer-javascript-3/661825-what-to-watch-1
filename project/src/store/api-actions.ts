import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {fillFilmsList, setIsDataLoaded} from './action';
import {Film} from '../types/film';
import {RoutesEnum} from '../types/routes';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsDataLoaded(false));
    const { data } = await api.get<Film[]>(RoutesEnum.Films);
    dispatch(fillFilmsList(data));
    dispatch(setIsDataLoaded(true));
  },
);
