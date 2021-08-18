import React, { useContext } from 'react'
import Task from './Task'
import projectContext from "../../context/projects/projectContext"
import taskContext from '../../context/tasks/taskContext'
import {CSSTransition, TransitionGroup} from 'react-transition-group'


export default function TaskList() {
    const projectsContext = useContext(projectContext)
    const { project, deleteProject } = projectsContext
    const {tasksproject} = useContext(taskContext)

    //if no project
    if(!project) return <h2>Select a project</h2>


    //Array destructoring
    const [actualProject] = project

    
    

    return (
        <>
            {project && <h2>Project: {actualProject.name}</h2>}
            <ul className="listado-tareas">
                {tasksproject.length === 0 
                    ? (<li className="tarea">There are no tasks</li>) 

                    :  
                    <TransitionGroup>
                        {tasksproject.map(task => (
                        <CSSTransition 
                            key={task.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Task task={task} />
                        </CSSTransition>))}
                    </TransitionGroup>                   
                }
                
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(actualProject.id)}
            >Delete project &times;</button>
        </>
    )
}
