import {Link} from 'react-router-dom';

export type FilmCardProps = {
  id: number,
  imagePath: string;
  title: string;
}

function FilmCard(props: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.imagePath} alt={props.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.id}`} className='small-film-card__link'>{props.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
