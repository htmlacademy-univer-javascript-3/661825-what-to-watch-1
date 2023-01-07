import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import LoadingSpinner from './loading-spinner';

describe('Component\'s Tests: LoadingSpinner', () => {
  it ('should loader render correctly', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <LoadingSpinner/>
      </MemoryRouter>
    );

    expect(screen.getByText('Films are loading... It\'s almost there...')).toBeInTheDocument();
  });
});
