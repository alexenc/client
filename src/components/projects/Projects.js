import Bar from "../layout/Bar"
import Sidebar from "../layout/Sidebar"
import TaskForm from "../task/TaskForm"
import TaskList from "../task/TaskList"



export default function Projects() {
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
