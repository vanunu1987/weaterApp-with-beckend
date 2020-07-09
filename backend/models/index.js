'use strict';

const fs = require('fs');
const path = require('path');
const {config} = require('../config/config ');
const { Sequelize, DataTypes } = require('sequelize');

const filebasename = path.basename(__filename);
const db = {};

console.log(config);


const sequelize = new Sequelize(config.database, config.username, config.password,{
  dialect:config.dialect,
  host:config.host
});


fs
  .readdirSync(__dirname)
  .filter((file) => {
    const returnFile = (file.indexOf('.') !== 0)
      && (file !== filebasename)
      && (file.slice(-3) === '.js');
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


//ASSOCIATIONS

//Jwt 
db.Jwt.hasMany(db.User)

//Users
db.User.belongsTo(db.Jwt)

sequelize.authenticate()
.then(()=> {
  console.log('Connection has been established successfully.');
})
.catch (error=> {
  console.error('Unable to connect to the database:', error);
})

module.exports = db;
