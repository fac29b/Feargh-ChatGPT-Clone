// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Set 'views' directory for EJS templates
app.set('views', path.join(__dirname, '../views'));

// Use EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Example route handling
app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;