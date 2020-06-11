
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.get('/',(req,res)=>{
//     //reques query
//     //header
//     //body
//     //parameter
//     console.log(req.query);
//     const user ={
//         name:'Ricardo',
//         hobby:'coding'
//     }
//     const html =`<h1>${JSON.stringify(req.query)}</h1>`
    
//     res.send(html);

// })


app.post('/profile',(req,res)=>{
    //reques query
    //header
    //body
    //parameter
    console.log(req.body);
    const user ={
        name:'Ricardo',
        hobby:'coding'
    }
    const html =`<h1>${JSON.stringify(req.body)}</h1>`
    
    res.send(html);

})

app.get('/queryTest',(req,res)=>{
    console.log(req.query);
    const user ={
        name:'Ricardo',
        hobby:'coding'
    }
    const html =`<h1>query sucess!</h1>`    
    res.send(html);
})

app.get('/headersTest',(req,res)=>{
    console.log(req.headers);
    const user ={
        name:'Ricardo',
        hobby:'coding'
    }
    const html =`<h1>headers sucess!</h1>`   
    res.send(html);
})

app.get('/:name',(req,res)=>{
    //query
    //headers
    //body
    //params
    console.log(req.params);
    const user ={
        name:'Ricardo',
        hobby:'coding'
    }
    const html =`<h1>headers sucess!</h1>`   
    res.status(404).send(html);
})



app.listen(3002);