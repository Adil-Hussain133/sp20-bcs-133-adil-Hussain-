
function auth(req,res,next){
    let token = req.header("x-auth-token");
    if(!token) return res.status(400).send("token not provided");
   
    next();
}

module.exports  = auth;