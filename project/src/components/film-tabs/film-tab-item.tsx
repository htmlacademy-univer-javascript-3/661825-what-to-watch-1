import { Tabs } from './film-tabs';

export type FilmTabItemProps = {
  name: Tabs,
  isActive: boolean,
  onClick: (name: Tabs) => void
}

function FilmTabItem(props: FilmTabItemProps) {
  const {name, isActive,onClick} = props;

  return (
    <li className={`film-nav__item ${isActive ? 'film-nav__item--active' : ''}`}>
      <a
        href="#todo"
        className="film-nav__link"
        onClick={(evt) => {
          evt.preventDefault();
          onClick(name);
        }}
      >{name}
      </a>
    </li>
  );
}

export default FilmTabItem;
