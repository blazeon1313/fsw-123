import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicVideos = ({ genre }) => {
    const [query, setQuery] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/api/${genre}-music-videos`);
        const videos = response.data;
        const filteredVideos = videos.filter((video) =>
          video.title.toLowerCase().includes(query.toLowerCase())
        );
        setVideos(filteredVideos);
        setFilteredVideos(filteredVideos);
      } 
      catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, );

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filteredVideos);
  };

  const videosToDisplay = filteredVideos.length > 0 ? filteredVideos : videos;

  return (
    <div>
        <h2>{genre} Music Videos</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleQueryChange} />
            <button type="submit">Search</button>
        </form>
        {videosToDisplay.map((video) => (
        <div key={video.videoId}>
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.channelTitle}</p>
            <p>{video.publishedAt}</p>
            <p>{video.description}</p>
        </div>
))}
    </div>
);
};

export default MusicVideos;