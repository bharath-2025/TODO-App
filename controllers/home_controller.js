// Requiring the collection of database ie Todo from models folder
const Todo = require('../models/todo');

module.exports.home = function(req,res){

    Todo.find({},function(err,todoItems){
        if(err){
            console.log("Error in fetching data from DB");
            return;
        }
        return res.render('home',{
            title:'TODO APP',
            todoList: todoItems
        })
    })
}

module.exports.createTodo = function(req,res){
    //creating the record into DB
    Todo.create({
        desc : req.body.desc,
        category : req.body.category,
        due : req.body.due
    },function(err,todoItem){
        if(err){
            console.log("Error in creating a contact");
            return;
        }
        //console.log("**********",todoItem);
        return res.redirect('back');
    })

}