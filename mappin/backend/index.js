const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const pinsRoutes = require('./routes/pins.ts')
const usersRoutes = require('./routes/users.ts')
const app=express();
app.use(cors());
dotenv.config();
app.use(express.json())
mongoose.connect(process.env.MONGO_URL)
.then((res)=>{
    app.listen(8800)
}).catch((err)=>{
    console.log(err ,'err');
})

app.use('/api/pins',pinsRoutes)
app.use('/api/users',usersRoutes)