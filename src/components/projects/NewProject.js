import { useContext, useState } from "react"
import projectContext from "../../context/projects/projectContext"



export default function NewProject() {

    //obtin form state
    const projectsContext = useContext(projectContext)
    const {form, showForm, formerror, addProject, showError } = projectsContext
    

    const [ project, setProject ] = useState({
        name: ''
    })

    const projectOnChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    

    const projectOnSubmit = e => {
        e.preventDefault()

        //validate
        if(project.name === '') {
            showError()
            return
        }
        //add to the state
        addProject(project)

        //reset form
        setProject({
            name: ''
        })
        
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showForm()}
                
            >
                New Project
            </button>

            {form 
                ?  
                        (<form 
                            className="formulario-nuevo-proyecto"
                            onSubmit={projectOnSubmit}
                            >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Name your new project"
                                name="name"
                                value={project.name}
                                onChange={projectOnChange} 
                            />

                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Add project" 
                            />
                        
                    </form>)
                
                :null}
                {formerror && <p className="mensaje error">Project name is required</p> }
        </>
    )
}
