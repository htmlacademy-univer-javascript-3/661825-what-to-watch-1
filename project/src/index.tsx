import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmTitle='The Grand Budapest Hotel'
      filmReleaseYear={2014}
      filmGenre='Drama'
    />
  </React.StrictMode>,
);
