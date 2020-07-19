
import * as actionType from '../action/actionTyps'
import { updateObj } from '../utilty'

const initialState = {
isLogedIn: false,
userName: null,
}

const reducer = (state= initialState, action) =>{

    switch (action.type) {
        case actionType.SIGN_UP_USER:
            let { newUserName } = action
            console.log(newUserName);
            
            return updateObj(state,
                    {userName: newUserName}
             );
    }       
        
            return state 
    
}


export default reducer;

