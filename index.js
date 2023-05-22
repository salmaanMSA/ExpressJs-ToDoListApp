// require libraries
const express = require('express');
const port = 8002;
const db = require('./config/mongoose');

// initialize app & port
const app = express();


// Define app.use configurations
app.use('/', require('./routes')); // user router
app.use(express.urlencoded()); // used for getting values from request query
app.use(express.static('assets')); // define asset folder

// define app.set configurations
app.set('view engine', 'ejs'); // initialize view engine
app.set('views', './views'); // set view path for html files

// listening for changes
app.listen(port, function(err){
    if(err){
        console.log(`Error in running server due to: ${err}`);
    }
    console.log(`Server running on port: ${port}`)
})