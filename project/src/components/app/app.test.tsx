import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../types/auth-status';
import {Provider} from 'react-redux';
import App from './app';
import {MemoryRouter} from 'react-router-dom';
import {ALL_GENRES} from '../../types/genres';
import {Film} from '../../types/film';
import {render, screen} from '@testing-library/react';

export function createMockFilms(count:number) {
  const films = [];
  for (let i = 0; i < count; i++) {
    films.push({id: i + 1, genre: 'Comedy', name: `TestFilm${i + 1}`, isFavorite: true} as Film);
  }
  return films;
}

const mockStore = configureMockStore();
const mockFilms = createMockFilms(5);
const promoFilm = mockFilms[0];
const currentFilm = mockFilms[0];

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: null
  },
  MAIN: {
    films: mockFilms,
    currentGenre: ALL_GENRES,
    promoFilm: promoFilm,
    error: null,
    isDataLoaded: true,
    favoriteFilms: []
  },
  FILM: {
    film: currentFilm,
    similarFilms: [],
    reviews: []
  }
});

const initialEntries = ['/'];

const fakeApp = (
  <Provider store={store}>
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when navigate to "/"', () => {
    render(fakeApp);

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText(`${ALL_GENRES}`)).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    initialEntries[0] = '/login';
    render(fakeApp);

    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    initialEntries[0] = '/notfoundroute';
    render(fakeApp);

    expect(screen.getByText('Такой страницы нет, поищите другую :(')).toBeInTheDocument();
  });
});
