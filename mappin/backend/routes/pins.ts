const express = require('express');
const pinsRoutes = express.Router();
const Pin = require('./../models/Pin.ts')

//create pin
pinsRoutes.post('/create',(req, res)=>{
   const newPin= new Pin(req.body);
   newPin.save()
   .then((data)=>{ 
    res.status(200).send(data)
}).catch((err)=>{
    res.status(500).json(err);
})
}) 

//get all pins

pinsRoutes.get('/get_pins',(req, res)=>{
    const allPins = Pin.find()
    allPins
    .then((data)=>{ 
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

module.exports = pinsRoutes;