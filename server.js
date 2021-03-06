// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var htmlRoutes = require('./app/routing/htmlRoutes')(app);
var apiRoutes = require('./app/routing/apiRoutes')(app);
var data = require("./app/data/friends.js");

// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || 8000, function() {
  console.log("App listening on PORT " + PORT);
});
