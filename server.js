// Import express
// Create express app
// Import express-ejs-layouts
const express = require('express'), app = express(), expressLayouts = require('express-ejs-layouts'),
    indexRouter = require('./routes'), mongoose = require('mongoose'), {mongo} = require("mongoose");


// Set up middleware (using packages here)
app.set('view engine', 'ejs') // Set view engine to ejs
app.set('views', __dirname + '/views') // Set views directory
app.set('layout', 'layouts/layout') // Set layout directory
app.use(expressLayouts) // Use express-ejs-layouts
app.use(express.static('public')) // Use public directory


// Use index router
    app.use('/', indexRouter)


// Start the server on a specified port (telling express to set up the server on port 3000)
    app.listen(process.env.PORT || 3000)
    console.log('The Server is Working And Runs On Port 3000')
