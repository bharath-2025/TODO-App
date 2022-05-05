var todo_list =[
    {
        desc:'buying vegetables',
        category:'personal',
        due:'2/5/22'
    },
    {
        desc:'Complete Mini project',
        category:'school',
        due:'10/5/22'
    },
    {
        desc:'perepare for placement',
        category:'Work',
        due:'28/5/22'
    }
]

const Todo = require('../models/todo');

module.exports.home = function(req,res){
   return res.render('home',{
       title:'TODO APP',
       todoList: todo_list
   })
}

module.exports.createTodo = function(req,res){
    // Creating Without db using an array
    // //console.log(req.body);
    // todo_list.push(req.body);
    // return res.redirect('back');

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