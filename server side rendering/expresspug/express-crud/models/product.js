var mongoose = require("mongoose");

var productschema = mongoose.Schema({
    name: String,
    price : String,
});

const Product = mongoose.model("Product",productschema);
module.exports= Product;