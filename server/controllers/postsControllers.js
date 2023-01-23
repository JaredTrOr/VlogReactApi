const {Posts} = require('../config/connection'); //Post model
const {Op} = require('sequelize');

const getPosts = async (req,res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
}

const getPeoplePosts = async (req,res) => {
    const {username} = req.params;
    const listOfPosts = await Posts.findAll({
        where: {
            username: {[Op.not]: username}
        }
    });
    res.json(listOfPosts);
}

const getPostId = async (req,res) => {
    const {id} = req.params;

    const post = await Posts.findByPk(id);
    res.json(post);
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
    getPostId,
    createPosts,
    getPeoplePosts
}