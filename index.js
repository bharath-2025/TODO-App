const express = require('express');
const port = 5000;
const app = express();

// MiddleWare to use the routes inside routes folder.
app.use('/',require('./routes/index'));





app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Server is running on port: ",port);
})