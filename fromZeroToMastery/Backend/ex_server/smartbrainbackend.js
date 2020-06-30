const express = require('express');
var cors = require('cors');
const bcrypt = require('bcrypt-nodejs')

var db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'RichardHuang',
      password : '',
      database : 'smartbrain_db'
    }
  });

const app = express();
let database={
    users:[
        {
            id:123,
            name:'Taylor',
            email:'taylor@gmail.com',
            password:'1111',
            entries:0,
            joined: new Date()
        },
        {
            id:124,
            name:'Katy',
            email:'katy@gmail.com',
            password:'2222',
            entries:0,
            joined: new Date()
        }
    ]
}
    

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(database.users)

})

app.post('/signin',(req,res)=>{  
    let i=0;    
    let isValidUser = database.users.some(item=>{
        i++;
//        console.log('true o false',item.email,req.body.email,req.body.password,item.password)
        if(item.email===req.body.email && req.body.password===item.password){
            return true;
        } else {
            return false;
        }
    })
    if(isValidUser){
        const currentUser = {
            id:database.users[i-1].id,
            name:database.users[i-1].name,
            email:database.users[i-1].email
        }
        res.json('success');
    } else{
        res.json('not found');
//        console.log('signin',req.body,'users',database.users)
    }
}) 


app.post('/register',(req,res)=>{
    const lastElement = database.users.length-1;
    const newUser={
        id:database.users[lastElement].id+1,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        entries:0,
        joined:new Date()
    }
    // bcrypt.hash("req.body.password", null, null, function(err, hash) {
    //     newUser.password = hash;
    //     // Store hash in your password DB.
    // });
    const isValidUser = req.body.name==='' || req.body.email==='' || req.body.password==='';
    if(!isValidUser){
        const hash = bcrypt.hashSync(req.body.password);
        db.transaction(trx => {
            trx.insert(
                {
                    email:req.body.email,
                    hash: hash
                })
            .into('login')
            .returning('email')
            .then( resEmail => {
                return trx('users').insert({name: req.body.name, email:resEmail[0], joined: new Date})
                .returning('*')
                .then(resUsers => res.json('success'))
                .catch(err => res.status(404).json('fail'))
            })  
            .then(trx.commit)
            .catch(trx.rollback);          
        })       
    } else {
        res.status(404).json('fail')
    }

})

app.get('/profile/:id',(req,res)=>{
    let i=0;
    let isValidUser = database.users.some(item=>{
        i++;
        return item.id===Number(req.params.id);
    })
        
    if(isValidUser){
        const currentUser = {
            name:database.users[i-1].name,
            email:database.users[i-1].email
        }
        res.json(currentUser);
    } else {
        res.status(400).send('not found');
    }
})

app.put('/image',(req,res)=>{
    let i=0;
    let isValidUser = database.users.some(item=>{
        i++;
        return item.id===Number(req.body.id);
    })
        
    if(isValidUser){
        database.users[i-1].entries++;
        const currentUser = {
            name:database.users[i-1].name,
            email:database.users[i-1].email,
            entries:database.users[i-1].entries
        }
        res.json(currentUser);
    } else {
        res.status(400).send('not found');
    }
})

app.listen(3000);