const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

const userRoute = require('./routers/user.router')
const isAdminMiddle = require('./middleware/admin.middleware')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({welcome: "WELCOME"});
});


app.listen(port,()=>{
    console.log("Listen port: https://localhost:"+port)
});

app.use('/api/users',userRoute);

app.use(isAdminMiddle);