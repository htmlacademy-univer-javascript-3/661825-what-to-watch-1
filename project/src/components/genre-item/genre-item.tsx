export type GenreProps = {
  name: string;
}

function GenreItem(props: GenreProps) {
  // catalog__genres-item--active
  return(
    <li className="catalog__genres-item">
      <a href="#todo" className="catalog__genres-link">{props.name}</a>
    </li>
  );
}

export default GenreItem;
