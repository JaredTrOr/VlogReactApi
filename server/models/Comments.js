module.exports = (connection, type) => {
    const Comments = connection.define('Comments',{
        comentBody: {
            type: type.STRING,
            allowNull: false
        }
    });

    return Comments;
}