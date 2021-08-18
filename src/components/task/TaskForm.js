
import { useContext, useState, useEffect } from "react"
import projectContext from "../../context/projects/projectContext"
import taskContext from "../../context/tasks/taskContext"


export default function TaskForm() {

    const projectsContext = useContext(projectContext)
    const { project } = projectsContext
    const tasksContext = useContext(taskContext)
    const {addTask, getTasks, validateTask, taskerror, selectedtask, editTask} = tasksContext

    useEffect(() => {
        if(selectedtask !== null) {
            setTask(selectedtask)
        } else {
            setTask({
                name: ''
            })
        }
    }, [selectedtask])
 

    const [ task, setTask ] = useState({
        name: '',
    })

    const{name} = task

    //if no project
    if(!project) return null


    //Array destructoring
    const [actualProject] = project

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if(name.trim() === ''){
            validateTask()
            return
        }

        // edit or new task
        if(selectedtask === null) {
            // new task
            task.projectId = actualProject.id
            task.status = false
            addTask(task)
            
        } else {
            editTask(task)
        }
        
        getTasks(actualProject.id)
        setTask({name: ''})


        
        
    }

    return (
        <div className="formulario">
            <form 
               onSubmit={onSubmit} 
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text" 
                        placeholder="task-name" 
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"  
                        className="btn btn-primario btn-submit btn-block"
                        value={selectedtask ? 'Edit task' : 'Add task'}               
                    />
                </div>
            </form>

            {taskerror ? <p className="mensaje error">Task name is required</p> : null}
        </div>
    )
}
