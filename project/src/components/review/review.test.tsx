import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {ReviewType} from '../../types/review';
import Review from './review';


describe('Component\'s Tests: Review', () => {
  it('should review render correctly', () => {
    const initialEntries = ['/'];
    const review = {id: 1, rating: 5, comment: 'top film', date: '2023-01-07', user: {id: 1, name: 'user'}} as ReviewType;
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Review review={review}/>
      </MemoryRouter>
    );

    expect(screen.getByText('top film')).toBeInTheDocument();
    expect(screen.getByText('January 07, 2023')).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText('user')).toBeInTheDocument();
  });
});
