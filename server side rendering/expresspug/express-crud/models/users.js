var mongoose = require("mongoose");

var usersschema = mongoose.Schema({
    name: String,
    email : String,
    password : String,
});

const user = mongoose.model("User",usersschema);
module.exports= user;