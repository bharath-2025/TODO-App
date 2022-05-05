const express = require('express');
const port = 5000;
const app = express();

// MiddleWare to use the routes inside routes folder.
app.use('/',require('./routes/index'));


// setting up the view engine
app.set('view engine','ejs');   // telling to our express server to use/setup EJS as the default template engine.
app.set('views','./views');     // setting up the path for views.




app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Server is running on port: ",port);
})