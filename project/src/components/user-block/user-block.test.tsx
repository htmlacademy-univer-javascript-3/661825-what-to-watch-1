import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import UserBlock from './user-block';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../types/auth-status';

describe('Component: UserBlock', () => {
  it('should render sign out when auth', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: {
          avatarUrl: 'avatar',
          email: 'test@test.ru',
          id: 4,
          name: 'Qwerty',
          token: 'secret'
        }
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render sign in when no auth', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
