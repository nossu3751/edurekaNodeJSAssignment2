const express = require('express');
const fs = require('fs');

const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send('<h1> Welcome to express server</h1>')
})

app.get('/fileNames', (req,res)=>{
    fs.readFile('db/file_name.json',(error,data)=>{
        if(error){
            console.log(error.stack);
        }else{
            res.send(JSON.parse(data));
        }
    })    
})

app.listen(port,(error)=>{
    console.log('server is running on port' + port);
})