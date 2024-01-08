// server.js

const express = require("express");
const server = express();
const bodyParser = require('body-parser');

// Configure middleware to serve public directory
const staticHandler = express.static("public");
server.use(staticHandler);

// Use EJS as the template engine
server.set('view engine', 'ejs');

// Body parser middleware
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (request, response) => {
    // Render the EJS template (assuming index.ejs is your HTML file)
    response.render('index');
  });




server.post("/", (request, response) => {
  // Access form data using request.body
  const formData = request.body;
  // Process the data as needed
  console.log(formData);
  // Redirect or send a response
  response.redirect('/');
});

module.exports = server;