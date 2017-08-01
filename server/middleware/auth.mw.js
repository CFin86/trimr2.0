exports.isLoggedIn = function(req, res, next) {
    if(req.user){
        next();
    } else{
        res.sendStatus(401)
    }
}
exports.isStylist = function (req, res, next) {
    if (req.user.role === 'stylist') {
        next();
    } else {
        res.sendStatus(401);
    }
}
exports.isUser = function (req, res, next) {
    if (req.user.role === 'user') {
        next();
    } else {
        res.sendStatus(401);
    }
}
exports.isAdmin = function (req, res, next) {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.sendStatus(401);
    }
}