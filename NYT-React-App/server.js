const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//route is required from the route/api folder for use in API calls to the DB
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_6btt3x50:9214iurk77r27nb8jhf9s8h0ag@ds249575.mlab.com:49575/heroku_6btt3x50",
  //local
//mongodb://localhost/articlelist
//production
  // MONGODB_URI: mongodb://heroku_6btt3x50:9214iurk77r27nb8jhf9s8h0ag@ds249575.mlab.com:49575/heroku_6btt3x50
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
