import * as axiosService from '../services/axiosService' 

const singUpUser = async({name,pass,phone}) => {
    let res = await axiosService.forecastAxios
    .post('/users/singUp',{name,pass,phone},{
        withCredentials: true
      })
    console.log(res);
    
    return res.data.userName
}
const loginUser = async({name,pass}) => {
    let res = await axiosService.forecastAxios
    .post('/users/login',{name,pass},{
        withCredentials: true
      })
    console.log(res);
    
    return res.data.userName
}

export default {
    singUpUser,
    loginUser
}