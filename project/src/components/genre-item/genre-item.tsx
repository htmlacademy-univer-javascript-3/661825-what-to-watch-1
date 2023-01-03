import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';
import React from 'react';

export type GenreProps = {
  genre: string;
  isActive: boolean;
}

function GenreItem(props: GenreProps) {
  const { genre, isActive } = props;
  const dispatch = useAppDispatch();

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(changeGenre(genre));
  };

  return(
    <li className={`catalog__genres-item ${isActive ? ' catalog__genres-item--active' : ''}`}>
      <a href="#todo" className="catalog__genres-link" onClick={handleOnClick}>{genre}</a>
    </li>
  );
}

export default GenreItem;
