const mongoose = require("mongoose");
const productschema = mongoose.Schema({
    title:String,
    price:Number,
    tags:[String]
})

const productmodel = mongoose.model("products",productschema);
module.exports = productmodel;