import React, { useState } from "react";

// These values come from the item.js => MovieFormHandler component
const SongFormHandler = ({title, artist, genre, id, btnText, submit}) => {
  const initialInputs = {title: title || '', artist: artist || '', genre: genre || ''}
  const [songs, setSongs] = useState(initialInputs)

  // Handles input as the user types
  const handleChange = (e) => {
      console.log("...in handleChange (Item)")
      const {name, value} = e.target
      console.log(name)
      console.log(value)
      setSongs(prevInputs => ({...prevInputs, [name]: value}))
  }

  // Handles form submission
  const handleSubmit = (e) => {
      console.log("...in handleSubmit (Item)")
      e.preventDefault()
      submit(songs, id);
      setSongs(initialInputs)
      //window.location.reload(false)
  }

  return(
      // Form used for updating an item 
      // calls handleSubmit function above
      <div className="addBox">
          <form className="musicAdd" onSubmit={handleSubmit}>
              <input 
                  type='text' 
                  name='title' 
                  value={songs.title} 
                  onChange={handleChange}
                  placeholder='Song Title' />
          &nbsp;&nbsp;
              <input
                  type='text'
                  name='artist'
                  value={songs.artist}
                  onChange={handleChange}
                  placeholder='Song Artist' />
          &nbsp;&nbsp;
          <input
                  type='text'
                  name='genre'
                  value={songs.genre}
                  onChange={handleChange}
                  placeholder='Song Genre' />
          &nbsp;&nbsp;
              <button className="newSong">{btnText}</button>
          </form>
      </div>
  )
}

// Send to .js file
export default SongFormHandler;


//const apiKey = "AIzaSyC_ljcPBul5WIZdGWoncXg-d159HXWUutY";

//function Playlist() {
  // const [title, setTitle] = useState("");
  // const [artist, setArtist] = useState("");
  // const [playlist, setPlaylist] = useState([]);

  // const handleAddSong = () => {
  //   const newSong = { title, artist };
  //   newSong.songId = getSongId(newSong.title, newSong.artist);
  //   setPlaylist([...playlist, newSong]);
  //   setTitle("");
  //   setArtist("");
  // };

  // const getSongId = async (title, artist) => {
  //   // Use the YouTube API to search for videos based on the song title and artist
  //   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
  //     title + " " + artist + " "
  //   )}&type=video&key=${apiKey}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data.items[0].id.videoId;
  // };

  // const getEmbedUrl = async (videoId) => {
  //   // Use the YouTube API to get the embed URL for a video based on its ID
  //   const mainUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}`;
  //   const response = await fetch(mainUrl);
  //   const data = await response.json();
  //   return data.items[0].embedHtml;
  // };

//   return (
//     <div>
//       <h1>My Songlist</h1>
//       <form className="addToPlaylist">
//         <div>
//           <label htmlFor="title">Title:</label>&nbsp;&nbsp;
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           &nbsp;&nbsp;
//         </div>
//         <div>
//           <label htmlFor="artist">Artist:</label> &nbsp;&nbsp;
//           <input
//             type="text"
//             id="artist"
//             value={artist}
//             onChange={(e) => setArtist(e.target.value)}
//           />
//           &nbsp;&nbsp;
//         </div>
//         <button onClick={handleAddSong}>Add</button>
//       </form>
//       {/* {playlist.map((video, index) => (
//         <div key={index}>
//           <h3>
//             {video.title} by {video.artist} 
//           </h3>
//           <div
//             dangerouslySetInnerHTML={{ __html: getEmbedUrl(video.videoId) }}
//           />
//         </div>
//       ))} */}
//       {playlist.map((song, index) => (
//         <div key={index} className='myList'>
//           <h3>
//             {song.title} by {song.artist} 
//           </h3>
//         </div>
//         ))}
//     </div>
//   );
// }

//send to editPlayList
//export default Playlist;
