// const req = require("express/lib/request");
//use nodemon to server running continuously 
const express=require("express");
const app=express();
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//two underscores

app.use(express.static(path.join(__dirname,'public')));

const todos=[
  "coding" ,"fight" ,"one-way type"
]

app.set('partials',path.join(__dirname,'partials'));




app.get('/home',(req,res)=>{
    // res.send("server is running hjg");
    // res.send("hellog");
    // res.send("how r u?");
      const rn =Math.floor(Math.random()*10);
    //render ejs html file
    res.render('index',{todos, rn});
 })



app.listen(2000,()=>{
    console.log("2000");
})