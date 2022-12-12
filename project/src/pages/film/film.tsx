import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import {Film} from '../../types/film';
import {Link, Navigate, useParams} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import FilmsList from '../../components/films-list/films-list';
import React from 'react';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { ReviewType } from '../../types/review';

type FilmProps = {
  reviews: ReviewType[];
  films: Film[];
}

function FilmPage({reviews, films}: FilmProps) {
  const id = Number(useParams().id);
  const film = films.find((curFilm) => curFilm.id === id);

  if (!film) {
    return <Navigate to={RoutesEnum.Default}/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
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
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button">
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
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <FilmTabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={films.filter((moreFilm) => moreFilm.genre === film.genre).splice(0, 4)}/>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
