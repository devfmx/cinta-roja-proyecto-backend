const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Importar los modelos desde index.js
const {User,Comment,Post} = require('./models');

const PORT = 3000;
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) =>{
    res.send({message:'Server wall on'})
})

//Crea user
app.post('/create/user',(req,res) => {
    const {full_name,nickname,image_profile} = req.body
    const newUser = User({full_name,nickname,image_profile})
    newUser.save((err,user) => {
        err ? res.status(409).send(err) : res.status(201).send(user)
    })
});

//Crear Post
app.post('/create/post',(req,res) => {
    const {post} = req.body
    const newPost = Post({post})
    newPost.save((err,user) => {
        err ? res.status(409).send(err) : res.status(201).send(user)
    })
});

//Get all post
app.get('/post',(req,res) => {
    Post.find().populate('comments.user').exec()
    .then(posts => {
        res.send(posts)
    }).catch(err => {
        res.status(409).send(err)
    });
})

//Create comment by idPost 
app.post('/comment/:idPost',(req,res) => {
    const {idPost} = req.params
    
    Post.findByIdAndUpdate(idPost,{$push:{comments:req.body}},{new:true}).exec()
    .then(post => {
        res.send(post)
    }).catch(err => {
        res.status(409).send(err)
    });
})

app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
})