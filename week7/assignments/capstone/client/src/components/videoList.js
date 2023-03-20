import React, { useState } from 'react';
import VideoItem from './videoItem';
import VideoPlayer from './player';

const VideoList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
  });

  return (
    <div>
      <h1>Video List</h1>
    <div className="video-list">
      {renderedVideos}
      {selectedVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <VideoPlayer videoId={selectedVideo.id.videoId} />
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default VideoList;