console.clear();

const express = require("express");
const app = express();
app.use(express.json())
const products = ["laptop","LCD","TV"];

app.get("/", function(req,res){
    res.send("Helo world");
});


// this is the cod e for get method when someone hit on this url
// by get method it return a array name as products
app.get("/api/products",(req,res)=>{
res.send(products);
});


// this is the coce for get method but from a specific index 
app.get("/api/products/:index",(req,res)=>{
    if(! products[ req.params.index])
    //status 400  is for bad request
    // and status 200 is for ok
    return res.status(400).send("product is not found");
    res.send(products[req.params.index]);
   
    });

    // this is the code for put method it update the value that user send 
    app.put("/api/products/:index",(req,res)=>{
        // console.log(req.body);
        products[req.params.index]=req.body.name;
        res.send(products[req.params.index]);
      });

      // this is code is for deleete method
      app.delete("/api/products/:index",(req,res)=>{
       products.splice(req.params.index);
        res.send(products);
      });

      // this code is for post mmethod it add a new item in the array
      app.post("/api/products",(req,res)=>{
        products.push(req.body.name);
         res.send(products);
       });
app.listen(3000);