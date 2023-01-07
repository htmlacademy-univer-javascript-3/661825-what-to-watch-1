import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import FilmsList from '../../components/films-list/films-list';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import GenresList from '../../components/genres-list/genres-list';
import {ALL_GENRES} from '../../types/genres';
import React, {useState} from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import UserBlock from '../../components/user-block/user-block';
import {getCurrentGenre, getFilms, getPromoFilm} from '../../store/main-reducer/main-selectors';
import MyListButton from '../../components/my-list-button/my-list-button';
import {AuthorizationStatus} from '../../types/auth-status';
import {getAuthorizationStatus} from '../../store/user-reducer/user-selectors';
import PlayerButton from '../../components/player-button/player-button';

const SHOW_MORE_STEP_COUNT = 8;

function MainPage() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const films = useAppSelector(getFilms);
  const currentGenre = useAppSelector(getCurrentGenre);
  const promoFilm = useAppSelector(getPromoFilm);
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
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo className={'logo__link'}/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm?.id}`} className="btn btn--play film-card__button">
                  <PlayerButton isPlay/>
                </Link>
                { authorizationStatus === AuthorizationStatus.Auth ? <MyListButton film={promoFilm}/> : null }
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
          {
            showedFilmsCount + SHOW_MORE_STEP_COUNT < films.length
              ? <ShowMoreButton onClick={handleShowMoreOnClick}/>
              : null
          }
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
