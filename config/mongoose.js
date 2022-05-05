// requiring the mongoose
const mongoose = require('mongoose');
// Establish the connection using mongoose.connect()
mongoose.connect('mongodb://localhost/TODO_db');
// Aquire the connection
const db = mongoose.connection;

//Error
db.on('error',console.error.bind('console','Something Went Wrong in connecting to db'));
// Up and Running
db.once('open',function(){
    console.log('Successfully Connected to db');
})