const isAuthenticated = (req,res,next) => {
    if(!req.session.passport){
        console.log('====================================');
        console.log(req.session);
        console.log('====================================');
        req.flash("error", "vous n'êtes pas Authentifié");
        res.redirect("/admin");
    }
    next()
};


module.exports = isAuthenticated;
