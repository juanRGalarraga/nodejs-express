module.exports = function(req, res, next){
    let tenant = req.body.tenant;
    if(!tenant){
        return res.status(400).json({error : "Falta indicar tenant"});
    }
    global.DEVELOPED_NAME = tenant;
    next();
}