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
            console.log("Error in assigning task");
            return;
        }
        //console.log("**********",todoItem);
        return res.redirect('back');
    })

}

module.exports.deleteTodo = function(req,res){
    // // logic has to be written here
    // console.log(req.query);
    const queryObj = req.query;   // since we are using get method in deleting names will passed as a query params in the url. So i am fetching that query params object using req.query;
    //console.log('Object.keys(queryObj'));
    const count = Object.keys(queryObj).length;  // Object.keys(obj_name) will written all the keys of the Obj_name.
    for(let i=0;i<count;i++){
        //console.log(Object.keys(queryObj)[i]);
        let id = Object.keys(queryObj)[i];
        Todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log("Error in deleting a Todo Item !!");
            }
        })
    }
    return res.redirect('back');
}