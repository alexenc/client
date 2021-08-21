import {PASS_REGISTER, ERROR_REGISTER, GET_USER, PASS_LOGIN, ERROR_LOGIN, END_SESSION} from '../../types'

export default ( state, action ) => {
    switch(action.type) {
        case PASS_LOGIN:
        case PASS_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                message: null,
                loading: false
            }
        
        case END_SESSION:    
        case ERROR_LOGIN:    
        case ERROR_REGISTER:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                user: null,
                auth: null,
                message: action.payload,
                loading: false
            } 
        
        case GET_USER:
            return{
                ...state,
                auth: true,
                user: action.payload,
                loading: false
            }


        default:
            return state
    }
}