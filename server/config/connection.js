require('dotenv').config();
const Sequelize = require('sequelize');
const PostsModel = require('../models/Posts');
const UserModel = require('../models/Users');
const CommentsModel = require('../models/Comments');

//Create connection
const connection = new Sequelize (
    process.env.DBNAME, 
    process.env.DBUSER, 
    process.env.DBPASSWORD,
    {
        host: process.env.DBHOST,
        dialect: 'mysql',
        port: process.env.DBPORT
    }
);

//Initialize models
const Posts = PostsModel(connection, Sequelize);
const User = UserModel(connection, Sequelize);
const Comments = CommentsModel(connection, Sequelize);

//Associations
Posts.hasMany(Comments, {
    foreignKey: 'postID',            
    onDelete: 'cascade'
});
Comments.belongsTo(Posts, {
    foreignKey: 'postID'
});

//Syncronized the database and models
connection.sync({force: false})
    .then(() => {
        console.log('Tables syncronized');
    })
    .catch((err) => {
        console.log(`ERROR ${err}`);
    });

module.exports = {
    Posts,
    User,
    Comments
}

