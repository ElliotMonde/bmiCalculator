//calculator challenge code
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,function(){
  console.log("Server started on port " + port);
})

app.get("/",function (req,res){
  res.sendFile(__dirname + "/index.html");
})
app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");

})


  
app.post("/", function(req,res){
  console.log(req.body);
  var result=Number(req.body.first) + Number(req.body.second);
  res.send("The result equals: " + result)
})
app.post("/bmicalculator", function(req,res){
  var weight = parseFloat(req.body.weight);
  console.log("weight: " + weight);
  var height = parseFloat(req.body.height);
  console.log("height: " + height);
  var BMI = weight/(height*height);
  res.send("Your BMI is <h2>" + BMI.toFixed(2) + "</h2>") 
});
