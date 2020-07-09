const { Sequelize, DataTypes } = require('sequelize');

const Jwt =(sequelize) => sequelize.define('Jwt', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement:true,
           primaryKey: true
       },
       jwt: {
           type: DataTypes.STRING,
           require:true
       },
       update_at: {type:DataTypes.DATE},
       deleted_at: {type:DataTypes.DATE}
   },
    {
        underscoored: true,
        paranoid: true
    }) 

module.exports = Jwt