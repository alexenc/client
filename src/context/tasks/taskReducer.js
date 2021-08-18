import { ACTUAL_TASK, ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK, TASKS_PROJECT, VALIDATE_TASK } from "../../types"





export default (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            return{
                ...state,
                tasks: [action.payload, ...state.tasks ],
                taskerror: false
            }    
        
        case TASKS_PROJECT:
            return{
                ...state,
                tasksproject: state.tasks.filter(task => task.projectId === action.payload)
            }

        case VALIDATE_TASK: 
            return{
                ...state,
                taskerror: true
            }    

        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
            
        case STATUS_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
            
        case ACTUAL_TASK:
            return{
                ...state,
                selectedtask: action.payload
            }    

        case EDIT_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
                selectedtask: null
            }    


        default:
            return state
    }
}