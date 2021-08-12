'use strict';

console.log ('hello')

// use require instead of import
// const request = require('require');

// docs say this is required
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();
const axios = require('axios');

const PORT = process.env.PORT;

const  weather = require ('./data/weather.json');


app.get('/',(req, res) => {
  res.send('whats up!')
});

// endpoint same applies for movies

app.get('/weather',(req, res) => {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

});



app.listen(PORT, () => console.log(`up on ${PORT}`));
