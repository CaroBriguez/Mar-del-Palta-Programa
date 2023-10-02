const express = require("express");
const app = express();
const port = 5000;

const userRoute = require('./routers/user.router')

app.get('/'(req,res)=>{
    res.json({welcome: "WELCOME"});
})

app.listen(port,()=>{
    console.log("Listen port: https://localhost")
})