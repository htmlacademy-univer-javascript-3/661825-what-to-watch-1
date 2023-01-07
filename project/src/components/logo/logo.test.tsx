import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Logo from './logo';

describe('Component\'s Tests: Logo', () => {
  it ('should logo render correctly', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Logo className={'logo__link'}/>
      </MemoryRouter>
    );

    expect(screen.getByText('T')).toBeInTheDocument();
  });
});
