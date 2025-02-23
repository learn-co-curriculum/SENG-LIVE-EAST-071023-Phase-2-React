import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProjectCard({
  project,
  onUpdateProject,
  onDeleteProject,
}) {
  const { id, image, about, name, link, phase, claps } = project;

  const handleClap = () => {
    const newClapCount = claps + 1;
    fetch(`http://localhost:4000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ claps: newClapCount })
    })
      .then(response => response.json())
      .then(onUpdateProject);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      onDeleteProject(id)
      fetch(`http://localhost:4000/projects/${id}`, {
        method: "DELETE"
      })
    }
  };

  return (
    <li className="card">
      <figure className="image">
        <Link className="button" to={`/projects/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <button onClick={handleClap} className="claps">
          👏{claps}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <Link className="button" to={`/projects/${id}/edit`}>
            <FaPencilAlt />
          </Link>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
    
  );
};

export default ProjectCard;
