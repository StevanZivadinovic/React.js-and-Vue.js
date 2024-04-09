
const usersRoutes = require('express').Router();
const { handleErrors } = require('../hlperFunctions/helperFunctions.js');
const User = require('../models/User.ts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





const maxAge = 3*24*60*60*1000;
const createToken = (id)=>{
  return jwt.sign({id}, 'sycret text of mine',{expiresIn:maxAge})
}

usersRoutes.post('/register_new_user', async (req, res)=>{
    try{
 // Check if a user with the requested email already exists
 const existingUser = await User.findOne({username:req.body.username, email: req.body.email });
 if (existingUser) {
   return res.status(400).json({ error: 'Email or username is already in use!' });
 }
    //create new user
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    }) 
   const newUserAdded =  await newUser.save();
    const token = createToken(newUserAdded._id);
     res.cookie('jwt',token, {httpOnly:true, maxAge:maxAge})
    // Send a response back to the frontend
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {

    const errors =  handleErrors(err);
    return res.status(400).json(errors);
  }

})

usersRoutes.post('/login', (req, res)=>{
  User.findOne({username:req.body.username})
  .then((data)=>{
      if (!data) {
          return res.status(400).json({ error: 'User not found!' });
      }
      const validPassword = bcrypt.compareSync(
          req.body.password,
          data.password
      );
      if (!validPassword) {
          return res.status(400).json({ error: 'Wrong username or password!' });
      }
      res.status(200).json(data);
  }).catch((err)=>{
      res.status(500).json({ error: 'Internal server error' });
  });
});

module.exports = usersRoutes;

