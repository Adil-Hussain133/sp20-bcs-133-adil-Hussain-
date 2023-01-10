var mongoose = require("mongoose");
const joi = require("@hapi/joi");
const Joi = require("@hapi/joi");

var productSchema = mongoose.Schema({
    name:String,
    price:Number,
});

var Product = mongoose.model("Product",productSchema);
function validateProduct(data){
    const schema = joi.object({
        name: joi.string().required(true, "please enter product name").trim(rue),
        description:joi.String().required(true,"please enter description of product"),
        price: Joi.Number().min(0).required(true, "please enter the price of prodct").maxLength(6, "price cannot exceed 6 character"),
        rating: joi.Number().dafault(0),
        images: [{
            public_id: joi.String().required(true),
            url: joi.String().required(true)
        }],
        category: joi.String().required(true,"please enter product catogery"),
        stock: joi.Number().required(true, "please enter product stock").default(1),
        numberOdReviews: joi.Number().default(0),
        reviews:joi.
        

    });

        return schema.validate(data,{abortEarly:false});
}
module.exports.Product = Product;
module.exports.validate = validateProduct