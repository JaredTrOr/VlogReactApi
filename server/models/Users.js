module.exports = (connection, type) => {
    return connection.define('User', {
        id: {
            primaryKey: true,
            type: type.STRING,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        username: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
    });
};