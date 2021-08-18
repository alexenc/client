import uuid from 'uuid'
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { useReducer } from "react";
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from "../../types";



const ProjectState = props => {    

    const projects = [
        {id: 1, name: 'e-commerce'},
        {id: 2, name: 'fb-ads'},
        {id: 3, name: 'huir de españa'}
    ]

    const initialState = {

        projects: [
            
        ],
        form: false,
        formerror: false,
        project: null       
    }

    

    //Dispatch to execute actions
    const [ state, dispatch] = useReducer(projectReducer, initialState)

    //functions CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    //get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    // ad new project
    const addProject = project => {
        project.id = uuid.v4()

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //Validate form
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    //onclick project
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }


    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formerror: state.formerror,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState