'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const movies = require('./movies.json');
const {minYearFilter, maxYearFilter, minRatingFilter, maxRatingFilter, titleFilter, minRunTimeFilter, maxRunTimeFilter, alwaysTrue}  = require('./filters/filters');
const TEN_MINUTES = 60 * 60 * 10;

const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'..','build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', '/index.html'));
});

app.get('/movies', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    if (!Object.keys(req.query).length) {
        res.set('Cache-Control', `max-age=${TEN_MINUTES}`);
        res.send(movies);
    } else {
        const {title, maxRating, minRating, maxYear, minYear, minRunTimeMinutes, maxRunTimeMinutes} = req.query;
        const filteredMovies = movies
            .filter(title ? titleFilter(title.toLowerCase()) : alwaysTrue)
            .filter(maxRating ? maxRatingFilter(maxRating) : alwaysTrue)
            .filter(minRating ? minRatingFilter(minRating) : alwaysTrue)
            .filter(maxYear ? maxYearFilter(maxYear) : alwaysTrue)
            .filter(minYear ? minYearFilter(minYear) : alwaysTrue)
            .filter(minRunTimeMinutes ? minRunTimeFilter(minRunTimeMinutes) : alwaysTrue)
            .filter(maxRunTimeMinutes ? maxRunTimeFilter(maxRunTimeMinutes) : alwaysTrue);
        res.send(filteredMovies);
    }
});

app.get('/movies/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.set('Cache-Control', `max-age=${TEN_MINUTES}`);
    res.send(movies.filter(movie => movie.id === req.params.id)[0]);
});

app.listen(3000, function () {
    console.log(`app listening on port ${3000}!`);
});

module.exports = app;
