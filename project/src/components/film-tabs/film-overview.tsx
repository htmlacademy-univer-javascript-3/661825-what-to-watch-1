import {Film} from '../../types/film';

type FilmOverviewProps = {
  film: Film
}

function FilmOverview(props: FilmOverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.film.ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.film.ratingLevel}</span>
          <span className="film-rating__count">{props.film.ratingCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        {props.film.description}
        <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {props.film.starring.join(',')}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
