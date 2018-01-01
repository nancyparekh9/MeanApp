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