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

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: 'cascade'
        });
    }

    return Posts;

};