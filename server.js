// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Express settings to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setting epress to serve content from the public folder
app.use(express.static('public'));

// Routes
// =============================================================

// home route that renders the porfolio page
app.get("/",(req, res) => {
  res.render("index");
});

// Starts the server to begin listening
// =============================================================
app.listen(3000, () => {
  console.log("App listening on PORT " + 3000);
});
