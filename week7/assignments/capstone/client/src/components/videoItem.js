import React from 'react';
//import VideoData from './videoData';

const VideoItem = ({ video, props }) => {
  const onVideoClick = () => {
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    window.open(videoUrl, 'Video Player', 'width=800,height=600');
  };

  // const handleAddToPlaylist = (video) => {
  //   props.addToPlaylist(video);
  // };

  return (
    <div className="videoContainer">
        <div className="video-item" onClick={onVideoClick}>
            <img className="video-thumbnail" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="video-details">
                <h3 className="video-title">{video.snippet.title}</h3>
                <p className="video-channel">{video.snippet.channelTitle}</p>
                {/* <ul>
                  {VideoData.map((video) => (
                  <li key={video.id}>
                    {video.title}{" "}
                  <button onClick={() => handleAddToPlaylist(video)}>Add to Playlist</button>
                  </li>
                  ))}
                  </ul> */}
            </div>
            
        </div>
    </div>
  );
};

export default VideoItem;