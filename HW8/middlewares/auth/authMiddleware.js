const checkAuth= (req,res,next)=>{
    if(req.session.isAuthenticated)
        next();
    else{
        return res.redirect('/auth/login');
    }

};
module.exports= checkAuth;