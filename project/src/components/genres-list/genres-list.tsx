import GenreItem from '../genre-item/genre-item';

export type GenresListProps = {
  genres: string[];
  activeGenre: string;
}

function GenresList(props: GenresListProps) {
  const { genres, activeGenre } = props;
  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => <GenreItem key={genre} genre={genre} isActive={genre === activeGenre}/>)}
    </ul>
  );
}

export default GenresList;
