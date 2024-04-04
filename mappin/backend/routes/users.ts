
const usersRoutes = require('express').Router();
const User = require('./../models/User.ts');
const bcrypt = require('bcrypt')

usersRoutes.post('/register_new_user', async (req, res)=>{
    try{
 // Check if a user with the requested email already exists
 const existingUser = await User.findOne({username:req.body.username, email: req.body.email });
 if (existingUser) {
   return res.status(400).json({ error: 'Email or username is already in use!' });
 }
    // genrate new password
    const salt =await  bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //create new user
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
    }) 
    await newUser.save();

    console.log('New user registered:', newUser);
    
    // Send a response back to the frontend
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    return res.status(400).json({ error: 'Error register, already user with that email or username' });
  }

})

usersRoutes.post('/login', (req, res)=>{
    User.findOne({username:req.body.username})
    .then((data)=>{
        const validPassword = bcrypt.compare(
            req.body.password,
            data.password
        )
        !validPassword && res.status(400).json('Wrong username or password');
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(400).json(err);
    })
})  

module.exports = usersRoutes;

