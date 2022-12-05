import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const changeGenre = createAction<string>('changeGenre');
export const fillFilmsList = createAction<Film[]>('fillFilmsList');
export const setIsDataLoaded = createAction<boolean>('setIsDataLoaded');
