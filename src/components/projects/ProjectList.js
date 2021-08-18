import Project from "./Project";
import projectContext from "../../context/projects/projectContext"
import { useContext, useEffect } from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export default function ProjectList() {

    //extract projects from initialState

    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext

    useEffect(() => {
        getProjects()

    }, [])
    
    //check if projects is not empty
    if(projects.length === 0) return <p>There are no projects, start by creating one</p>

    
    

    return (
        <ul className="listado-proyectos">
            
               <TransitionGroup>
                   {projects.map(project => (<CSSTransition
                     key={project.id} 
                     timeout={200} 
                     classNames="proyecto"
                     >
                    <Project project={project}/>
                </CSSTransition>))}
               </TransitionGroup> 
            
        </ul>
    )
}
