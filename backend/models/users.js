
const { Sequelize, DataTypes } = require('sequelize');

const User =(sequelize) => sequelize.define('User', {
       id: {
           type: DataTypes.UUID,
           defaultValue: Sequelize.UUIDV4,
           primaryKey: true
       },
       user_name: {
        type: DataTypes.STRING, 
        len:[6,20],
        required:true,
        allowNull:true
       },
       password: {
        type: DataTypes.STRING, 
        len:[8,50],
        required:true,
        allowNull:true
       },
       phone: {
           type: DataTypes.STRING,
           isNumeric: true,
       },
       jwt_id: {
           type:DataTypes.INTEGER,
           require:false, 
           allowNull:true
       },
       update_at: {type:DataTypes.DATE},
       deleted_at: {type:DataTypes.DATE}
   },
    {
        underscoored: true,
        paranoid: true
    })

module.exports = User