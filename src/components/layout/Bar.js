import { useContext} from "react"
import AuthContext from "../../context/auth/authContext"

export default function Bar() {

    const authContext = useContext(AuthContext)
    const { user,  signOut} = authContext
    


    return (
        <header className="app-header">
            { user &&<p className="nombre-usuario">Hola <span>  {user.name} </span></p>}
            <nav className="nav-pricipals">
                <button onClick={() => signOut()}>Sign out</button>             
            </nav>
        </header>
    )
}
