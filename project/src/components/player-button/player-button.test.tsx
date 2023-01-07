import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import PlayerButton from './player-button';

describe('Component: PlayerButton', () => {
  it('should render play when isPlay true', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <PlayerButton isPlay/>
      </MemoryRouter>
    );

    expect(screen.getByText('Play')).toBeInTheDocument();
  });

  it('should render pause when isPlay false', () => {
    const initialEntries = ['/'];

    render(
      <MemoryRouter initialEntries={initialEntries}>
        <PlayerButton isPlay={false}/>
      </MemoryRouter>
    );

    expect(screen.getByText('Pause')).toBeInTheDocument();
  });
});
