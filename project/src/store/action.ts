import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import {AuthorizationStatus} from '../types/auth-status';
import {User} from '../types/user';
import {ReviewType} from '../types/review';

export const changeGenre = createAction<string>('changeGenre');

export const fillFilmsList = createAction<Film[]>('fillFilmsList');
export const loadFilm = createAction<Film>('loadFilm');
export const loadPromoFilm = createAction<Film>('loadPromoFilm');
export const loadSimilarFilms = createAction<Film[]>('loadSimilarFilms');

export const loadComments = createAction<ReviewType[]>('loadComments');

export const setIsDataLoaded = createAction<boolean>('setIsDataLoaded');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setUser = createAction<User>('setUser');
export const setError = createAction<string | null>('setError');
