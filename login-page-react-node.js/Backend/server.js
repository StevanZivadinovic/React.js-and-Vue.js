const express  = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

//midleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const generateSessionId = require('./functions/generateIDForLogedUsers.js');

app.use(session({
    secret: 'dsfdfjsdgfsjdgfjsgdfjsgfjsgdfjsgdfjgfsd3826428364',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
})
const maxAge = 3*24*60*60;
const createToken = (userId) => {
    return jwt.sign({ id: userId }, 'dsfdfjsdgfsjdgfjsgdfjsgfjsgdfjsgdfjgfsd3826428364', { expiresIn: maxAge });
};

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
        const token = createToken(ID);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });
        req.session.userId = ID;
        return res.json({ userID: ID, data: data })
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
            res.cookie('newUser',false, {httpOnly:true});
            return res.json(data);
        }else{       
            return res.json("Failed")
        }
    })

})


app.get('/check-login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE `email` = ? AND `password`= ?';
    db.query(sql, [req.body.email, req.body.password], (err, data)=>{
        if(err){
            return res.json('Error')
        }
        if(data){
            return res.json(data);
        }else{       
            return res.json("Failed")
        }
    })
 
   
});

app.listen(8081,()=>{
    console.log('listening')
})