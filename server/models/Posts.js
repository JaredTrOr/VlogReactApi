module.exports = (connection, type) => {
    const Posts = connection.define('Posts', {
        title: {
            type: type.STRING,
            allowNull: false
        },
        postText: {
            type: type.STRING,
            allowNull: false
        },
    });

    return Posts;

};