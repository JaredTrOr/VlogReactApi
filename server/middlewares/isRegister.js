module.exports = async (req,res,next) => {
    const userFinded = await User.findOne({where: {username}});
    if(!userFinded){
        const emailFinded = await User.findOne({where: {email}});
        if(!emailFinded){
            next();
        }
        else{
            res.json({success: false, msg: `Username already exists`})
        }
    }
    else{
        res.json({success: false, msg: `Email already exists`});
    }
}