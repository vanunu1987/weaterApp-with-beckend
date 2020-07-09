const BASE = '/users'
const userService = require('../services/users/userService')
const {config} = require ('../config/config ')


const usersRaoute = (app) => {

    app.post(`${BASE}/singUp`, (req,res) => {
        const user_name = req.body.name
        const password = req.body.pass
        const phone = req.body.phone
        userService.createUser({user_name,password,phone}, (err, data) =>{
            if (err) {
                console.log(err);
               return res.status(400).json({message: err})
            }
            res.cookie('token', data.token, {
                expires: Math.floor(Date.now() / 1000) + config.expires,
                secure: false, // set to true if your using https
                httpOnly: true,
              });
            res.status(200).json({message:'autenticated !',userName:data.userName})  
        })
    })
    
    app.post(`${BASE}/login`, (req,res) => {
        const user_name = req.body.name
        const password = req.body.pass
        console.log('login', user_name,password);
        
        userService.validateUser({user_name,password}, (err, data) =>{
            if (err) {
                console.log(err);
               return res.status(400).json({message: err})
            }
            res.cookie('token', data.token, {
                expires: Math.floor(Date.now() / 1000) + config.expires,
                secure: false, // set to true if your using https
                httpOnly: true,
              });
            res.status(200).json({message:'autenticated !',userName:data.userName})  
        })
    })

   
}

module.exports = usersRaoute