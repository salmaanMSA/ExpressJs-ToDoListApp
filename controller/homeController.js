const ToDoList = require('../models/toDoList');

// View Tasks
module.exports.home = async function(req, res){
    ToDoList.find({}).then(function(doLists){
        return res.render('home', {
            title: "ToDoApp",
            doLists: doLists,
        });
    }).catch(function(err){
        console.log(err);
    });
}

// Add new Tasks
module.exports.addTask = function(req, res){
    var description = req.body.description;
    var catg = req.body.category;
    var dueDate = req.body.dueDate;

    ToDoList.create({
        description: description,
        category: catg,
        dueDate: dueDate,
    }).then(function(list){
        return res.redirect('back');
    }).catch(function(err){
        console.log(err);
    })
}

// Delete a Task
module.exports.deleteTask = function(req, res){
    let id = req.query.id;
    ToDoList.findByIdAndRemove(id).then(function(list){
        return res.redirect('back');
    }).catch(function(err){
        console.log(err);
    })
}
