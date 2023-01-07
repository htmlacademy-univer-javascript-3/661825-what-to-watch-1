import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {setError} from './action';
import {Film} from '../types/film';
import {ApiRoutesEnum} from '../types/routes';
import {AuthData} from '../types/auth-data';
import {User} from '../types/user';
import {TIMEOUT_SHOW_ERROR} from '../const';
import {ReviewType} from '../types/review';
import {UserComment} from '../types/user-comment';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Film[]>(ApiRoutesEnum.Films);
    return data;
  },
);

export const getFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getFavoriteFilms',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Film[]>(ApiRoutesEnum.Favorite);
    return data;
  },
);

export const setFavoriteFilmAction = createAsyncThunk<
  Film,
  { id: number; status: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'films/setFavorite',
    async ({ id, status }, { extra: api }) => {
      const { data } = await api.post<Film>(`${ApiRoutesEnum.Favorite}/${id}/${status}`);
      return data;
    }
  );


export const fetchFilmById = createAsyncThunk<Film, number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>('fetchFilmById', async (filmId, { extra: api }) => {
  const { data } = await api.get<Film>(`${ApiRoutesEnum.Films}/${filmId}`);
  return data;
});

export const fetchReviewsById = createAsyncThunk<ReviewType[], number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>('fetchCommentsById', async (filmId: number, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(
    `${ApiRoutesEnum.Comments}/${filmId}`
  );
  return data;
});

export const fetchSimilarById = createAsyncThunk<Film[], number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>('fetchSimilarById', async (filmId: number, { extra: api }) => {
  const { data } = await api.get<Film[]>(
    `${ApiRoutesEnum.Films}/${filmId}${ApiRoutesEnum.SimilarFilms}`
  );
  return data;
});

export const fetchPromoFilm = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchPromoFilm', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film>(
    `${ApiRoutesEnum.PromoFilm}`
  );
  return data;
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
  dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
    'clearError', async (_arg, { dispatch }) => {
      setTimeout(() => {
        dispatch(setError(null));
      }, TIMEOUT_SHOW_ERROR);
    });

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const { data: user } = await api.get<User>(ApiRoutesEnum.Login);
    return user;
  }
);

export const loginAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, { extra: api}) => {
    const { data: user } = await api.post<User>(ApiRoutesEnum.Login, {email, password});
    return user;
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
  }
);
