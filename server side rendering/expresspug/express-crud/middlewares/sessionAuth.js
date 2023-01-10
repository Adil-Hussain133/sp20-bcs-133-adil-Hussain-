function sessionAuth(req,res,next){
    // set variables for all pug files
    res.locals.user= req.session.user;
    next();

}

module.exports = sessionAuth;