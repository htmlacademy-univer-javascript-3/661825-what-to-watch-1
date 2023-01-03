import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

const TIME_TO_TIMEOUT = 1000;

export type FilmCardProps = {
  film: Film,
  onMouseEnter: (film: Film) => void
}

function FilmCard(props: FilmCardProps) {
  const {film, onMouseEnter} = props;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isNeedVideoToPlay, setIsNeedVideoToPlay] = useState(false);

  useEffect(() => {
    let needUpdate = true;

    if (isNeedVideoToPlay) {
      setTimeout(() => needUpdate && setIsVideoPlaying(true), TIME_TO_TIMEOUT);
    }

    return () => {
      needUpdate = false;
    };
  }, [isNeedVideoToPlay]);

  const handleMouseLeave = () => {
    setIsNeedVideoToPlay(false);
    setIsVideoPlaying(false);
  };

  return (
    <Link
      to={`/films/${film.id}`}
      className="small-film-card catalog__films-card small-film-card__link"
      onMouseEnter={(evt) => {
        onMouseEnter(film);
        setIsNeedVideoToPlay(true);
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer width={280} height={175} film={film} isPlaying={isVideoPlaying} muted/>
      </div>
      <h3 className="small-film-card__title">{film.name}</h3>
    </Link>
  );
}

export default FilmCard;
