//this is server in express, without ejs
const express = require('express');
const app=express();
//register new engine
app.set('view engine','ejs');
app.listen(3000);
//middlewares
app.use(express.static('public'));
// app.use((req, res, next)=>{
//     console.log('every time this middleware renders');
//     next()
// })
app.get('/',(req, res)=>{
   res.redirect('/blogs')
})
app.get('/blogs',(req, res)=>{
    const blogs=[]
    res.render('blogs',{title:"All blogs", blogs})
 })
app.get('/about',(req, res)=>{

    res.render('about', {title:'About'})
})
app.get('/blogs/create',(req, res)=>{
    res.render('create', {title:'Create a new blog'});
})

//middlewares
app.use((req, res)=>{
    res.status(404).render('index')
})





