import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import {Film} from '../../types/film';
import {RoutesEnum} from '../../types/routes';
import {Link} from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';

type MyListProps = {
  films: Film[];
}

function MyListPage({films}: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmsList films={films}/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListPage;
