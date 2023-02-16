

const express=require("express");
const app=express();//express fnctn returns
const port=8000;
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//two underscores



const comment=[
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
    res.render('index',{comment});
})

app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));



app.get('/comment/add',(req,res)=>{
    res.render('add');
})
app.post('/comment',(req,res)=>{
    console.log(req.body);
    const {user,text}=req.body;
    comment.push({id:comment.length , user , text});
    res.redirect('/comment');
})


app.get('/comment/:commentid',(req,res)=>{
    const {commentid}=req.params;

    const fd=comment.find((comment)=>comment.id===parseInt(commentid));

    res.render('show',{co:fd});
})


app.get('/comment/:commentid/edit',(req,res)=> {
    const {commentid}=req.params;

    const fd=comment.find((comment)=>comment.id===parseInt(commentid));

    res.render('edit',{co:fd});
})

app.patch('/comment/:commentid',(req,res)=>
{
    const {commentid}=req.params;

    const fd=comment.find((comment)=>comment.id===parseInt(commentid));
  
      res.send('PATCH Request');
    
})

app.listen(port,()=>{
     console.log(`server is running at ${port}`);
});



// REST API

