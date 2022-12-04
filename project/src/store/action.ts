import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const fillFilmsList = createAction<{films: Film[]}>('fillFilmsList');
