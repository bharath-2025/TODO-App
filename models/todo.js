// Model creation ie creating Schema and making it a collection
const mongoose = require('mongoose');

// creating the todo Schema
const todoSchema = new mongoose.Schema({
    desc:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    due:{
        type: String,
        required: true
    }
});

// naming the collection as Todo and telling it to use the schema as todoSchema
const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;