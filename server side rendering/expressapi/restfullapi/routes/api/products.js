var express = require('express');
var router = express.Router();
var {Product,validate} = require("../../models/products");
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");


// route for get all the products from the database
router.get("/", async (req,res)=>{
    let page = Number(req.query.page ? req.query.page:1);
    let perpage = Number(req.query.perpage ? req.query.perpage:3);
    let skipRecord = perpage*(page-1);
    let products = await Product.find().skip(skipRecord).limit(perpage);
    let total = await Product.countDocuments();

    return res.send({ total,products });
})

// code for route get an single product from the database

router.get("/:id", async (req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product) 
        return res.status(400).send("the given id is not preset in db"); // when id is not present in db
        return res.send(product);// when everything is OK
       } catch(err){
        return res.status(400).send("Invalid Id");// when the format of given id is not correct
       }
    
})

// code for route to update a record from the database
router.put("/:id",validateProduct,validateProduct,async (req,res)=>{
    let product = await Product.findById(req.params.id);
    product.name= req.body.name;
    product.price=req.body.price;
    await product.save();
    return res.send(product);

})

// code for route to delete a rocrd from the database
    router.delete("/:id",async (req,res)=>{
    let product = await Product.findByIdAndDelete(req.params.id);
    
    return res.send(product);
})

// code for route to insert anew record

router.post("/",validateProduct,auth,async (req,res)=>{
   
    
    let product =new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save();
    return res.send(product);
})


module.exports = router;
// 