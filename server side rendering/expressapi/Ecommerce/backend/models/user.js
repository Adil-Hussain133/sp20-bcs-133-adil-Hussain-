var mongoose = require("mongoose");
const joi = require("@hapi/joi");


var userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    
});

var User = mongoose.model("User",userSchema);
function validateUser(data){
    const schema = joi.object({
        name : joi.string().min(3).max(10).required(true),
        email : joi.string().email().min(3).max(10).required().unique(true),
        paassword : joi.string().min(3).max(10).required().unique(true),
        
    });
    

        return schema.validate(data,{abortEarly:false});
}


var User = mongoose.model("User",userSchema);
function validateUserLogin(data){
    const schema = joi.object({
       
        email : joi.string().email().min(3).max(10).required(),
        paassword : joi.string().min(3).max(10).required(),
        
    });
    

        return schema.validate(data,{abortEarly:false});
}

 
module.exports.User = User;
module.exports.validate = validateUser;// dor signup
module.exports.validateUserLogin = validateUserLogin;// for login
