const express = require('express');
const mysql = require('mysql');
const app=express();
app.listen(3000);


//register new engine
app.set('view engine','ejs');



//middlewares
app.use(express.static('public'));
app.use(express.json());
// app.use((req, res, next)=>{
//     console.log('every time this middleware renders');
//     next()//ako ne stavis next() ne cita kod dalje, blokira refresh
// })

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blogs'
})


app.get('/',(req, res)=>{
   res.redirect('/blogs')
})
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
app.get('/blogs',(req, res)=>{
    const blogs=[]
    res.render('blogs',{title:"All blogs", blogs})
 })
app.get('/about',(req, res)=>{
    res.render('about', {title:'About'})
})

//middlewares
app.use((req, res)=>{
    res.status(404).render('404',{title:"Page not exist!"})
})





