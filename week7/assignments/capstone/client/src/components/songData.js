import { useState, useEffect } from 'react'
import axios from 'axios'

import EditList from './songs'
import SongFormHandler from './playList'
//import AddButton from './addButton'


// Used to reload the page by button at bottom of the page
function refreshPage(){ 
  console.log("Page Reloaded!!!")
  window.location.reload(false)
}

function SongList() {

  const [items, setItems] = useState([])

// Retrieve (GET) items from the Express app
  const getItems = () => {
    // Endpoint: GET - http://localhost:9000/songs
    axios.get('/songs')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }

// Create (POST) items to the Express app
  const addSong = (newItem) => {
    // Endpoint: POST - http://localhost:9000/songs
    axios.post('/songs', newItem)
    .then(res => {
      setItems(prevItem => [...prevItem, res.data]) 
    })
    .catch(err => console.log(err))
  }

// Update (PUT) items in the Express app
  const editItem = (updates, itemId) => {
    // Endpoint: PUT - http://localhost:9000/songs/:id
    axios.put(`/songs/${itemId}`, updates)
      .then(res => {  
        setItems(prevItem => prevItem.map(item => item.id !== itemId ? item : res.data))
      })
      .catch(err => console.log(err))
      refreshPage()
    }

// Delete (DELETE) items in the Express app
  const deleteItem = (itemId) => {
    // Endpoint: DELETE - http://localhost:9000/songs/:id
    axios.delete(`/songs/${itemId}`)
    .then(res => {
      setItems(prevItem => prevItem.filter(item => item.id !== itemId))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => { getItems() }, [])

// Render the items to the DOM
  const songList = items.map(item => 
    <EditList
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={items.title}
    /> 
  )

  // Layout for the Page
  return (
    <div>
      <h2>My Song Playlist</h2>
      <div className="itemContainer">
        <SongFormHandler btnText='Add a Song' submit={addSong}/>
        {songList}
      </div>
    </div>
  );
}

// send to App.js file
export default SongList;