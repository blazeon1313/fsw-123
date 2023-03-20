const express = require('express');
const axios = require('axios');
const titleRouter = express.Router();


const app = express();

app.get('/music-videos', async (req, res) => {
  const title = req.query.title;
  const apiKey = 'AIzaSyC_ljcPBul5WIZdGWoncXg-d159HXWUutY';

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: title,
        intitle: `${title} music video`,
        type: 'video',
        videoDefinition: 'high',
        videoEmbeddable: true,
        videoSyndicated: true,
        part: 'snippet',
        key: apiKey
      }
    });

    const videos = response.data.items;
    const formattedVideos = videos.map(video => ({
      title: video.snippet.title,
      videoId: video.id.videoId,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`
    }));

    res.render('music-videos', { title, videos: formattedVideos });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = titleRouter;