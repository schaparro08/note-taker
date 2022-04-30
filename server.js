const express = require('express');
//TODO: Add the required routes for our api/html
const apiRoute = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')


// Initialize the app to create a port
const app = express();
const PORT = process.env.PORT || 3001;

//TODO: Set up some body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoutes);
//Start the server n the port
app.listen(PORT, () => console.log(`This port is listening at ${PORT}`))

