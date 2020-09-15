const http = require('http');

const server = http.createServer((req,res)=>{
    const user = {
        name:'John',
        age:'43'
    }   
    
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(user));
})

server.listen(3000);