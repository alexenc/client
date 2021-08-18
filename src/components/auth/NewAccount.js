import { useState } from "react"
import { Link } from "react-router-dom"

export default function NewAccount() {


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


        //min password 6 char


        //match password


        //fetch action
    }


    return (
        <div className="form-usuario">
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

