import React from 'react';
import Playlist from './playList'

const VideoPlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-player">
      <iframe src={videoUrl} allowFullScreen title="YouTube video player"></iframe>
      <Playlist />
    </div>
  );
};

export default VideoPlayer;