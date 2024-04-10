
const usersRoutes = require('express').Router();
const { handleErrors } = require('../hlperFunctions/helperFunctions.js');
const { checkUser } = require('../middleware/authMiddleware.js');
const User = require('../models/User.ts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





const maxAge = 3*24*60*60*1000;
const createToken = (id)=>{
  return jwt.sign({id}, 'sycret text of mine',{expiresIn:maxAge})
}

usersRoutes.post('/register_new_user',checkUser, async (req, res)=>{
  try{
      console.log(req.body, 'haj')
 // Check if a user with the requested email already exists
 const existingUser = await User.findOne({username:req.body.username, email: req.body.email });
 if (existingUser) {
  const errors =  handleErrors({ message: 'Already in use!' });
   return res.status(400).json(errors);
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
    return res.status(200).json({ message: 'User registered successfully', user:newUserAdded._id,userData:newUserAdded, loggedIn:true });
  } catch (err) {
    const errors =  handleErrors(err);
    return res.status(400).json(errors);
  }

})

usersRoutes.post('/login',checkUser, (req, res)=>{
  User.findOne({username:req.body.username})
  .then((data)=>{
      if (!data) {
        const errors =  handleErrors({ message:'User not found!' });
          return res.status(400).json(errors);
      }
      const validPassword = bcrypt.compareSync(
          req.body.password,
          data.password
      );
      if (!validPassword) {
        const errors =  handleErrors({ message:'Wrong username or password!' });
          return res.status(400).json(errors);
      }
      const token = createToken(data._id);
      res.cookie('jwt',token, {httpOnly:true, maxAge:maxAge})
      res.status(200).json({ message: 'User logged in successfully', user:data._id, userData:data, loggedIn:true });
  }).catch((err)=>{
    const errors =  handleErrors(err);
      res.status(500).json({errors, loggedIn:false});
  });
});

usersRoutes.get('/logout',(req,res)=>{
  res.clearCookie('jwt', { httpOnly: true, maxAge: 0 });
  res.status(200).json({ message: 'User logged out successfully'});
});

module.exports = usersRoutes;

