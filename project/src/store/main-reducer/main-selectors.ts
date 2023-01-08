import {Film} from '../../types/film';
import {State} from '../../types/store';
import {NameSpace} from '../../const';

export const getFilms = (state: State): Film[] => state[NameSpace.Main].films;
export const getPromoFilm = (state: State): Film|null => state[NameSpace.Main].promoFilm;
export const getCurrentGenre = (state: State): string => state[NameSpace.Main].currentGenre;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Main].isDataLoaded;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Main].favoriteFilms;
export const getError = (state: State): string|null => state[NameSpace.Main].error;
