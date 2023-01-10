
var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var checksessionAuth = require("../middlewares/checksessionAuth");
/* GET home page. */

// this is the root for geting  all products from the db
router.get('/',async function(req, res, next) {
   let products = await Product.find();
   console.log(req.session.user);
  res.render('product/list',{title:"products in database",products});
});

// this is the root for add a form
router.get('/add',checksessionAuth,async function(req, res, next) {
    
   res.render('product/add');
 });

 // this is the root for add new products in db with post method
 router.post('/add',async function(req, res, next) {
   let product =new Product(req.body);
   await product.save();

    res.redirect('/product');
  });

  router.get('/delete/:id',async function(req, res, next) {
    let product = await Product.findByIdAndDelete(req.params.id);
    res.redirect('/product');
        });

 router.get('/cart/:id',async function(req, res, next) {
    let product = await Product.findById(req.params.id);
    console.log("Add this product to cart");
    let cart=[];
    if(req.cookies.cart)  cart=req.cookies.cart;
    cart.push(product);
    res.cookie("cart",cart);
    res.redirect('/product');
        });
 router.get('/cart/remove/:id',async function(req, res, next) {
    
    let cart=[];
    if(req.cookies.cart)  cart=req.cookies.cart;
    cart.splice(cart.findIndex((c)=>(c._id==req.params.id)));
    res.cookie("cart",cart);
    res.redirect('/cart');
        });

        // route for fatch a update form with a get method
    router.get('/edit/:id',async function(req, res, next) {
    let product = await Product.findById(req.params.id);
    res.render('product/edit',{product});
        });
    
    // this the code for route update a record from database with a post method
    router.post('/edit/:id',async function(req, res, next) {
        let product = await Product.findById(req.params.id);
        product.name= req.body.name;
        product.price= req.body.price;
        await product.save();
        res.redirect('/product');;
            });








module.exports = router;
