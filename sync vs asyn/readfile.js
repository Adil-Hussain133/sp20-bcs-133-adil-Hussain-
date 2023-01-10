console.clear();
const fs = require("fs");
console.log("reading file");
//let data =fs.readFileSync("mytextfile.txt","utf8");//this syncronas call

//this is asyncronas call
let data =fs.readFile("mytextfile.txt","utf8",(err,data)=>{
    console.log(data);
});
console.log("file is read");
