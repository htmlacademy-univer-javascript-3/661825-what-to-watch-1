import Logo from '../../components/logo/logo';
import {Link, Navigate, useParams} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import {Film} from '../../types/film';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import UserBlock from '../../components/user-block/user-block';

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
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className={'logo__link'}/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add Review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>

    </section>
  );
}

export default AddReviewPage;
