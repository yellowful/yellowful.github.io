const express = require('express');
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    console.log(req.body);
    const obj={
        name:'Ricardo',
        habby:'sports'
    }
    const html = '<h1>get sucess</h1>'
    res.send(html);
})

app.post('/profile',(req,res)=>{
    console.log(req.body);
    const obj={
        name:'david',
        hobby:'kidding'
    }
    const html = '<h1>post sucess</h1>'
    res.send(html);
})


app.listen(3000);