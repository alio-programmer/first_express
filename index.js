const express = require("express");
const path = require('path')
const app = express();
app.set('view engine','ejs')
const port = 5000;

app.get('/api/v1/hello',(req,res)=>{
    res.send(`<h1>hello welcome to port: ${port}</h1>`)
})

app.get('/form', (req,res)=>{
    res.render("form")
})
app.get('/', (req,res)=>{
    res.send(`<h1>hello world</h1>`)
})
app.listen(
   port, ()=>{
        console.log(`server is running on port:${port}`)
    }
)
