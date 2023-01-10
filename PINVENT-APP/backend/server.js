const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var config = require("config");
var createError = require('http-errors');
var path = require('path');





const app = express()

// iddleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes

app.get("/", (req, res) => {
    console.log("Home page")
} )

// CONNECT TO DB AND START SERVER


mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    console.log("mongoose is connnected")
    // console.log(`server is running on port ${PORT}`)
)
.catch((err)=>console.log(err));