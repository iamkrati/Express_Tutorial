const express=require("express");
const app=express();//express fnctn returns
const port=3000;
const path=require("path");


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//two underscores

app.use('/',express.static(path.join(__dirname,'public')));


app.use(express.urlencoded({extended:true}));

const Todos=["go to gym","buy grocer"];


app.get('/todos',(req,res)=>{
    res.json(Todos);
})

app.post('/todos',(req,res)=>{
    // console.log(req.body);
    const {todo}=req.body;
    Todos.push(todo);
    res.status(200).json({msg:'Successfully'});
    // res.redirect('/');
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
