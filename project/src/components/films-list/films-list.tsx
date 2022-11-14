import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import { useState } from 'react';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  const handleMouseOver = (film: Film) => {
    if (film !== activeFilm) {
      setActiveFilm(film);
    }
  };

  return (
    <div className='catalog__films-list'>
      {films.map((film) => <FilmCard key={film.id} film={film} onMouseOver={handleMouseOver}/>)}
    </div>
  );
}

export default FilmsList;
