import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import projects from "../projects";

function ProjectList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  })

  const renderedProjects = filteredProjects.map(project => {
    return <ProjectCard key={project.id} project={project} />
  })

  const handleSearchChange = (event) => {
    setSearchQuery(searchQuery => event.target.value)
  }

  console.log("search query is: " + searchQuery)
  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
      type="text" 
      placeholder="Search..."
      onChange={handleSearchChange}
      />

      <ul className="cards">{renderedProjects}</ul>
    </section>
  );
};

export default ProjectList;
