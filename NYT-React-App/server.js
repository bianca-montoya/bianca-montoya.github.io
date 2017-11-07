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
  process.env.MONGODB_URI || "mongodb://heroku_z3wfgmtn:1eq8reut426sujiihnunc167t4@ds249325.mlab.com:49325/heroku_z3wfgmtn",
  //local
//mongodb://localhost/articlelist
//production
  // MONGODB_URI: mongodb://heroku_z3wfgmtn:1eq8reut426sujiihnunc167t4@ds249325.mlab.com:49325/heroku_z3wfgmtn
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
