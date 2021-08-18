import { useContext } from "react"
import projectContext from "../../context/projects/projectContext"
import taskContext from "../../context/tasks/taskContext"


export default function Project({project}) {

    const projectsContext = useContext(projectContext)
    const { actualProject } = projectsContext

    const tasksContext = useContext(taskContext)
    const {getTasks} = tasksContext

    const selectProject = id => {
        actualProject(id) //set actual project
        getTasks(id) 


    }


    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    )
}
