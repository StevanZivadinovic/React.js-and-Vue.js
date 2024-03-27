const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app=express();
dotenv.config()
console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL)
.then((res)=>{
    app.listen(8000)
}).catch((err)=>{
    console.log(err ,'err');
})