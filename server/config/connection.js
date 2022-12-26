require('dotenv').config();
const Sequelize = require('sequelize');
const PostsModel = require('../models/Posts');

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

//Syncronized the database and models
connection.sync({force: false})
    .then(() => {
        console.log('Tables syncronized');
    })
    .catch((err) => {
        console.log(`ERROR ${err}`);
    });

module.exports = {
    Posts
}

