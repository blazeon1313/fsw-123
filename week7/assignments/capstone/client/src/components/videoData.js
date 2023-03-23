import axios from 'axios';

const Video = ({ video }) => {
  const handleAddToPlaylist = async () => {
    try {
      const response = await axios.post('/api/playlist', {
        id: video.id,
        title: video.title,
        thumbnail: video.thumbnail
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <img src={video.thumbnail} alt={video.title} />
      <button onClick={handleAddToPlaylist}>Add to Playlist</button>
    </div>
  );
};

export default Video;