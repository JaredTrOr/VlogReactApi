const {User} = require('../config/connection');
const bcrypt = require('bcrypt');

const createUser = async (req,res) => {
    const {name, email, username, password} = req.body;

    if(name && email && username && password){
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            req.body.password = hashedPassword;
            await User.create(req.body);
            const user = await User.findOne({where: {username}});
            req.session.user = user;
            res.json({success:true, msg: `User created`, user});            
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

const getUserId = async (req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        res.json({success:true, user});
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
                if(await bcrypt.compare(password,user.password)){
                    req.session.user = user;
                    res.json({success:true, msg: `User logged in`, user});  
                }
                else{
                    res.json({success: false, msg: 'Incorrect password'});
                }
            }catch(err){
                res.json({success: false, msg: err});
            }
        }
        else{
            res.json({success: false, msg: `Incorrect username`});
        }
    }catch(err){
        res.json({success: false, msg: `err ${err}`});
    }
}

const getSession = (req,res) => {
    console.log(req.session.user);
    if(req.session.user){
        res.json({success:true, msg: 'User with session'});
    }
    else{
        res.json({success: false, msg: 'No user with session'});
    }
}

const logOut = (req,res) => {
    req.session.destroy();
    res.clearCookie('user_cookie');
    res.end();
}

module.exports = {
    createUser,
    getUsers,
    login,
    getUserId,
    getSession
}