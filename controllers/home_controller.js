module.exports.home = function(req,res){
   return res.render('home',{
       title:'TODO APP',
       body: 'This is the body part of home page'
   })
}