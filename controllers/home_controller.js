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

module.exports.home = function(req,res){
   return res.render('home',{
       title:'TODO APP',
       body: 'This is the body part of home page',
       todoList: todo_list
   })
}

module.exports.createTodo = function(req,res){
    //console.log(req.body);
    todo_list.push(req.body);
    return res.redirect('back');
}