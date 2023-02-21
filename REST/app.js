

const express=require("express");
const app=express();//express fnctn returns
const port=8000;
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//two underscores


const methodOverride=require("method-override");
const {v4: uuid}=require('uuid');

let comment=[
    {
        id:uuid(),
        user: "john",
        text:"this is first comment"
    },
    {
        id:uuid(),
        user: "johng",
        text:"this is second comment"
    },
    {
        id:uuid(),
        user: "johngoyal",
        text:"this is third comment"
    },
    {
        id:uuid(),
        user: "krati",
        text:"this is fourth comment"
    }
]


app.get('/comment',(req,res)=>{
    res.render('index',{comment});
})

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.send("CRUD");
})

app.get('/comment/add',(req,res)=>{
    res.render('add');
})
app.post('/comment',(req,res)=>{
    console.log(req.body);
    const {user,text}=req.body;
    comment.push({id:uuid() , user , text});
    res.redirect('/comment');
})


app.get('/comment/:commentid',(req,res)=>{
    const {commentid}=req.params;

    const fd=comment.find((comment)=>comment.id===(commentid));

    res.render('show',{co:fd});
})


app.get('/comment/:commentid/edit',(req,res)=> {
    const {commentid}=req.params;

    const fd=comment.find((comment)=>comment.id===(commentid));

    res.render('edit',{co:fd});
})

app.patch('/comment/:commentid',(req,res)=>
{
    const {commentid}=req.params;

    const fd=comment.find((comment)=>comment.id===(commentid));
     
    const {text,userg}=req.body;
    fd.text=text;
    fd.user=userg;
    res.redirect('/comment');
    
})


//delete

app.delete('/comment/:commentid',(req,res)=>{
    const {commentid}=req.params;
    const newcomment=comment.filter((comment)=> comment.id!==commentid);
    comment=newcomment;
    res.redirect('/comment');
})



app.listen(port,()=>{
     console.log(`server is running at ${port}`);
});



// REST API

