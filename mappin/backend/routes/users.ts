
const usersRoutes = require('express').Router();
const User = require('./../models/User.ts');
const bcrypt = require('bcrypt')

usersRoutes.post('/register_new_user', async (req, res)=>{
    // genrate new password
    const salt =await  bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //create new user
    const newUser = new User({
        username:req.body.password,
        email:req.body.email,
        password:hashedPassword,
    }) 
    newUser.save()
    .then((data)=>{
    })
    .catch((err)=>{
        res.status(400).send(err);
    })

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

