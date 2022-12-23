import {NameSpace} from '../../const';
import {State} from '../../types/store';
import {Film} from '../../types/film';
import {ReviewType} from '../../types/review';

export const getFilm = (state: State): Film | null => state[NameSpace.Film].film;
export const getSimilarFilm = (state: State): Film[] => state[NameSpace.Film].similarFilms;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.Film].reviews;
