module.exports = (connection, type) => {
    const Users = connection.define('User', {
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
        admin: {
            type: type.INTEGER,
            allowNull: false
        }
    });

    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: 'cascade'
        });

        Users.hadMany(models.Comments, {
            onDelete: 'cascade'
        })
    }

    return Users;
};