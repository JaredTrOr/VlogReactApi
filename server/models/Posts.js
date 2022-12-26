module.exports = (connection, type) => {
    return connection.define('Posts', {
        title: {
            type: type.STRING,
            allowNull: false
        },
        postText: {
            type: type.STRING,
            allowNull: false
        },
        username: {
            type: type.STRING,
            allowNull: false
        }
    });
};