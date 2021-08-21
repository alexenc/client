
import { useReducer } from 'react'
import axiosClient from '../../config/axios'
import {PASS_REGISTER, ERROR_REGISTER, GET_USER, PASS_LOGIN, ERROR_LOGIN, END_SESSION} from '../../types'
import tokenAuth from '../../config/tokenAuth'
import AuthContext from './authContext'
import AuthReducer from './authReducer'


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const registerUser = async data => {
        try {
            const res = await axiosClient.post('/api/users', data)
            console.log(res.data)

            dispatch({
                type: PASS_REGISTER,
                payload: res.data

            })

            //get user
            authUser()
            
        } catch (error) {
            //console.log(error.response.data.msg)

            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: ERROR_REGISTER,
                payload: alert
            })
        }
    }

    //return auth user 
    const authUser = async () => {
        const token = localStorage.getItem('token')
        if(token){
            //TODO: func to send token by headers
            tokenAuth(token)
        }

        try {
            
            const response = await axiosClient.get('/api/auth')
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })

        } catch (error) {
            console.log(error.response)
            dispatch({
                type: ERROR_LOGIN
            })
        }
    }


    const userLogIn = async data => {
        try {
            const response = await axiosClient.post('/api/auth', data)
            console.log(response)

            dispatch({
                type: PASS_LOGIN,
                payload: response.data
            })

            authUser()

        } catch (error) {
            console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: ERROR_LOGIN,
                payload: alert
            })
        }
    }


    //sign out

    const signOut = () => {
        dispatch({
            type: END_SESSION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                toke: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                userLogIn,
                authUser,
                signOut

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState