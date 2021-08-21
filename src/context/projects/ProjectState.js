
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { useReducer } from "react";
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from "../../types";
import axiosClient from "../../config/axios";



const ProjectState = props => {    

    

    const initialState = {
        projects: [],
        form: false,
        formerror: false,
        project: null,
        messaje: null       
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
    const getProjects = async () => {
        try {
            const result = await axiosClient.get('/api/projects')
            

            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projects
            })
        } catch (error) {
            const alert = {
                msg: 'there was an error',
                category: 'alerta-error'
            }     
 
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
 
        }
    }

    // ad new project
    const addProject = async project => {       

        try {
            const result = await axiosClient.post('/api/projects', project)
            console.log(result)

            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            })
            
        } catch (error) {
            const alert = {
                msg: 'there was an error',
                category: 'alerta-error'
            }     
 
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
 
        }
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


    const deleteProject = async projectId => {
       try {
        const result = await axiosClient.delete(`/api/projects/${projectId}`)
        console.log(result.data)

        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
        getProjects()
       } catch (error) {
           const alert = {
               msg: 'there was an error',
               category: 'alerta-error'
           }     

           dispatch({
               type: PROJECT_ERROR,
               payload: alert
           })

       }
    }

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formerror: state.formerror,
                project: state.project,
                messaje: state.messaje,
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