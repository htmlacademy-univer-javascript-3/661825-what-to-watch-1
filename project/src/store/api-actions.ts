import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {fillFilmsList, requireAuthorization, setIsDataLoaded, setUser} from './action';
import {Film} from '../types/film';
import {ApiRoutesEnum} from '../types/routes';
import {AuthorizationStatus} from '../types/auth-status';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {User} from '../types/user';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsDataLoaded(false));
    const { data } = await api.get<Film[]>(ApiRoutesEnum.Films);
    dispatch(fillFilmsList(data));
    dispatch(setIsDataLoaded(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data: user } = await api.get<User>(ApiRoutesEnum.Login);
      dispatch(setUser(user));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data: user } = await api.post<User>(ApiRoutesEnum.Login, {email, password});
    saveToken(user.token);
    dispatch(setUser(user));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoutesEnum.Logout);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dropToken();
  }
);
