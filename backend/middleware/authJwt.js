var jwt = require('jsonwebtoken');

const {config} = require ('../config/config ')
const JWT_SECRET = config['jwt-secret']


const checkForAuth = async (req,res,next)=> {
    const token = req.cookies.token || ''
    try {
        if (!token) {
          return res.status(401).json('You need to Login')
        }
        await jwt.verify(token, JWT_SECRET);
        
        next();
      } catch (err) {
          console.log(err);
          
        return res.status(500).json(err.toString());
      }

}

module.exports = {
    checkForAuth
}