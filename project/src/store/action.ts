import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('changeGenre');
export const setIsDataLoaded = createAction<boolean>('setIsDataLoaded');
export const setError = createAction<string | null>('setError');
export const setFavoriteCount = createAction<number>('setFavoriteCount');
