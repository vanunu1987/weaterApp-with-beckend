import * as actionTypes from '../action/actionTyps'
import userSevice from '../../services/userService'



export const setUser = (user)=>{
    return{
        type: actionTypes.SIGN_UP_USER,
        newUserName:user
    }
}

const setErrorHandle = (err) =>{
    return{
        type: actionTypes.SET_ERROR_HANDLE,
        err
    }
}



//Action 
export const  userSignUp =  (userCardentials) =>{
    return async (dispatch) =>{
        try {
            let user = await userSevice.singUpUser(userCardentials)
            console.log('user',user);
            
            dispatch(setUser(user))
            return true
        }
        catch (error){
            
            dispatch(setErrorHandle(error))
            return false
        }
    }

}

export const  userLogin =  (userCardentials) =>{
    return async (dispatch) =>{
        try {
            let user = await userSevice.loginUser(userCardentials)
            console.log('user',user);
            
            dispatch(setUser(user))
            return true
        }
        catch (error){
            
            dispatch(setErrorHandle(error))
            return false
        }
    }

}
