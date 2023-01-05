const {User} = require('../config/connection');

const createUser = async (req,res) => {
    const {name, email, username, password} = req.body;

    if(name && email && username && password){
        try{
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

const loginUser = async (req,res) => {
    const {username, password} = req.body;
}

module.exports = {
    createUser,
    getUsers
}