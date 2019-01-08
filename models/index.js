const mongoose = require('mongoose');
const {User} = require('./User');
const {Post} = require('./Post');

const URL_MONGO = 'mongodb://prueba:pruebita123@ds259079.mlab.com:59079/cinta-roja'

//Cadena de conexión y se manda a llamar los modelos
mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(err)=>{
    if (!err) console.log('Conexión exitosa');
});

module.exports = {
    User,
    Post
}