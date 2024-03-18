const express  = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const app = express();
app.use(cors())
app.use(express.json())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));
const generateSessionId = require('./functions/generateIDForLogedUsers.js');
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

    const emailCheckQuery  = 'SELECT * FROM login WHERE `email` = ?'
    db.query(emailCheckQuery, [req.body.email], (emailCheckErr, emailCheckData) => {
        if (emailCheckErr) {
            return res.status(500).json({ error: 'Error checking email' });
        }

        if (emailCheckData.length > 0) {
            return res.status(400).json({ error: 'Email is already taken' });
        }


   
    const sql = 'INSERT INTO login (`id`,`name`, `email`, `password`) VALUES (?)';
   const ID = generateSessionId()
    const values = [
        ID,
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json('Error')
        }
        req.session.userId = ID;
        return res.json(data)
    })
})
})

app.post('/login_zahtev',(req, res)=>{

    const sql = 'SELECT * FROM login WHERE `email` = ? AND `password`= ?';
    db.query(sql, [req.body.email, req.body.password], (err, data)=>{
        if(err){
            return res.json('Error')
        }
        if(data.length>0){
            req.session.userId = data[0].id;
            return res.json('Success')
        }else{
            return res.json("Failed")
        }
    })
})

app.get('/check-login', (req, res) => {
    // Check if userId is stored in the session
    const isLoggedIn = !!req.session.userId;
    res.json({ isLoggedIn });
});

app.listen(8081,()=>{
    console.log('listening')
})