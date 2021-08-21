import { useContext, useReducer } from "react";
import TaskContext from './taskContext'
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, ACTUAL_TASK, EDIT_TASK } from "../../types";
import axiosClient from '../../config/axios'

const TaskState = props => {
    const initialState = {
        
        tasksproject: [],
        taskerror: false,
        selectedtask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = async project => {
        console.log(project)
        try {
            const result = await axiosClient.get('/api/tasks', {params: {project}})         
            console.log(result)       
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Add task to selected project
    const addTask = async task => {
        try {
            const result = await axiosClient.post('/api/tasks', task)
            console.log(result)
            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (error) {
            
        }
    }

    const validateTask = ()  => {
        dispatch({
            type: VALIDATE_TASK            
        })
    }

    const deleteTask = async (id, project) => {
        try {

            await axiosClient.delete(`/api/tasks/${id}`, {params: {project}})

            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
    

    const setActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const editTask = async task => {

        console.log(task)

        try {

            const result = await axiosClient.put(`/api/tasks/${task._id}`, task)
            console.log(result)
            dispatch({
                type: EDIT_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error)
        }   
    }

    return(
        <TaskContext.Provider
            value={{                
                tasksproject: state.tasksproject,
                taskerror: state.taskerror,
                selectedtask: state.selectedtask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,                
                setActualTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState