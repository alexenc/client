import {useContext, useEffect} from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'


export default function PrivateRoute({component: Component, ...props}) {

    const authContext = useContext(AuthContext)
    const {auth, authUser, loading} =  authContext


    useEffect(() => {
        
        authUser()
        //eslint-disable-next-line
    }, [])

    return (
        <Route {...props } render={props => !auth && !loading ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )}        
        
        />        
    )
}
