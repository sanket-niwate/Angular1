const express = require('express');
const  connectmongo=require("./connection.js")
const router = require('./routing/employeerouting.js');

const app =express();

connectmongo();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("sanket")
})


app.use(router)
app.listen(4000,()=>{
    console.log("listen");
})