/*jshint esversion: 6 */
// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// Requiring our Note and Article models
const Note = require("./models/Note.js");
const Article = require("./models/Article.js");
// Our scraping tools
const request = require("request");
const cheerio = require("cheerio");
const routes = require('./controllers/routes.js');

const PORT = process.env.PORT || 3000;

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
const app = express();

// Use logger in dev environment
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public folder a static directory
app.use(express.static('public'));

// Database configuration with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/headlinesDb');
const db = mongoose.connection;

// Show any mongoose connection errors
db.on('error', error => {
  console.log('Mongoose error: ', error);
});

// Show message if mongoose successfully connects
db.once('open', () => {
  console.log('Mongoose connection successful.');
});

// Open site at root
app.use('/', routes);

// Listen on port 3000
app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
