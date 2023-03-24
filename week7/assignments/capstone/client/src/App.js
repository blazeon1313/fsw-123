import React, { useState } from 'react';


import SearchBar from './components/search';
import VideoList from './components/videoList';
import SongList from './components/songData';

import './App.css'

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = (newVideos) => {
    setVideos(newVideos);
  };

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (video) => {
    setPlaylist([...playlist, video]);
  };

  return (
    <div>
      <h1 className="head">Youtube React App</h1>        
      <SongList />
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      { /*<ul>
        {playlist.map((video) => (
          <li key={video.id}>{video.title}</li>
        ))}
        </ul> */ }
      <div>
        <VideoList videos={videos} addToPlaylist={addToPlaylist}/>
      </div>
    </div>
  );
};

//send to index.js
export default App;