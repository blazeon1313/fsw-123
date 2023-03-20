import React, { useState } from "react";


const apiKey = "AIzaSyC_ljcPBul5WIZdGWoncXg-d159HXWUutY";

function Playlist() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleAddVideo = () => {
    const newVideo = { title, artist };
    newVideo.videoId = getVideoId(newVideo.title, newVideo.artist);
    setPlaylist([...playlist, newVideo]);
    setTitle("");
    setArtist("");
  };

  const getVideoId = async (title, artist) => {
    // Use the YouTube API to search for videos based on the song title and artist
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
      title + " " + artist
    )}&type=video&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items[0].id.videoId;
  };

  const getEmbedUrl = async (videoId) => {
    // Use the YouTube API to get the embed URL for a video based on its ID
    const mainUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=player&key=${apiKey}`;
    const response = await fetch(mainUrl);
    const data = await response.json();
    return data.items[0].player.embedHtml;
  };

  return (
    <div>
      <h1>My Playlist</h1>
      <div className="addToPlaylist">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <button onClick={handleAddVideo}>Add</button>
      </div>
      {playlist.map((video, index) => (
        <div key={index}>
          <h3>
            {video.title} by {video.artist} 
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: getEmbedUrl(video.videoId) }}
          />
        </div>
      ))}
    </div>
  );
}

export default Playlist;

