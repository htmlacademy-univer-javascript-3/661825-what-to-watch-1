import Logo from '../../components/logo/logo';
import {Link, Navigate, useParams} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import {Film} from '../../types/film';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewProps = {
  films: Film[];
}

function AddReviewPage({films}: AddReviewProps) {
  const id = Number(useParams().id);
  const film = films.find((curFilm) => curFilm.id === id);

  if (!film) {
    return <Navigate to={RoutesEnum.Default}/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.bgImagePath} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className={'logo__link'}/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add Review</Link>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.imagePath} alt={film.title} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>

    </section>
  );
}

export default AddReviewPage;
