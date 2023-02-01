

const express=require("express");
const app=express();//express fnctn returns
const port=8000;
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//two underscores

const comments=[
    {
        id:0,
        user: "john",
        text:"this is first comment"
    },
    {
        id:1,
        user: "johng",
        text:"this is second comment"
    },
    {
        id:2,
        user: "johngoyal",
        text:"this is third comment"
    },
    {
        id:3,
        user: "krati",
        text:"this is fourth comment"
    }
]


app.get('/comment',(req,res)=>{
    res.render('index',{comments});
})

app.listen(port,()=>{
     console.log(`server is running at ${port}`);
});




// REST API

