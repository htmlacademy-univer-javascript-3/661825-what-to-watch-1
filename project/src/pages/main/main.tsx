import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import {Film} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import {RoutesEnum} from '../../types/routes';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import GenresList from '../../components/genres-list/genres-list';
import {ALL_GENRES} from '../../types/genres';
import {useState} from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';

const SHOW_MORE_STEP_COUNT = 8;

export type MainProps = {
  promoFilm: Film;
}

function MainPage(props: MainProps) {
  const { films, currentGenre } = useAppSelector((state) => state);
  const [showedFilmsCount, setShowedFilmsCount] = useState(SHOW_MORE_STEP_COUNT);
  const filmsFiltered = films
    .filter((film) => film.genre === currentGenre || currentGenre === ALL_GENRES)
    .slice(0, showedFilmsCount);
  const genres = [ALL_GENRES].concat([...new Set(films.map((film) => film.genre))]);

  const handleShowMoreOnClick = () => {
    setShowedFilmsCount(showedFilmsCount + SHOW_MORE_STEP_COUNT);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.promoFilm.bgImagePath} alt={props.promoFilm.title}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo className={'logo__link'}/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={RoutesEnum.Login} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.promoFilm.imagePath} alt={props.promoFilm.title} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promoFilm.genre}</span>
                <span className="film-card__year">{props.promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${props.promoFilm.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={RoutesEnum.MyList} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                <Link to={`/films/${props.promoFilm.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genres={genres} activeGenre={currentGenre}/>
          <FilmsList films={filmsFiltered}/>
          <ShowMoreButton onClick={handleShowMoreOnClick}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
