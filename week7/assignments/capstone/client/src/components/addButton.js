import React from "react";

function AddButton({ addToPlaylist }) {
  const handleClick = () => {
    const music = {
      title: "New Song",
      artist: "New Artist",
      album: "New Album",
      duration: ""
    };
    addToPlaylist(music);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Song to Playlist</button>
    </div>
  );
}

//send to songData.js
export default AddButton;