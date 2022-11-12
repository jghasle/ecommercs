const express=require("express");
require("dotenv").config();



const app=express();

const db=require("./models")

db.sequelize.sync({force:true}).then(()=>{
    console.log("database in syc");
})

app.listen(process.env.PORT,()=>{
console.log('application is running');
})