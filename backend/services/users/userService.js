const validate = require('validate.js')
const bcrypt = require('bcrypt');

const usersDb = require('./users_db')  
const jwtService = require('../jwt.js/jwtService')
const {config} = require ('../../config/config ')

const createUser = async ({user_name,password,phone},callback) =>{
   const validation = getValidetion({user_name,password,phone})
    if (!validation) {
        try{
            const usersName = await usersDb.findByPropertys(['user_name'])
            const isUserNameExsist = usersName.some(userName => userName.dataValues.user_name === user_name)
            if (isUserNameExsist) {
                return callback('User name is allredy exsist !', undefined)
            } else {
                try {
                    const user = await hashAndCreateUser(user_name,password,phone)
                    console.log('user',user);
                    const token =  jwtService.createJwt(user.dataValues.id)
                    return callback(undefined,{token,userName:user.dataValues.user_name})
                } catch (err) {
                    console.log(err);
                    return callback(err,undefined)
                }
            }
        } catch (err){
            console.log(err);
            return callback(err,undefined)
        }
       
    }
    return callback(validation,undefined)
}

const validateUser = async({user_name,password},callback) =>{
    const [user] = await usersDb.findByKeyValue('user_name',user_name)
    console.log('user',user);
    if (!user) {
        return callback('problem with loging in !',undefined)
    }
    bcrypt.compare(password, user.dataValues.password).then((result) =>{
        if (result) {
            const token =  jwtService.createJwt(user.dataValues.id)
            return callback(undefined,{token,userName:user.dataValues.user_name})
        } else {
            return callback('problem with loging in !',undefined)
        }
    });
}


const getValidetion = ({user_name,password,phone}) => {
    console.log(user_name,password,phone);
    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/
    const phonePattern = /\(?([0-9]{3})\)?([-])([0-9]{3})([0-9]{4})/
    const constraints = {
        user_name: {
            presence: true,
            length: {minimum: 6, maximum:20}
        },
        password: {
            presence: true,
            length: {minimum: 8, maximum:20},
            format: {
                pattern: passwordPattern, 
                message:'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
            }
        },
        phone: {
            format: {
                pattern: phonePattern, 
                message:'Phone number has to be in format xxx-xxxxxxx'
            }
        }
    }
    const validation = validate({user_name,password,phone},constraints)
    
    return validation
}

const hashAndCreateUser = async (user_name,password,phone) => {
    try{
        return bcrypt.hash(password, config.saltRounds).then(async(hash) =>{
             return await usersDb.createUserInDb({user_name,password:hash,phone})
         });
    } catch(err) {
        throw new Error(err)
    }
}


module.exports = {
    createUser,
    validateUser
}