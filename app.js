const express= require("express");

const app=express();

app.get("/",(req,res)=>{
res.send("HI I AM ABHISEK!");
});

app.listen(process.env.PORT || 3000,()=>{
console.log("Server started successfully...");
});