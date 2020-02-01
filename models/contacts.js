module.exports = function (sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {

        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true,
            validate: {
                isEmail: true
            }
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
        }
    })
    return Contact;
}