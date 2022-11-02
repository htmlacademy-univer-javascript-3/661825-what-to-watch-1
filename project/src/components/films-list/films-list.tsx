import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className='catalog__films-list'>
      {films.map((film) => <FilmCard key={film.id} id={film.id} title={film.title} imagePath={film.imagePath}/>)}
    </div>
  );
}

export default FilmsList;
