import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import Footer from './page-footer';

describe('Component\'s Tests: Footer', () => {
  it ('should footer render correctly', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Footer/>
      </MemoryRouter>
    );

    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
