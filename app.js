console.log("salut");
console.log("test");
const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send("Test");
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
