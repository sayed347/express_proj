const express =require('express');
const path=require('path');
const app=express();
const router=require('./routes/index');

const Port= process.env.Port || 8000;
app.use(testDate);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');
app.use('/',router);
function testDate(req,res,next){
    if (req.query.date!= (Sat||Sun)){
        next()
    }else{
        res.send('server not available in the week-ends')
    }
};


app.listen(Port,()=>console.log(`server is running on ${Port}`))