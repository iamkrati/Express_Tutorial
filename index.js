// const name="kratigoyal";
// console.log(name);

// const fs=require("fs");
// // console.log(fs);
// const d=fs.readFileSync('AliceInWonderland.txt',
// {encoding:'utf8',
// flag:'r'});
// console.log(d);
// const data1 = fs.readFileSync('JekyllAndHyde.txt',
//               {encoding:'utf8', flag:'r'});
// console.log(data1);

// const data = fs.readFileSync('LOTR.txt',
//               {encoding:'utf8', flag:'r'});
// console.log(data);


// const path=require("path");


// console.log(path.join(__dirname,'kk','/JekyllAndHyde.txt'));


// console.log(process.cwd());



// const fs = require("fs");
// // console.log(fs);
// fs.readFile('input1.txt', { encoding: 'utf8', flag: 'r' }, (err, data) => {
//     if (!err) {
//         // console.log(data);
//         const array = data.toString().split("\n");
//         // const ans=[];
//         fs.readFile('input2.txt', { encoding: 'utf8', flag: 'r' }, (err, data) => {
//             if (!err) {
//                 const array2 = data.toString().split("\n");
//                 const ans = array.concat(array2);
//                 ans.sort((a, b)=>(a - b));
//                 console.log(ans);
//                 // const writeStream = fs.createWriteStream('output.txt');
//                 // ans.forEach(value => writeStream.write(`${value}\n`));
//                 let text = ans.join('\n');
//                fs.writeFile("Output.txt",text,(err)=>{
//                 if(err)throw err;
//                 console.log("File Successfully Writtened");
//                })
//             }
//         });
//     }
//     else
//         console.log(err);
// });
// console.log(data);



//                 HTTP MODULE


// const http=require("http");
// const server=http.createServer((req,res)=>{
//      if(req.url==='/home')
//      {
//         res.write(`index.html`);
//         res.end();
//      }
//      else if(req.url==='/contact')
//      {
//         res.write("dghf");
//         res.end();
//      }
//      else
//      {
//         res.end("not a right url");
//      }
// })
// server.listen(8000);
// console.log("server is running on port 8000");



const express=require("express");
const app=express();//express fnctn returns
const port=8000;


// app.use((req,res)=>{
//    console.log("server b is rujhhnning");
//    // res.send("server b is rujhhnning");
// })

app.get('/home1',(req,res)=>{
   res.send("server is running hjg");
   // res.send("hellog");
   // res.send("how r u?");
})

//routing:


app.get('/r/:subreddit',(req,res)=>{
   const {subreddit}=req.params;
   console.log(req.params);
   res.send(`you are watchig ${subreddit}`);
})

app.get('/search',(req,res)=>{
   const {q}=req.query;
   // console.log(req.params);
   console.log(req.query);
   //  res.send("JAI SHREE RAM")
    res.send(`hy ${q}`);

})



app.get('*',(req,res)=>{
   res.send("Wrong URL Found");
})




app.listen(port,()=>{
     console.log(`server is running at ${port}`);
});
