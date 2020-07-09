require('dotenv').config()
const env = process.env.NODE_ENV || "development";
const expiration =  (60 * 60)
const config = {
  "development": {
    "username": process.env.NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
    "operatorsAliases": false,
    "forcast-api-key": process.env.FORCAST_KEY,
    "jwt-secret": process.env.JWT_SECRET,
    "expiration": expiration,
    "saltRounds": 8
  },
  "test": {
    "username": "root",
    "password": "Newpass1",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}

module.exports = {
  config:config[env],
  env
}