import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import React, {useEffect} from 'react';
import FilmTabs from '../../components/film-tabs/film-tabs';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilmById, fetchReviewsById, fetchSimilarById} from '../../store/api-actions';
import NotFound from '../not-found/not-found';
import {setIsDataLoaded} from '../../store/action';
import {AuthorizationStatus} from '../../types/auth-status';
import {getFilm, getReviews, getSimilarFilm} from '../../store/film-reducer/film-selectors';
import {getAuthorizationStatus} from '../../store/user-reducer/user-selectors';
import MyListButton from '../../components/my-list-button/my-list-button';

function Film() {
  const id = Number(useParams().id);
  const reviews = useAppSelector(getReviews);
  const currentFilm = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currentFilm || currentFilm.id !== id) {
      dispatch(setIsDataLoaded(false));
      dispatch(fetchFilmById(id));
      dispatch(fetchSimilarById(id));
      dispatch(fetchReviewsById(id));
      dispatch(setIsDataLoaded(true));
    }
  }, [currentFilm, dispatch, id]);

  if (!currentFilm || currentFilm.id !== id) {
    return <NotFound/>;
  } else {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <Logo className={'logo__link'}/>
              <UserBlock/>
            </header>
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{currentFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{currentFilm.genre}</span>
                  <span className="film-card__year">{currentFilm.released}</span>
                </p>
                <div className="film-card__buttons">
                  <Link to={`/player/${currentFilm.id}`} className="btn btn--play film-card__button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </Link>
                  { authorizationStatus === AuthorizationStatus.Auth ? <MyListButton film={currentFilm}/> : null }
                  {
                    authorizationStatus === AuthorizationStatus.Auth
                      ? <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">Add review</Link>
                      : null
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327"/>
              </div>
              <FilmTabs film={currentFilm} reviews={reviews}/>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={similarFilms.slice(0, 4)}/>
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Film;
