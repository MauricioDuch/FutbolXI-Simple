let middleware = (req,res,next) => {
    if (req.session && req.session.user) {

        next()
    }
    
    res.redirect("/login")
}


module.exports = middleware