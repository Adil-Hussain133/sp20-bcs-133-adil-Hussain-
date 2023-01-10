var express = require('express');
var router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/register", async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user) return res.status(400).send("user with given email is already exist");
     user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.phone = req.body.phone;
    user.bio = req.body.bio;
    user.photo = req.body.photo;
    user.role = req.body.role;
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    await user.save();
    let token = jwt.sign({ _id: user._id, name: user.name,role:user.role },
        config.get("jwtPrivateKey"));
    let dataToReturn = {
        name:user.name,
        email: user.email,
        bio: user.bio,
        phone: user.bio,
        photo:user.photo,
        token : user.token

    }
    return res.send(dataToReturn);
})

router.post("/login", async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if (!user)
        return res.status(400).send("this user is not register");

    let isValid = await bcrypt.compare(req.body.password ,user.password);
    if (!isValid)
        return res.status(401).send("password is incorrect");
    let token = jwt.sign({ _id: user._id, name: user.name,role:user.role },
        config.get("jwtPrivateKey"));
    res.send(token);

})


module.exports = router;
