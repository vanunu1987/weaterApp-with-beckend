var jwt = require('jsonwebtoken');

const {config} = require ('../../config/config ')
const JWT_SECRET = config['jwt-secret']
const exp = config['expiration']


const createJwt = (user_id) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + exp,
        data: user_id
    },JWT_SECRET)
    console.log('token',token); 
    return token
}

module.exports = {
    createJwt
}