// const req = require("express/lib/request");

const express=require("express");
const app=express();

app.set('view engine','ejs');


app.get('/home',(req,res)=>{
    // res.send("server is running hjg");
    // res.send("hellog");
    // res.send("how r u?");

    //render ejs html file
    res.render('index');
 })



app.listen(2000,()=>{
    console.log("2000");
})