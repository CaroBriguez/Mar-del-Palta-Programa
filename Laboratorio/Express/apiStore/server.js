const express = require ("express");
const app = express();
const bodyParser = require("body-parse");
const port = 5000;

const userRoute = require('./routers/user.router')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({welcome: "WELCOME"});
});


app.listen(port,()=>{
    console.log("Listen port: https://localhost:"+port)
});

app.use('/api/users',userRoute);