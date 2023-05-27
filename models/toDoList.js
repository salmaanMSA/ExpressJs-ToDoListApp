const mongoose = require('mongoose');

// creating new schemas
const toDoListSchemas = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
    },

    dueDate: {
        type: String
    }
});

// Define Collection Name
const ToDoList = mongoose.model('ToDoList', toDoListSchemas);

// export
module.exports = ToDoList;