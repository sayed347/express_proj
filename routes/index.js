const express=require('express');

const router=express.Router();


router.get('/home',(req,res)=>{
res.render('Home')
});
router.get('/contact',(req,res)=>{
res.render('Contact')
});
router.get('/services',(req,res)=>{
res.render('Services')
});




module.exports=router;