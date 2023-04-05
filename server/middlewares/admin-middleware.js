const User = require("../models/user-model");

const requireAdmin = async (req, res, next) => {
    var user;
    try{
        user = await User.findById(req.user.id);
    }catch(err){
        return res.sendStatus(404)
    }
    if (!user.isAdmin) {
        return res.sendStatus(403)
    }else{
        next()
    }
}

module.exports = requireAdmin;