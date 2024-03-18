const express  = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
})

app.post('/signup_zahtev',(req, res)=>{
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(req.body.password)) {
        return res.status(400).json({ error: 'Password does not meet requirements' });
    }
    const sql = 'INSERT INTO login (`id`,`name`, `email`, `password`) VALUES (?)';
    const values = [
        Math.random()*1000,
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json('Error')
        }
        return res.json(data)
    })
})

app.post('/login_zahtev',(req, res)=>{
   
    const sql = 'SELECT * FROM login WHERE `email` = ? AND `password`= ?';
    db.query(sql, [req.body.email, req.body.password], (err, data)=>{
        if(err){
            return res.json('Error')
        }
        if(data.length>0){
            return res.json('Success')
        }else{
            return res.json("Failed")
        }
    })
})

app.listen(8081,()=>{
    console.log('listening')
})