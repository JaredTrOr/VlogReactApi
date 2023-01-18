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

const login = async (req,res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({where: {username}});
        if(user){
            try{
                //Check if it's a user or admin

                if(user.admin)

                if(await bcrypt.compare(password,user.password)){
                    //Logged in
                }
                //Incorrect password
            }catch(err){
                return res.json({success: false, msg: err});
            }
        }
        return res.json({success: false, msg: `Incorrect username`});
    }catch(err){
        return res.json({success: false, msg: err});
    }
}


module.exports = {
    createUser,
    getUsers
}