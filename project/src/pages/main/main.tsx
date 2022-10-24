import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import GenreItem, {GenreProps} from '../../components/genre-item/genre-item';
import {Film} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import {RoutesEnum} from '../../types/routes';
import {Link} from 'react-router-dom';

export type MainProps = {
  promoFilm: Film;
  films: Film[];
  genres: GenreProps[];
}

function MainPage(props: MainProps) {
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

          <ul className="catalog__genres-list">
            {props.genres.map((genre) => <GenreItem key={genre.name} name={genre.name}/>)}
          </ul>

          <FilmsList films={props.films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
