// giphy search for gif
import React, { useState, useEffect } from 'react';

function GiphyRequest() {
    const [search, setSearch] = useState('rose');
    const [imgSrc, setImgSrc] = useState("");
    const [alt, setAlt] = useState("");

    const api = '33T3PDkgr1pSJ0KAWh6ZL0jIDz6lYNtT';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setImgSrc(data.data[0].images.original.url);
                setAlt(data.data[0].title)
            })
            .catch((error) => console.log(error))
    })

    const getImg = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setImgSrc(data.data[0].images.original.url);
            setAlt(data.data[0].title)
        })
        .catch((error) => console.log(error))
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleBtn = (e) => {
        e.preventDefault();
        getImg();
    }

    return (
        <form className="form">
            <label className="title" >Enter a word or phrase: </label><br/>
            <input id="input" type="text" name="text" value={search} onChange={handleChange} />
            <button id="btn" onClick={handleBtn}>Search</button>
            <div>
                {imgSrc && <img src={imgSrc} alt={alt}/>}
            </div>
        </form>
    );
}
export default GiphyRequest;