// server set up server.js

const express = require('express');
const morgan = require('morgan');
const app = express();

const genreRouter = require('./routes/genre');
const artistRouter = require('./routes/artist');
const titleRouter = require('./routes/title');

const PORT = 9000;

// middleware
app.use(express.json());
// middleware used as a logger
app.use(morgan('dev'));

app.use('/genre', genreRouter);
app.use('/artist', artistRouter);
app.use('/title', titleRouter);

//server startup logic
app.listen(PORT, () => {
    console.log(`app started on port: ${PORT}`)
})