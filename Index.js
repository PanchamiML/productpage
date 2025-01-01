const express = require('express');
const mongoose = require('mongoose');

const Blog = require('./models/blog.js');



const app = express()

const dburl = "mongodb+srv://unni09103:Dm3dfPX3SxqBTCIo@cluster0.rutt2.mongodb.net/productdata?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dburl)
.then((result) => console.log("connected to database"))
.catch((err)=>console.log(err))



app.set('view engine','ejs')
app.listen(3000)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));


app.get('/addedproducts',(req,res) => {
    const blog = new Blog({
        Product:"Kerala Saree",
        About:"It is a set of specially weaved twentyfour sarees with each saree poses unique design.Here mainy using threadworks and it is completely handmade.",
        Remarks:"According to the effort made for ynique designs each saree pocess different ammount"

    })
    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/',(req,res) => {
    Blog.find().sort({createdAt:-1})
    .then((result) => {
        res.render('home',{blogs:result})

    })
    .catch((err) =>{
        console.log(err)
    })
    
})

app.get('/about',(req,res) => {
    
    Blog.find().sort({createdAt:-1})
    .then((result) => {
        res.render('productabout',{blogs:result})

    })
    .catch((err) =>{
        console.log(err)
    })
})

app.get('/new',(req,res) => {
    res.render('newproduct')
})

app.post('/',(req,res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err);
    })
})