const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5
    },
    description: {
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('TodoSchema', todoSchema);