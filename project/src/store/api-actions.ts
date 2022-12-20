import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppState, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {
  fillFilmsList,
  loadComments,
  loadFilm, loadPromoFilm, loadSimilarFilms,
  requireAuthorization,
  setError,
  setIsDataLoaded,
  setUser
} from './action';
import {Film} from '../types/film';
import {ApiRoutesEnum} from '../types/routes';
import {AuthorizationStatus} from '../types/auth-status';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {User} from '../types/user';
import {TIMEOUT_SHOW_ERROR} from '../const';
import {ReviewType} from '../types/review';
import {UserComment} from '../types/user-comment';

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

export const fetchFilmById = createAsyncThunk<void, number, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>('fetchFilmById', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(`${ApiRoutesEnum.Films}/${filmId}`);
  dispatch(loadFilm(data));
});

export const fetchReviewsById = createAsyncThunk<void, number, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>('fetchCommentsById', async (filmId: number, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewType[]>(
    `${ApiRoutesEnum.Comments}/${filmId}`
  );
  dispatch(loadComments(data));
});

export const fetchSimilarById = createAsyncThunk<void, number, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>('fetchSimilarById', async (filmId: number, { dispatch, extra: api }) => {
  const { data } = await api.get<Film[]>(
    `${ApiRoutesEnum.Films}/${filmId}${ApiRoutesEnum.SimilarFilms}`
  );
  dispatch(loadSimilarFilms(data));
});

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>('fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(
    `${ApiRoutesEnum.PromoFilm}`
  );
  dispatch(loadPromoFilm(data));
});

export const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    await api.post<{comment: string; rating: number}[]>(`comments/${filmId}`, {comment, rating});
  },
);

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch; state: AppState; extra: AxiosInstance }>(
    'clearError', async (_arg, { dispatch }) => {
      setTimeout(() => {
        dispatch(setError(null));
      }, TIMEOUT_SHOW_ERROR);
    });

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
    try {
      const { data: user } = await api.post<User>(ApiRoutesEnum.Login, {email, password});
      saveToken(user.token);
      dispatch(setUser(user));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
