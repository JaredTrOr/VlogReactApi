const {User} = require('../config/connection');
const bcrypt = require('bcrypt');

const createUser = async (req,res) => {
    const {name, email, username, password} = req.body;

    if(name && email && username && password){
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            req.body.password = hashedPassword;
            await User.create(req.body);
            res.json({success:true, msg: `User created`});
            
        }catch(err){
            res.json({success:false, msg: `${err}`});
        }
    }
    else{
        res.json({success: false, msg: `Incorrect data sent`});
    }
}

const getUsers = async (req,res) => {
    try{
        const users = await User.findAll();
        res.json({success:true, users});
    }catch(err){
        res.json({success:false, msg: `${err}`});
    }
}


module.exports = {
    createUser,
    getUsers
}