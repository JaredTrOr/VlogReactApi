const {Posts} = require('../config/connection'); //Post model

const getPosts = (req,res) => {
    res.send('Welcome to vlog-post');
}

const createPosts = async (req,res) => {
    const {title, postText, username} = req.body;
    if(title && postText && username){
        try{
            await Posts.create(req.body);
            res.json({success:true, msg: req.body});
        }catch(err){
            res.json({success:false, msg: `${err}`});
        }
    }
    else{
        res.json({success:false, msg: `Incorrect data sent`});
    }
};

module.exports = {
    getPosts,
    createPosts
}