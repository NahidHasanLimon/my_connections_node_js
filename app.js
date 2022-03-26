const express = require('express')
const app =  express()
// app.use(morgan('dev'))
const PORT = process.env.PORT || 8080
const routes = require('./route.js')
const fs = require('fs')
// console.log(routes)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

async function fetchData(){
    return fs.readFile('connections.json', (err,data) =>{
    })
}
 app.get('/',(req,res)=>{
    // res.send('<h1 style = "text-alignment:center;"> Welcome to my Connection List</h1>');
    fs.readFile('connections.json', (err,data) =>{
        res.json(JSON.parse(data))
    })   
})
// console.log(router);
app.listen(PORT, function(){
    console.log(`server is running on ${PORT}`);
})
