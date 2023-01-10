console.clear();
const http = require("http");


http.createServer(function(req,res){
    console.log(req.url);
    switch(req.url){
        case "/":
            res.write("<h1> Home page </h1>");
            break;
        case "/hobbies":
            res.write("<h1>My hobies</h1>");
            break;
        default:
            res.write("<h1>The  page is not found</h1>");
            break;        
    }
   
    res.end();
}).listen(8080);