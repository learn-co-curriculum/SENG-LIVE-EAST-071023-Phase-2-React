import React, { useState } from "react";

const initalState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: ""
}
function ProjectForm({ addNewProject }) {
  const [formData, setFormData] = useState(initalState);

  const {name, about, phase, link, image} = formData

  const handleOnChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewProject(formData)
    setFormData(initalState)
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={name}
          onChange={handleOnChange}
      />

        <label htmlFor="about">About</label>
        <textarea 
        id="about" 
        name="about"
        value={about}
        onChange={handleOnChange}
      />

        <label htmlFor="phase">Phase</label>
        <select 
          id="phase"
          name="phase"
          value={phase}
          onChange={handleOnChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link"
          value={link}
          onChange={handleOnChange}
          />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image"
          value={image}
          onChange={handleOnChange}
          />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
