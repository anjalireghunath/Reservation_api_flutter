const { urlencoded } = require("express");

const express=require("express");
const app=express();

app.use(express.json());
app.use(urlencoded({extended:true}));

const db=require("./App/models");

app.get("/",(req,res)=>{
    res.json({message:"Reservation sample project"});
});

require("./App/routes/routes.passengers.js")(app)

app.listen(9000,()=>{
    console.log("App server is running");
});

