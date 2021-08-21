import { ACTUAL_TASK, ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK, TASKS_PROJECT, VALIDATE_TASK } from "../../types"





export default (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            return{
                ...state,
                tasksproject: [action.payload, ...state.tasksproject ],
                taskerror: false
            }    
        
        case TASKS_PROJECT:
            return{
                ...state,
                tasksproject: action.payload
            }

        case VALIDATE_TASK: 
            return{
                ...state,
                taskerror: true
            }    

        case DELETE_TASK:
            return{
                ...state,
                tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
            }
            
        
            
        case ACTUAL_TASK:
            return{
                ...state,
                selectedtask: action.payload
            }    

        case EDIT_TASK:
            return{
                ...state,
                tasksproject: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task),
                selectedtask: null
            }    


        default:
            return state
    }
}