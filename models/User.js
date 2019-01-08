const mongoose = require('mongoose');

//Modelo de usuario
const userSchema = new mongoose.Schema({
    full_name:String,
    nickname:String,
    image_profile:String
},{timestamps:true});

const User = mongoose.model('User',userSchema);


module.exports = {User}