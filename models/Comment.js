const mongoose = require('mongoose');

//Modelo de Comentarios
const commentSchema = new mongoose.Schema({
    comment:String,
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{timestamps:true});

//Solo se exporta el esquema porque se va a usar en el modelo Post
module.exports = {commentSchema}