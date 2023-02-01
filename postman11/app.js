

const express=require("express");
const app=express();//express fnctn returns
const port=8000;
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//two underscores

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    // console.log(req.query);
    res.render('index');
});



app.get('/user',(req,res)=>{
    res.send("get request received");

});


app.post('/user',(req,res)=>{
    res.send("post request received");
    
}); 

app.listen(port,()=>{
     console.log(`server is running at ${port}`);
});




// REST API

