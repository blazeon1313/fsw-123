const express = require('express');
const songRouter = express.Router();

const { v4: uuidv4 } = require('uuid');

let songs = [
    {
      title: "Before He Cheats",
      artist: "Carrie Underwood",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "I Will Always Love You",
      artist: "Dolly Parton",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "Humble and Kind",
      artist: "Tim McGraw",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "The Dance",
      artist: "Garth Brooks",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "Need You Now",
      artist: "Lady A",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "Tennessee Whiskey",
      artist: "Chris Stapleton",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "Friends In Low Places",
      artist: "Garth Brooks",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "I Hope",
      artist: "Gabby Barrett ft. Charlie Puth",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "Blue Ain't Your Color",
      artist: "Keith Urban",
      genre: "Country",
      id: uuidv4()
    },
    {
      title: "Girl Crush",
      artist: "Little Big Town",
      genre: "Country",
      id: uuidv4()
    }
  ]
    
    // routes
    //endpoint: http://localhost:9000/songs
    
songRouter
//Get all
    // METHOD = GET | http://localhost:9000/songs
    .get('/', (req, res) => {
        res.status(200)
        res.send(songs)
    })

// get one
    //METHOD = GET |  http://localhost:9000/songs/:id
    .get('/:songsId', (req,res) => {
        const songsId = req.params.songsId;
        const singularItem = songs.find(song => song.id === songsId);
        if(!singularItem){
          const error = new error(`The song with id ${songsId} was not found!`)
          res.status(500)
          return next(error)
        }
        res.status(200).send(singularItem);
  })

//Post ( Create new listing )
    // METHOD = POST |  http://localhost:9000/songs
    .post('/', (req, res) => {
        const newSong = req.body;
        newSong.id = uuidv4();
        songs.push(newSong);

        console.log(songs)// to show the new song added to the list
        res.status(201).send(newSong);
    })

// Delete ( Delete movie from list )
    // METHOD = DELETED |  http://localhost:9000/songs/:id
    .delete('/:songsId', (req, res) => {
        const songsId = req.params.itemId;
        const songIndex = songs.findIndex(song => song.id === songsId);
        movies.splice(songIndex, 1)

        res.status(200).send(`Song sucessfully Deleted!!`)
    })

// Put
    // METHOD = PUT | http://localhost:9000/songs/:id
    .put('/:songsId', (req, res) => {
        const songsId = req.params.movieId;
        const itemIndex = songs.findIndex(item => item.id === songsId);
        Object.assign(songs[itemIndex], req.body);

        res.status(201).send(songs[itemIndex]);
    })

// Search
    // ability to search by title and genre
    // SEARCH endpoint | http://localhost:9000/songs/search/:string
    .get('/search/:string', (req, res) => {
      console.log("Searching For Songs")

      var searchString = req.params.string
      console.log(searchString)
      const results = songs.filter(songs => {
          const filteredTitle = songs.title.toLowerCase().includes(searchString)
          const filteredArtist = songs.artist.toLowerCase().includes(searchString)

          return filteredTitle || filteredArtist // || filteredYear
      })

      console.log(results)
      res.status(200).send(results)
  })

module.exports = songRouter;