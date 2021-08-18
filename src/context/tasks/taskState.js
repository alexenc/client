import { useContext, useReducer } from "react";
import TaskContext from './taskContext'
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATUS_TASK, ACTUAL_TASK, EDIT_TASK } from "../../types";


const TaskState = props => {
    const initialState = {
        tasks: [
            {id: 1, name: 'choose platform', status: true, projectId: 1 },
            {id: 2,name: 'Design landing page', status: true, projectId: 2 },
            {id: 3, name: 'Create products', status: false, projectId: 3 },
            {id: 4, name: 'miau', status: false, projectId: 3 },
            {id: 5, name: 'Design landing page 2', status: true, projectId: 2 },
            {id: 6, name: 'Create products 2', status: false, projectId: 1 },
            {id: 7, name: 'miau 2', status: false, projectId: 2 }
        ],
        tasksproject: null,
        taskerror: false,
        selectedtask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    //Add task to selected project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validateTask = ()  => {
        dispatch({
            type: VALIDATE_TASK            
        })
    }

    const deleteTask = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    const changeStatus = task => {
        dispatch({
            type: STATUS_TASK,
            payload: task
        })
    }

    const setActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const editTask = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                taskerror: state.taskerror,
                selectedtask: state.selectedtask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStatus,
                setActualTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState