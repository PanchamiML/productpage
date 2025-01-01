const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    Product:{
       type:String,
        required:true
    },
    About:{
        type:String,
        required:true
        
    },
    Remarks:{
        type:String,
        required:true
    }

},{timestamps:true});

const Blog = mongoose.model('Blog',blogSchema);
 module.exports = Blog;


