import FilmCard, {FilmCardProps} from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import GenreItem, {GenreProps} from '../../components/genre-item/genre-item';
import {PromoFilmData} from '../../types/promo-film-data';

export type MainProps = {
  promoData: PromoFilmData;
  films: FilmCardProps[];
  genres: GenreProps[];
}

function MainPage(props: MainProps) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.promoData.bgImagePath} alt={props.promoData.title}/>
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
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.promoData.imagePath} alt={props.promoData.title} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promoData.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promoData.genre}</span>
                <span className="film-card__year">{props.promoData.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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

          <div className="catalog__films-list">
            {props.films.map((film) => <FilmCard key={film.filmName} imagePath={film.imagePath} filmName={film.filmName}/>)}
          </div>
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
