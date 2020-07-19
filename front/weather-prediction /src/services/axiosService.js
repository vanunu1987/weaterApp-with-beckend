import Axios from 'axios'

Axios.defaults.withCredentials = true

export const forecastAxios = Axios.create({
    baseURL:'http://localhost:3003/'
})

forecastAxios.interceptors.response.use(res => res,error => {
    // let {user_name,password,phone} = error.response.data.message
    // user_name = user_name || ''
    // password = password || ''
    // phone = phone || ''
    // const regex = /\[\"/gi;
    // const regex2 = /\"\]/gi;
    // const regex3 = /\"\"/gi;
    // const text = JSON.stringify(user_name).concat(JSON.stringify(password)).concat(JSON.stringify(phone && phone)).replace(regex,'').replace(regex2,',').replace(regex3,'')
    // console.log('error : ',text);
    // return Promise.reject({text,msg:'             authentication failed!'})
    console.log('error : ',error);
    // throw new Error(error)
    return Promise.reject(error)
})