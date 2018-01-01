
const express = require ('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.post('/register',(req,res,next)=>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err,user) =>{
        if(err){
            res.json({success: false , msg:'Failed to register user'});
        }
        else{
            res.json({success: true , msg:'User registered'});
        }
    });


});
router.post('/authentication',(req,res,next)=>{
    res.send('Authenticate');


});

router.get('/profile',(req,res,next)=>{
    res.send('PROFILE');


});







const express = require ('express');

const router = express.Router();

router.get('/register',(req,res,next)=>{
    res.send('REGISTER');


});
router.get('/authentication',(req,res,next)=>{
    res.send('Authenticate');


});

router.get('/profile',(req,res,next)=>{
    res.send('PROFILE');


});
router.get('/validate',(req,res,next)=>{
    res.send('VALIDATE');


});




module.exports = router;