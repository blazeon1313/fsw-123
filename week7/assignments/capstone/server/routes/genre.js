const express = require('express');
const axios = require('axios');
const genreRouter = express.Router();

const app = express();

// set up YouTube API credentials
const apiKey = 'AIzaSyC_ljcPBul5WIZdGWoncXg-d159HXWUutY';
const baseUrl = 'https://www.googleapis.com/youtube/v3';

// define function for fetching music videos
const fetchMusicVideos = async (musicGenre) => {
  try {
    // make API request to search for music videos
    const response = await axios.get(`${baseUrl}/search`, {
      params: {
        key: apiKey,
        q: `${musicGenre} music video`,
        type: 'video',
        videoDefinition: 'high',
        videoEmbeddable: true,
        videoSyndicated: true,
        videoCategoryId: '10', // category ID for Music
        maxResults: 20 // maximum number of results to return
      }
    });

    // extract video information from API response
    const videos = response.data.items.map((item) => {
      return {
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.high.url,
        description: item.snippet.description,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt
      };
    });

    return videos;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching videos');
  }
};

// define routes for fetching music videos
app.get('/api/country', async (req, res) => {
  try {
    const videos = await fetchMusicVideos('country');
    res.json(videos);
  } catch(error) {
    res.status(500).json({ error: error.message });
    }
    });
    
    app.get('/api/pop-music-videos', async (req, res) => {
    try {
    const videos = await fetchMusicVideos('pop');
    res.status(200).json(videos);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    });
    
    app.get('/api/gospel-music-videos', async (req, res) => {
    try {
    const videos = await fetchMusicVideos('gospel');
    res.json(videos);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    });
    
    app.get('/api/rock-music-videos', async (req, res) => {
    try {
    const videos = await fetchMusicVideos('rock');
    res.json(videos);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    });

module.exports = genreRouter;