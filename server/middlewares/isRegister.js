const {User} = require('../config/connection');

module.exports = async (req,res,next) => {
    const {username, email} = req.body;
    const userFinded = await User.findOne({where: {username}});
    if(!userFinded){
        const emailFinded = await User.findOne({where: {email}});
        if(!emailFinded){
            next();
        }
        else{
            res.json({success: false, msg: `Email already exists`});
        }
    }
    else{
        res.json({success: false, msg: `Username already exists`});
    }
}