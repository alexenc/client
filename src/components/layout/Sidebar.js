import NewProject from "../projects/NewProject";
import ProjectList from "../projects/ProjectList";

function Sidebar() {
    return (
        <aside>
            <h1>Mern<span>Task</span></h1>
            <NewProject/>

            <div className="proyectos">
                <h2>Your projects</h2>
            </div>
            <ProjectList/>
            
            
        </aside>
    )
}

export default Sidebar
