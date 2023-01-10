function checksessionAuth(req,res,next){
    // set variables for all pug files
    if(req.session.user) next();
    else return res.redirect("/login");


}

module.exports = checksessionAuth;