import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from "../../types";



export default (state, action) => {
    switch(action.type) {

        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }

        case GET_PROJECTS:
            
            return{
                ...state,
                projects: action.payload
            }

        case ADD_PROJECT:
            return{
                ...state,
                projects: [action.payload, ...state.projects ],
                form: false,
                formerror: false
            } 
        
        case VALIDATE_FORM:
            return{
                ...state,
                formerror: true
            }
            
        case ACTUAL_PROJECT:
            return{
                ...state,
                project: state.projects.filter(project => project._id === action.payload)
            }
            
        case DELETE_PROJECT:
            return{
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload),
                project: null
            }  
            
        case PROJECT_ERROR:
            return{
                ...state,
                messaje: action.payload
            }    

        default:
             return state;
    }
}
