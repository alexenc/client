import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AlertContext from "../../context/alerts/alertContext"
import AuthContext from "../../context/auth/authContext"



export default function NewAccount(props) {

    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext

    const authContext = useContext(AuthContext)
    const {registerUser, message, auth} = authContext

    //user auth
    useEffect(() => {
        
        if(auth) {
            props.history.push('/projects')
        }

        if(message){
            showAlert(message.msg, message.category)
        }

    }, [message, auth, props.history])


    //Sign up  state

    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { email, password, name, confirm } = user

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
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
            showAlert('All fields required', 'alerta-error')
            return
        }

        //min password 6 char
        if(password.length < 6) {
            showAlert('Password must have at least 6 characters', 'alerta-error')
            return
        }

        //match password
        if(password !== confirm){
            showAlert('Check if both passwords are the same', 'alerta-error')
            return
        }
        //fetch action
        registerUser({
            name,
            email,
            password
        })
    }


    return (
        <div className="form-usuario">
            {alert && ( <div className={`alerta ${alert.category}`}>{alert.msg}</div> ) }
            <div className="contenedor-form sombra-dark">
                <h1>Create a new account</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="name">Username</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="your username"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

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
                        <label htmlFor="confirm">Confirm your Password</label>
                        <input 
                            type="password" 
                            id="confirm" 
                            name="confirm" 
                            placeholder="confirm your password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Sign-up"/>
                    </div>
                </form>

                <Link to={"/"} className="enlace-cuenta" >
                   Go back to Log-in screen
                </Link>
            </div>
        </div>
    )
}

