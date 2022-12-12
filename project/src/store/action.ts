import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import {AuthorizationStatus} from '../types/auth-status';
import {User} from '../types/user';

export const changeGenre = createAction<string>('changeGenre');
export const fillFilmsList = createAction<Film[]>('fillFilmsList');
export const setIsDataLoaded = createAction<boolean>('setIsDataLoaded');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setUser = createAction<User>('setUser');
