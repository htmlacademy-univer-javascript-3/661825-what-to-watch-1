import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import ShowMoreButton from './show-more-button';

describe('Component\'s Tests: ShowMoreButton', () => {
  it ('should show-more-button render correctly', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <ShowMoreButton onClick={() => void 0}/>
      </MemoryRouter>
    );

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
