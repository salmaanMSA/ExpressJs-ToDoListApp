// require library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/toDoListDb');

// acquire the connection
const db = mongoose.connection;

// msg on connection err
db.on('error', console.error.bind(console, "Error connecting to mongoDb"));

// msg on connection success
db.once('open', function(){
    console.log("Connected to MongoDB");
})