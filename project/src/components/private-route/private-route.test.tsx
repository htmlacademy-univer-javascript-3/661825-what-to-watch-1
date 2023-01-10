import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../types/auth-status';
import {Provider} from 'react-redux';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import App from '../app/app';
import {createMockFilms} from '../app/app.test';
import {RoutesEnum} from '../../types/routes';
import PrivateRoute from './private-route';

const mockStore = configureMockStore();
const initialEntries = ['/'];

describe('Component\'s Tests: Private Route', () => {
  it('should render "Login" instead "MyList" when no auth', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null
      },
      MAIN: {
        isDataLoaded: true
      }
    });

    initialEntries.push(RoutesEnum.MyList);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should render "MyList" when auth', () => {
    const film = createMockFilms(1)[0];
    initialEntries.push('/private');
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: null
      },
      DATA: {
        isDataLoaded: true,
        favoriteFilms: [film]
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path='/private' element={
              <PrivateRoute>
                <p>You are in private page</p>
              </PrivateRoute>
            }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('You are in private page')).toBeInTheDocument();
  });
});
