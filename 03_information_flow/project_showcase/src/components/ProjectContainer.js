import { useState } from 'react';
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function ProjectContainer () {
    const [projects, setProjects] = useState([]);

    return (
        <>
            <ProjectForm />
            <ProjectList
                projects={projects}
                setProjects={setProjects}
             />
        </>
    )
}

export default ProjectContainer;