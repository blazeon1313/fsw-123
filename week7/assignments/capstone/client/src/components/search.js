import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  //const [type, setType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // let searchQuery = query;
    // if (type === 'artist') {
    //     searchQuery = 'artist';
    // } else if (type === 'genre') {
    //     searchQuery = 'genre';
    // } else if (type === 'title') {
    //     searchQuery = 'title'
    // } 
    
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 20,
      key: 'AIzaSyC_ljcPBul5WIZdGWoncXg-d159HXWUutY'
    }
  });
    
  onSearch(response.data.items);
  };

  return (
    <div className="searchBar">
      <form className="search" onSubmit={handleSubmit}>
        Search by Title, Artist or Genre: <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, Artist or Genre" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;