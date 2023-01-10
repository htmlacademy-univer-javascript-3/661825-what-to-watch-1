import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms} from '../../store/main-reducer/main-selectors';
import {getAuthorizationStatus} from '../../store/user-reducer/user-selectors';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../types/auth-status';
import {getFavoriteFilmsAction} from '../../store/api-actions';


function MyList() {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(getFavoriteFilmsAction());
    }
  }, [authorizationStatus, dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
