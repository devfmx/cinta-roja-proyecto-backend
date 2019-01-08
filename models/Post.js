const mongoose = require('mongoose');
const {commentSchema} = require('./Comment');

//Modelo de Publicaciones
const postSchema = new mongoose.Schema({
    post:String,
    //Campo comments que tiene como tipo un arreglo de comment
    comments:[commentSchema]
},{timestamps:true});

const Post = mongoose.model('Post',postSchema);

module.exports = {Post}