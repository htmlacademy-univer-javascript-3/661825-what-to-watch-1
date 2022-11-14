import {useEffect, useRef } from 'react';
import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film,
  width: number,
  height: number,
  muted: boolean,
  isPlaying: boolean
}

function VideoPlayer(props: VideoPlayerProps) {
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoPlayerRef === null) { return; }

    if (props.isPlaying) {
      videoPlayerRef.current?.play();
    } else {
      videoPlayerRef.current?.load();
    }

  }, [props.isPlaying]);

  return (
    <video
      ref={videoPlayerRef}
      poster={props.film.imagePath}
      src={props.film.videoLink}
      muted={props.muted}
      width={props.width}
      height={props.height}
    />
  );
}

export default VideoPlayer;
