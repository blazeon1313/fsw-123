// const axios = require('axios');

// async function fetchYoutubeData(searchQuery) {
//     try {
//       const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           q: searchQuery,
//           part: 'snippet',
//           type: 'video',
//           key: 'AIzaSyC_ljcPBul5WIZdGWoncXg-d159HXWUutY'
//         }
//       });
//       return response.data.items;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   module.exports = {
//     fetchYoutubeData
//   };