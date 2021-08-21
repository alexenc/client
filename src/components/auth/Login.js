import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AlertContext from "../../context/alerts/alertContext"
import AuthContext from "../../context/auth/authContext"

export default function Login(props) {


    const alertContext = useContext(AlertContext)
    const {alert, showAlert } = alertContext

    const authContext = useContext(AuthContext)
    const {userLogIn, message, auth} = authContext


    useEffect(() => {

        if(auth){props.history.push('/projects')}

        if(message){showAlert(message.msg, message.category)}
        //eslint-disable-next-line
        
    }, [message, auth, ])

    //login state

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //when the user wants to login

    const onSubmit = e => {
        e.preventDefault()

        //validation
        if(email.trim() === '' || password.trim() === '') {showAlert('All fields required', 'alerta-error')}

        //fetch action
        userLogIn({email, password})
    }


    return (
        <div className="form-usuario">
            {alert && <p className={`alerta ${alert.category}`}>{alert.msg}</p> }
            <div className="contenedor-form sombra-dark">
                <h1>Log In</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="your Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="your password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Log-In"/>
                    </div>
                </form>

                <Link to={"/new-account"} className="enlace-cuenta" >
                    Create New Account
                </Link>
            </div>
        </div>
    )
}
