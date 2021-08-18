import React, { useContext } from 'react'
import taskContext from '../../context/tasks/taskContext'

export default function Task({task}) {

    const { deleteTask,  getTasks, changeStatus, setActualTask}= useContext(taskContext)

    const deleteTaskHandler = id => {
        deleteTask(id)
        getTasks(task.projectId)
    }

    const taskStatusHandler = task => {
        if(task.status) {
            task.status = false
        } else {
            task.status = true
        }
        changeStatus(task)
    }

    const selectTask = task => {
        setActualTask(task)
    }

    return (
       <li className="tarea sombra">
           <p>{task.name}</p>
           <div className="estado">
                {task.status 
                    ? 
                        (  <button type="button" className="completo" onClick={() => taskStatusHandler(task)}>Completed</button> ) 

                    : (  <button type="button" className="incompleto" onClick={() => taskStatusHandler(task)}>Uncompleted</button> )
                }
           </div>

           <div className="acciones">
               <button 
                className="btn btn-primario" 
                type="button" 
                onClick={() => selectTask(task)}>Edit</button>
               <button 
                className="btn btn-secundario" 
                type="button" 
                onClick={() => deleteTaskHandler(task.id)} >Delete</button>
           </div>
       </li>
    )
}
