import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {FilmCardProps} from './components/film-card/film-card';
import {GenreProps} from './components/genre-item/genre-item';
import {PromoFilmData} from './types/promo-film-data';

const films: FilmCardProps[] = [
  {
    imagePath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    imagePath: 'img/bohemian-rhapsody.jpg',
    filmName: 'Bohemian Rhapsody'
  },
  {
    imagePath: 'img/macbeth.jpg',
    filmName: 'Macbeth'
  },
  {
    imagePath: 'img/aviator.jpg',
    filmName: 'Aviator'
  },
  {
    imagePath: 'img/we-need-to-talk-about-kevin.jpg',
    filmName: 'We need to talk about Kevin'
  },
  {
    imagePath: 'img/what-we-do-in-the-shadows.jpg',
    filmName: 'What We Do in the Shadows'
  },
  {
    imagePath: 'img/revenant.jpg',
    filmName: 'Revenant'
  },
  {
    imagePath: 'img/johnny-english.jpg',
    filmName: 'Johnny English'
  },
  {
    imagePath: 'img/shutter-island.jpg',
    filmName: 'Shutter Island'
  },
  {
    imagePath: 'img/pulp-fiction.jpg',
    filmName: 'Pulp Fiction'
  },
  {
    imagePath: 'img/no-country-for-old-men.jpg',
    filmName: 'No Country for Old Men'
  },
  {
    imagePath: 'img/snatch.jpg',
    filmName: 'Snatch'
  },
  {
    imagePath: 'img/moonrise-kingdom.jpg',
    filmName: 'Moonrise Kingdom'
  },
  {
    imagePath: 'img/seven-years-in-tibet.jpg',
    filmName: 'Seven Years in Tibet'
  },
  {
    imagePath: 'img/midnight-special.jpg',
    filmName: 'Midnight Special'
  },
  {
    imagePath: 'img/war-of-the-worlds.jpg',
    filmName: 'War of the Worlds'
  },
  {
    imagePath: 'img/dardjeeling-limited.jpg',
    filmName: 'Dardjeeling Limited'
  },
  {
    imagePath: 'img/orlando.jpg',
    filmName: 'Orlando'
  },
  {
    imagePath: 'img/mindhunter.jpg',
    filmName: 'Mindhunter'
  },
  {
    imagePath: 'img/midnight-special.jpg',
    filmName: 'Midnight Special'
  }
];

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

const promoFilmData: PromoFilmData = {
  title: 'The Grand Budapest Hotel',
  releaseYear: 2014,
  genre: 'Drama',
  bgImagePath: 'img/bg-the-grand-budapest-hotel.jpg',
  imagePath: 'img/the-grand-budapest-hotel-poster.jpg'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoData={promoFilmData} films={films} genres={genres}/>
  </React.StrictMode>,
);

