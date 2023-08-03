import { useState } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);

  const onLoadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }

  const addNewProject = (project) => {
    // setProjects((projects) => [...projects, project])
    fetch("http://localhost:4000/projects", {

    })
      .then((res) => res.json())
      .then((projectData) => setProjects([...[projects], projectData]));
  }

  return (
    <>
      <ProjectForm 
        addNewProject={addNewProject}
      />
      <ProjectList
        onLoadProjects={onLoadProjects}
        projects={projects}
      />
    </>
  )
}

export default ProjectsContainer;