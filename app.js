const express = require("express");
const bodyParser = require("body-parser");

var app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
var listItems = [];
var example = "working";p
app.get("/",function(req,res){
    res.render("list",{ejes : example});
});
app.post("/",function(req,res){
    var listItems = req.body.name;
    listItems.push(item);
    res.redirect("/");
});



app.listen(8000,function(){
    console.log("Server Started!")
});