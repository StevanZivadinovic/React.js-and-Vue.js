const express = require('express');
const pinsRoutes = express.Router();
const Pin = require('../models/Pin.ts')

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
   Pin.find()
    .then((data)=>{ 
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).json({ error: 'Failed to retrieve pins' ,err});
    })
})
// API endpoint to get the number of pins for each user
pinsRoutes.get('/pins_per_user', async (req, res) => {
    try {
      const pinsPerUser = await Pin.aggregate([
        {
          $group: {
            _id: '$username', 
            pinsCount: { $sum: 1 }
          }
        },
        {
          $sort: { pinsCount: -1 }
        }
      ]);
      res.status(200).json(pinsPerUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = pinsRoutes;