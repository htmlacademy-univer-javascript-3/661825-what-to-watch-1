import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {GenreProps} from './components/genre-item/genre-item';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';

const genres: GenreProps[] = [
  {name: 'All genre'},
  {name: 'Comedies'},
  {name: 'Crime'},
  {name: 'Documentary'},
  {name: 'Dramas'},
  {name: 'Horror'},
  {name: 'Kids & Family'},
  {name: 'Romance'},
  {name: 'Sci-Fi'},
  {name: 'Thrillers'}
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App films={films} genres={genres} reviews={reviews}/>
  </React.StrictMode>,
);

