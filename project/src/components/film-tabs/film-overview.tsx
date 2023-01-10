import {Film} from '../../types/film';

type FilmOverviewProps = {
  film: Film
}

export enum RatingLevel {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very good',
  AWESOME = 'Awesome'
}

function getRatingLevelByRatingCount(rating: number): string {
  if (rating < 3) {
    return RatingLevel.BAD;
  } else if (rating < 5) {
    return RatingLevel.NORMAL;
  } else if (rating < 8) {
    return RatingLevel.GOOD;
  } else if (rating < 10) {
    return RatingLevel.VERY_GOOD;
  } else if (rating === 10) {
    return RatingLevel.AWESOME;
  } else {
    return 'Weird rating. I don\'t know that.';
  }
}

function FilmOverview(props: FilmOverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevelByRatingCount(props.film.rating)}</span>
          <span className="film-rating__count">{props.film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {props.film.description}
        <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {props.film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
