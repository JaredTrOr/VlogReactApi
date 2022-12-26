const {Posts} = require('../config/connection'); //Post model

const getPosts = (req,res) => {
    res.send('Welcome to vlog-post');
}

const createPosts = async (req,res) => {
    try{
        await Posts.create(req.body);
        res.json({success:true, msg: req.body});
    }catch(err){
        res.json({success:false, msg: `${err}`});
    }
};

module.exports = {
    getPosts,
    createPosts
}