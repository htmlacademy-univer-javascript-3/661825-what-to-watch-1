import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms} from '../../store/main-reducer/main-selectors';
import React from 'react';
import {fetchPromoFilm, getFavoriteFilmsAction, setFavoriteFilmAction} from '../../store/api-actions';
import {Film} from '../../types/film';

type MyListButtonProps = {
  film: Film|null;
}

function MyListButton(props: MyListButtonProps) {
  const {film} = props;
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  const favoriteAddHandler = () => {
    const status = Number(!film?.isFavorite);
    const filmId = Number(film?.id);
    dispatch(setFavoriteFilmAction({ id: filmId, status: status }));
    dispatch(getFavoriteFilmsAction());
    dispatch(fetchPromoFilm());
  };

  return (
    <button className="btn btn--list film-card__button" onClick={favoriteAddHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film?.isFavorite ? '#in-list' : '#add'}/>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;

