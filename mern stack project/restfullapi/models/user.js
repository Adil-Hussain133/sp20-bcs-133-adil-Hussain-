var mongoose = require("mongoose");
const joi = require("@hapi/joi");
const { strict } = require("@hapi/joi/lib/base");
// var bcrypt = require("bcryptjs");


var userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    photo:String,
    phone:String,
    bio: String,
    role : String 
    
});

var User = mongoose.model("User",userSchema);
function validateUser(data){
    const schema = joi.object({
        name : joi.string().min(3).max(10).required(true),
        email : joi.string().email().min(3).max(10).required().unique(true),
        paassword: joi.string().min(3).max(10).required().unique(true),
        photo: joi.string().required(true).default("https://i.ibb.co/4pdNDK1/avatar.png"),
       phone: joi.string().default("+92"),
        bio: joi.string().max(250).default(bio),
       role : joi.string().default("user")
    },
    {
        timestamps:true,
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

// userSchema.pre("save", async function (next) {
    
//     if (!this.isModified("password")) {
//         return next();
//     }

//     //hash password
//     let salt = await bcrypt.genSalt(10);
//     const hashedpassword = await bcrypt.hash(this.paassword, salt);
//     this.paassword = hashedpassword
   
// })

 
module.exports.User = User;
module.exports.validate = validateUser;// dor signup
module.exports.validateUserLogin = validateUserLogin;// for login
