import Project from "./Project";
import projectContext from "../../context/projects/projectContext"
import AlertContext from "../../context/alerts/alertContext"
import { useContext, useEffect } from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export default function ProjectList() {

    //extract projects from initialState

    const projectsContext = useContext(projectContext)
    const {projects, getProjects, messaje} = projectsContext

    const alertContext = useContext(AlertContext)
    const {showAlert, alert} = alertContext

    

    useEffect(() => {

        if(messaje) {
            showAlert(messaje.msg, messaje.category)
        }

        getProjects()

    }, [messaje])
    
    //check if projects is not empty
    if(projects.length === 0) return <p>There are no projects, start by creating one</p>

    
    

    return (
        <ul className="listado-proyectos">
                { alert && ( <div className={`alerta ${alert.category}`}>{alert.msg}</div> ) }
               <TransitionGroup>
                   {projects.map(project => (<CSSTransition
                     key={project._id} 
                     timeout={200} 
                     classNames="proyecto"
                     >
                    <Project project={project}/>
                </CSSTransition>))}
               </TransitionGroup> 
            
        </ul>
    )
}
