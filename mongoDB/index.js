console.clear();

const express = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
const {createproduct,getallproducts,recorddelete,updatproduct} = require("./productoperation");

mongoose.connect("mongodb://localhost/mernstack",{
  useNewUrlParser:true,
  UseUnifiedTopology:true,
})
.then(async()=>{
  console.log("connection to mongodb is created");
  // code  for add a new record 
  // let product = await createproduct("dell",200,["funnny ","classy"]);
  // console.log(product);

  // code for get all record from our database
  // let product = await getallproducts();
  // console.log(product);

  //code for delete a record
  //let product = await recorddelete('639d8333a005e5ecbad2d92a');

  // code for update a record
  const updaterecord = updatproduct("639d4b6bdf9a9096275794d6","updated dell",400,["tu chal mara putar chuti kar","acha g"])
  // console.log(product);
}).catch((err)=>{
  console.log("ther is some error in connection");
  console.log(err);
})
app.listen(3000);