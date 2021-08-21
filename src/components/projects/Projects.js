import { useContext, useEffect } from "react"
import AuthContext from "../../context/auth/authContext"
import Bar from "../layout/Bar"
import Sidebar from "../layout/Sidebar"
import TaskForm from "../task/TaskForm"
import TaskList from "../task/TaskList"



export default function Projects() {

    const authContext = useContext(AuthContext)
    const {authUser} = authContext

    useEffect(() => {
        authUser()
    }, [])

    

    return (
       <div className="contenedor-app">
           <Sidebar/>
           <div className="seccion-principal">
               <Bar/>
               <main>
               <TaskForm/>
                   <div className="contenedor-tareas">
                       <TaskList/>                        
                   </div>                   
               </main>
           </div>
       </div>
    )
}
