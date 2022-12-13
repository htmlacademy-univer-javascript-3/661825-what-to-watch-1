import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import {Film} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';

type MyListProps = {
  films: Film[];
}

function MyListPage({films}: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
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
