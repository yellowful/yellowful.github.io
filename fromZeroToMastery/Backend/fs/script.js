const fs = require('fs');
fs.readFile('./hello.text',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log('readFile',data.toString());
})

fs.readFileSync('./hello.text',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log('readFileSync',data.toString());
})

fs.appendFile('./hello.text','this is appendFile \n',(err)=>{
    if(err){
        console.log('this is appendFile')
    }
    console.log('this is appendFile')
})


fs.appendFileSync('./hello.text','this is appendFileSync \n',err=>{
    if(err){
        console.log(err)
    }
    console.log('this is appendFileSync')
})


fs.writeFile('./wf.text','this is writeFile',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('this is writeFile err')    
})

fs.writeFileSync('./wfs.text','this is writeFileSync',err=>{
    if(err){
        console.log(err)
    }
    console.log('this is writeFileSync');
})

fs.unlink('./goodday1.text', err=>{
    if(err){
        console.log(err)
    }
    console.log('this is unlink');
})

fs.unlinkSync('./goodday.text',err=>{
    if(err){
        console.log(err)
    }
    console.log('this is unlinkSync')
})

